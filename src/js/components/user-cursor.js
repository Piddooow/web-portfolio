// ==========================================================================
// UserCursor Physics Engine — React Bits Live Multiplayer User Cursor
// 100% Real-Time Zero-Lag Cursor Tracking (Replaces Default OS Cursor)
// Monochromatic Dark/Light Theme Adaptive
// ==========================================================================

export function initUserCursor(options = {}) {
  const { name = 'Jhon Doe' } = options;

  // Only enable on desktop pointer-fine devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let container = document.getElementById('user-cursor-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'user-cursor-container';
    container.className = 'user-cursor-container';
    container.setAttribute('aria-hidden', 'true');
    container.innerHTML = `
      <svg class="user-cursor-pointer" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V16.8L4.6 12.3L11.8 12.3L0 0Z" class="user-cursor-svg-path" />
      </svg>
      <div class="user-cursor-badge">
        <span class="user-cursor-name">${name}</span>
      </div>
    `;
    document.body.appendChild(container);
  }

  let isVisible = false;

  function onMouseMove(e) {
    // 100% instantaneous zero-lag positioning
    container.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

    if (!isVisible) {
      isVisible = true;
      container.classList.add('visible');
    }

    const target = e.target;
    if (target && target.closest('a, button, input, textarea, select, [role="button"], .btn-primary, .btn-secondary, .card-action-btn, .deck-nav-btn, .tag-chip, .logo-loop-link, .interactive, .competency-item-row, .card-spotlight, .cert-thumb-btn, .project-filter-btn, .theme-toggle-btn, .mobile-menu-btn, .chat-trigger-btn, .chat-category-btn, .suggestion-chip, .back-to-top-btn, .pill-badge')) {
      container.classList.add('is-pointer');
    } else {
      container.classList.remove('is-pointer');
    }
  }

  function onMouseEnter() {
    isVisible = true;
    container.classList.add('visible');
  }

  function onMouseLeave() {
    isVisible = false;
    container.classList.remove('visible');
  }

  function onMouseDown() {
    container.classList.add('is-clicking');
  }

  function onMouseUp() {
    container.classList.remove('is-clicking');
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseenter', onMouseEnter);
  document.addEventListener('mouseleave', onMouseLeave);
  window.addEventListener('mousedown', onMouseDown, { passive: true });
  window.addEventListener('mouseup', onMouseUp, { passive: true });
}
