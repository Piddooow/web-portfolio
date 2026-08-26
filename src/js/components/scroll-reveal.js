// ==========================================================================
// Universal ScrollReveal System — Smooth, Elegant & Seamless Page Physics
// Reveals when scrolling down; elements above viewport stay firmly revealed;
// elements exiting below the viewport transition out smoothly on scroll up.
// ==========================================================================

export function initScrollRevealObserver() {
  const targetSelectors = [
    '.hero-section',
    '.philosophy-section',
    '.logo-loop-section',
    '.projects-section',
    '.capabilities-section',
    '.about-section',
    '.experience-section',
    '.other-side-section',
    '.github-activity-section',
    '.outside-ide-section',
    '.github-section',
    '.contact-section',
    '.project-card',
    '.capability-card',
    '.about-profile-card',
    '.experience-card',
    '.contact-item',
    '.github-card'
  ];

  const elements = document.querySelectorAll(targetSelectors.join(', '));
  if (!elements.length) return;

  // Stagger items within their parent containers
  const parents = new Set();
  elements.forEach((el) => {
    el.classList.add('reveal-on-scroll');
    if (el.parentElement) {
      parents.add(el.parentElement);
    }
  });

  parents.forEach((parent) => {
    const children = parent.querySelectorAll('.reveal-on-scroll');
    if (children.length > 1) {
      children.forEach((child, idx) => {
        child.style.setProperty('--reveal-delay', (idx * 0.06).toFixed(2));
      });
    }
  });

  function updateReveals() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();

      // Top elements past the viewport or elements within viewport stay/become revealed
      if (rect.top < windowHeight - 24) {
        el.classList.add('is-revealed');
      } else {
        // Elements below the viewport exit transition
        el.classList.remove('is-revealed');
      }
    });
  }

  let ticking = false;
  function onScrollOrResize() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateReveals();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize, { passive: true });

  // Initial check on load
  updateReveals();
}
