// ==========================================================================
// Pull to Refresh — Minimalist Spider Icon Engine
// Features: Elastic Rubber-Band Physics, Glassmorphic Capsule, Iconic Spider Emblem,
// Smooth 360° Neon Spin Animation (1-2s Duration) & Seamless Haptics
// ==========================================================================

export function initPullToRefresh(options = {}) {
  const pullThreshold = options.pullThreshold || 70;
  const maxPull = options.maxPull || 120;
  const spiderSrc = options.spiderSrc || 'src/assets/images/spider-icon.png';
  const onRefresh = options.onRefresh || (async () => {
    window.dispatchEvent(new CustomEvent('app:refresh'));
    await new Promise((r) => setTimeout(r, 1200));
  });

  let indicator = document.getElementById('pull-to-refresh-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'pull-to-refresh-indicator';
    indicator.className = 'pull-to-refresh-indicator';
    indicator.innerHTML = `
      <div class="ptr-mascot-box">
        <svg class="ptr-ring-svg" viewBox="0 0 32 32">
          <defs>
            <linearGradient id="ptr-gradient-vanilla" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#818cf8" />
              <stop offset="50%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
          </defs>
          <circle class="ptr-ring-bg" cx="16" cy="16" r="14" />
          <circle id="ptr-ring-bar" class="ptr-ring-progress" cx="16" cy="16" r="14" style="stroke: url(#ptr-gradient-vanilla);" />
        </svg>
        <img id="ptr-spider-img" src="${spiderSrc}" alt="Spider" class="ptr-spider-img" />
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

  let startY = 0;
  let isDragging = false;
  let isRefreshing = false;
  let pullDistance = 0;

  function updateIndicator(pull) {
    if (!indicator) return;
    const progress = Math.min(pull / pullThreshold, 1.0);
    const ringOffset = 88 - progress * 88;

    if (ringBar) ringBar.style.strokeDashoffset = `${ringOffset}`;

    const isReady = pull >= pullThreshold;

    if (isRefreshing) {
      indicator.className = 'pull-to-refresh-indicator is-refreshing';
      if (titleEl) titleEl.textContent = 'Refreshing...';
      if (subEl) subEl.textContent = 'SYNCING DATA';
    } else if (isReady) {
      indicator.className = 'pull-to-refresh-indicator is-ready';
      if (titleEl) titleEl.textContent = 'Release to refresh';
      if (subEl) subEl.textContent = 'RELEASE NOW';
    } else if (pull > 25) {
      indicator.className = 'pull-to-refresh-indicator';
      if (titleEl) titleEl.textContent = 'Pull to refresh';
      if (subEl) subEl.textContent = `${(progress * 100).toFixed(0)}%`;
    } else {
      indicator.className = 'pull-to-refresh-indicator';
      if (titleEl) titleEl.textContent = 'Pull to refresh';
      if (subEl) subEl.textContent = 'PORTFOLIO SYNC';
    }

    if (pull > 4 || isRefreshing) {
      indicator.style.opacity = '1';
      indicator.style.transform = `translateX(-50%) translateY(${isRefreshing ? 60 : pull + 14}px)`;
    } else {
      indicator.style.opacity = '0';
      indicator.style.transform = 'translateX(-50%) translateY(-110%)';
    }
  }

  function handleStart(e) {
    if (window.scrollY > 4 || isRefreshing) return;
    startY = e.touches ? e.touches[0].clientY : e.clientY;
    isDragging = true;
  }

  function handleMove(e) {
    if (!isDragging || isRefreshing) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const diff = currentY - startY;

    if (diff > 0 && window.scrollY <= 2) {
      if (e.cancelable && diff > 10) e.preventDefault();
      // Elastic rubber band formula
      const damped = Math.pow(diff, 0.82) * 0.85;
      pullDistance = Math.min(damped, maxPull);
      updateIndicator(pullDistance);
    } else {
      pullDistance = 0;
      updateIndicator(0);
    }
  }

  async function handleEnd() {
    if (!isDragging || isRefreshing) return;
    isDragging = false;

    if (pullDistance >= pullThreshold) {
      isRefreshing = true;
      pullDistance = 55;
      updateIndicator(pullDistance);

      try {
        await onRefresh();
        indicator.className = 'pull-to-refresh-indicator is-success';
        if (titleEl) titleEl.textContent = 'Updated';
        if (subEl) subEl.textContent = 'ALL UP TO DATE';
        await new Promise((r) => setTimeout(r, 450));
      } catch (err) {
        console.error('Refresh error:', err);
      } finally {
        isRefreshing = false;
        pullDistance = 0;
        updateIndicator(0);
      }
    } else {
      pullDistance = 0;
      updateIndicator(0);
    }
  }

  window.addEventListener('touchstart', handleStart, { passive: true });
  window.addEventListener('touchmove', handleMove, { passive: false });
  window.addEventListener('touchend', handleEnd);

  window.addEventListener('mousedown', handleStart, { passive: true });
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', handleEnd);
}
