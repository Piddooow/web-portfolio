// ==========================================================================
// StaggeredText — React Bits Pro Text Animation Engine (@reactbits-starter/staggered-text-tw)
// Docs: https://pro.reactbits.dev/docs/components/staggered-text
// Features: Staggered Word & Character Cascades, Masked Sliding Baseline, Soft Blur
// ==========================================================================

export function initStaggeredText(options = {}) {
  const selector = options.selector || '[data-staggered-text]';
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    // Avoid double processing
    if (el.dataset.staggeredProcessed === 'true') return;
    el.dataset.staggeredProcessed = 'true';

    const rawText = el.getAttribute('data-staggered-text') || el.textContent.trim();
    const staggerBy = el.getAttribute('data-stagger-by') || options.staggerBy || 'words';
    const staggerDelay = parseFloat(el.getAttribute('data-stagger-delay')) || options.staggerDelay || 0.035;
    const duration = parseFloat(el.getAttribute('data-stagger-duration')) || options.duration || 0.7;
    const direction = el.getAttribute('data-stagger-direction') || options.direction || 'up';
    const initialDelay = parseFloat(el.getAttribute('data-stagger-initial-delay')) || options.initialDelay || 0.1;

    const tokens = staggerBy === 'letters' ? rawText.split('') : rawText.split(' ');

    el.classList.add('staggered-text-root', `dir-${direction}`);
    el.style.setProperty('--stagger-duration', `${duration}s`);
    el.setAttribute('aria-label', rawText);
    el.innerHTML = '';

    tokens.forEach((token, idx) => {
      const itemDelay = initialDelay + idx * staggerDelay;

      const maskSpan = document.createElement('span');
      maskSpan.className = 'staggered-text-mask';

      const itemSpan = document.createElement('span');
      itemSpan.className = 'staggered-text-item';
      itemSpan.style.setProperty('--stagger-delay', `${itemDelay.toFixed(3)}s`);
      itemSpan.textContent = token === ' ' ? '\u00A0' : token;

      maskSpan.appendChild(itemSpan);
      el.appendChild(maskSpan);

      if (staggerBy === 'words' && idx < tokens.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'staggered-text-space';
        spaceSpan.innerHTML = '&nbsp;';
        el.appendChild(spaceSpan);
      }
    });

    // Trigger reveal on next frame or when page is revealed
    requestAnimationFrame(() => {
      el.classList.add('is-visible');
    });
  });
}
