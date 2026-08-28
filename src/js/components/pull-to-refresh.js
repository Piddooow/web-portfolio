// ==========================================================================
// Pull to Refresh — Minimalist Spider Icon Engine (Phantom Troupe #0)
// High-Precision Rubber-Band Physics, Glassmorphic Capsule, Seamless Touch/Mouse,
// 360° Neon Orbiting Ring, Preloader Curtain Sync & Zero-Lag 60/120fps Gesture Tracking
// ==========================================================================

import { initPreloader } from './preloader.js';

export function initPullToRefresh(options = {}) {
  const pullThreshold = options.pullThreshold || 75;
  const maxPull = options.maxPull || 125;
  const spiderSrc = options.spiderSrc || 'src/assets/images/spider-icon.png';
  const onRefresh = options.onRefresh || (async () => {
    window.dispatchEvent(new CustomEvent('app:refresh', { detail: { timestamp: Date.now() } }));

    if (typeof initPreloader === 'function') {
      await initPreloader({
        duration: 1400,
        isRefresh: true,
        words: [
          'SYNCHRONIZING ARCHITECTURE',
          'UPDATING PORTFOLIO TOKENS',
          'RE-ALIGNING COMPONENTS',
          'WELCOME TO VIDD'
        ],
        onReady: () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          if (typeof window.handleRoute === 'function') {
            window.handleRoute();
          }
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (typeof window.handleRoute === 'function') {
        window.handleRoute();
      }
      await new Promise((r) => setTimeout(r, 1100));
    }
  });

  // Ensure single indicator element
  let indicator = document.getElementById('pull-to-refresh-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'pull-to-refresh-indicator';
    indicator.className = 'pull-to-refresh-indicator';
    indicator.setAttribute('role', 'status');
    indicator.setAttribute('aria-live', 'polite');
    indicator.innerHTML = `
      <div class="ptr-mascot-box">
        <svg class="ptr-ring-svg" viewBox="0 0 32 32" aria-hidden="true">
          <defs>
            <linearGradient id="ptr-spider-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#818cf8" />
              <stop offset="50%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
          </defs>
          <circle class="ptr-ring-bg" cx="16" cy="16" r="14" />
          <circle id="ptr-ring-bar" class="ptr-ring-progress" cx="16" cy="16" r="14" style="stroke: url(#ptr-spider-gradient);" />
        </svg>
        <img id="ptr-spider-img" src="${spiderSrc}" alt="Phantom Troupe Spider" class="ptr-spider-img" />
      </div>
      <div class="ptr-text-group">
        <span id="ptr-status-title" class="ptr-status-title">Pull to refresh</span>
        <span id="ptr-status-sub" class="ptr-status-sub">PORTFOLIO SYNC</span>
      </div>
    `;
    document.body.appendChild(indicator);
  }

  const ringBar = document.getElementById('ptr-ring-bar');
  const titleEl = document.getElementById('ptr-status-title');
  const subEl = document.getElementById('ptr-status-sub');

  let startX = 0;
  let startY = 0;
  let isDragging = false;
  let isRefreshing = false;
  let pullDistance = 0;
  let hasTriggeredHaptic = false;
  let isAngleLocked = false;
  let isTouchGesture = false;

  const RING_CIRCUMFERENCE = 88; // 2 * PI * 14

  function getScrollTop() {
    return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function triggerHaptic(ms = 10) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(ms);
      } catch (_) {}
    }
  }

  function updateIndicator(pull, dragging = false) {
    if (!indicator) return;

    if (dragging) {
      indicator.classList.add('is-dragging');
    } else {
      indicator.classList.remove('is-dragging');
    }

    const progress = Math.max(0, Math.min(pull / pullThreshold, 1.0));
    const ringOffset = RING_CIRCUMFERENCE - progress * RING_CIRCUMFERENCE;

    if (ringBar && !indicator.classList.contains('is-success')) {
      ringBar.style.strokeDashoffset = String(ringOffset);
    }

    const isReady = pull >= pullThreshold;

    if (isRefreshing) {
      indicator.className = 'pull-to-refresh-indicator is-refreshing';
      if (titleEl) titleEl.textContent = 'Refreshing...';
      if (subEl) subEl.textContent = 'SYNCING PORTFOLIO';
      indicator.style.opacity = '1';
      indicator.style.transform = 'translateX(-50%) translateY(24px)';
      return;
    }

    if (isReady) {
      if (!hasTriggeredHaptic) {
        triggerHaptic(12);
        hasTriggeredHaptic = true;
      }
      indicator.className = dragging ? 'pull-to-refresh-indicator is-dragging is-ready' : 'pull-to-refresh-indicator is-ready';
      if (titleEl) titleEl.textContent = 'Release to refresh';
      if (subEl) subEl.textContent = 'RELEASE NOW';
    } else if (pull > 20) {
      hasTriggeredHaptic = false;
      indicator.className = dragging ? 'pull-to-refresh-indicator is-dragging' : 'pull-to-refresh-indicator';
      if (titleEl) titleEl.textContent = 'Pull to refresh';
      if (subEl) subEl.textContent = Math.round(progress * 100) + '%';
    } else {
      hasTriggeredHaptic = false;
      indicator.className = dragging ? 'pull-to-refresh-indicator is-dragging' : 'pull-to-refresh-indicator';
      if (titleEl) titleEl.textContent = 'Pull to refresh';
      if (subEl) subEl.textContent = 'PORTFOLIO SYNC';
    }

    if (pull > 0) {
      const opacity = Math.min(1, Math.max(0.2, pull / 35));
      const translateY = -50 + (pull * 0.75);
      indicator.style.opacity = String(opacity);
      indicator.style.transform = `translateX(-50%) translateY(${translateY}px)`;
    } else {
      indicator.style.opacity = '0';
      indicator.style.transform = 'translateX(-50%) translateY(-140%)';
    }
  }

  function handleTouchStart(e) {
    if (isRefreshing) return;
    if (getScrollTop() > 3) {
      isDragging = false;
      return;
    }
    const touch = e.touches[0];
    if (!touch) return;

    startX = touch.clientX;
    startY = touch.clientY;
    isDragging = true;
    isTouchGesture = true;
    isAngleLocked = false;
    hasTriggeredHaptic = false;
  }

  function handleTouchMove(e) {
    if (!isDragging || isRefreshing) return;
    const touch = e.touches[0];
    if (!touch) return;

    const diffX = touch.clientX - startX;
    const diffY = touch.clientY - startY;

    // Check angle during initial movement: if horizontal swipe, abort pull-to-refresh
    if (!isAngleLocked && (Math.abs(diffX) > 6 || Math.abs(diffY) > 6)) {
      isAngleLocked = true;
      if (Math.abs(diffX) > Math.abs(diffY)) {
        isDragging = false;
        pullDistance = 0;
        updateIndicator(0);
        return;
      }
    }

    const currentScroll = getScrollTop();

    // If user scrolled down into page, cancel pull
    if (currentScroll > 3) {
      isDragging = false;
      pullDistance = 0;
      updateIndicator(0);
      return;
    }

    if (diffY > 0 && currentScroll <= 1) {
      if (e.cancelable && diffY > 8) {
        e.preventDefault();
      }
      // Damped rubber-band physics: maxPull * (1 - exp(-diffY / dampingFactor))
      const damping = 160;
      const damped = maxPull * (1 - Math.exp(-diffY / damping));
      pullDistance = Math.min(damped, maxPull);
      updateIndicator(pullDistance, true);
    } else {
      pullDistance = 0;
      updateIndicator(0, true);
    }
  }

  async function handleTouchEnd() {
    if (!isDragging || isRefreshing) {
      isDragging = false;
      return;
    }
    isDragging = false;

    if (pullDistance >= pullThreshold) {
      isRefreshing = true;
      triggerHaptic(15);
      updateIndicator(pullThreshold, false);

      try {
        await onRefresh();
        indicator.className = 'pull-to-refresh-indicator is-success';
        if (titleEl) titleEl.textContent = 'Updated';
        if (subEl) subEl.textContent = 'ALL SYSTEMS SYNCED';
        indicator.style.opacity = '1';
        indicator.style.transform = 'translateX(-50%) translateY(24px)';
        await new Promise((r) => setTimeout(r, 450));
      } catch (err) {
        console.error('Pull to refresh error:', err);
        indicator.className = 'pull-to-refresh-indicator';
        if (titleEl) titleEl.textContent = 'Sync Failed';
        if (subEl) subEl.textContent = 'TRY AGAIN';
        await new Promise((r) => setTimeout(r, 600));
      } finally {
        isRefreshing = false;
        pullDistance = 0;
        hasTriggeredHaptic = false;
        updateIndicator(0, false);
      }
    } else {
      pullDistance = 0;
      hasTriggeredHaptic = false;
      updateIndicator(0, false);
    }
  }

  function handleTouchCancel() {
    if (isRefreshing) return;
    isDragging = false;
    pullDistance = 0;
    hasTriggeredHaptic = false;
    updateIndicator(0, false);
  }

  // Desktop Mouse Drag Support (Only from top of page, avoiding interactive elements)
  function handleMouseDown(e) {
    if (isRefreshing || e.button !== 0) return;
    if (getScrollTop() > 3) return;

    // Do not initiate on links, buttons, inputs, navbar, or widgets
    const target = e.target;
    if (target && target.closest && target.closest('a, button, input, textarea, select, [role="button"], .navbar-root, .chat-widget, #chat-widget-toggle')) {
      return;
    }

    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
    isTouchGesture = false;
    isAngleLocked = false;
    hasTriggeredHaptic = false;
  }

  function handleMouseMove(e) {
    if (!isDragging || isRefreshing || isTouchGesture) return;

    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;

    if (!isAngleLocked && (Math.abs(diffX) > 6 || Math.abs(diffY) > 6)) {
      isAngleLocked = true;
      if (Math.abs(diffX) > Math.abs(diffY)) {
        isDragging = false;
        pullDistance = 0;
        updateIndicator(0);
        return;
      }
    }

    const currentScroll = getScrollTop();
    if (currentScroll > 3) {
      isDragging = false;
      pullDistance = 0;
      updateIndicator(0);
      return;
    }

    if (diffY > 0 && currentScroll <= 1) {
      const damping = 160;
      const damped = maxPull * (1 - Math.exp(-diffY / damping));
      pullDistance = Math.min(damped, maxPull);
      updateIndicator(pullDistance, true);
    } else {
      pullDistance = 0;
      updateIndicator(0, true);
    }
  }

  function handleMouseUp() {
    if (isTouchGesture) return;
    handleTouchEnd();
  }

  // Bind event listeners with proper passive / cancelable configuration
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);
  window.addEventListener('touchcancel', handleTouchCancel);

  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('mouseleave', handleTouchCancel);
  window.addEventListener('blur', handleTouchCancel);
}
