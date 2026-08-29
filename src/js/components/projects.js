// ==========================================================================
// Projects Component — React Bits Pro Modal Cards Template (@reactbits-starter/modal-cards-tw)
// Expandable interactive cards with spotlight physics & full-screen modal triggers
// ==========================================================================

import { projectsData } from '../data.js';

export function renderProjects(limit = 6) {
  const sortedProjects = [...projectsData].sort((a, b) => (a.order || 0) - (b.order || 0));
  const displayProjects = sortedProjects.slice(0, limit);

  const cardsHtml = displayProjects
    .map((p) => {
      const isComingSoon = p.isComingSoon === true;

      const tagsHtml = (p.techTags || [])
        .map((t) => `<span class="tag-chip" style="font-size: 0.68rem; padding: 0.15rem 0.45rem;">${t}</span>`)
        .join('');

      const liveBtnHtml = p.liveUrl
        ? `
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-live" style="display: inline-flex; align-items: center; gap: 0.3rem; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-primary); text-decoration: underline; text-underline-offset: 3px;" onclick="event.stopPropagation();">
            <span>Visit Live</span>
            <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        `
        : '';

      return `
        <article class="card-spotlight project-card modal-card-item ${isComingSoon ? 'coming-soon-card' : ''}" data-slug="${p.slug}" data-modal-slug="${p.slug}" style="${isComingSoon ? 'border: 1px dashed var(--border-dashed);' : ''}">
          <span class="edge-light"></span>
          <div class="project-card-img-wrap">
            <img src="${p.image}" alt="${p.title}" class="project-card-img" />
            <div class="modal-card-expand-badge" aria-hidden="true" title="Expand card details">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>

          <div class="project-card-body">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
                <span class="eyebrow-mono" style="font-size: 0.65rem;">${p.category}</span>
                <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${p.year}</span>
              </div>
              <h3 class="project-card-title">${p.title}</h3>
              <span style="display: block; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.5rem;">${p.role}</span>
              <p class="project-card-desc">${p.summary}</p>
            </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); font-style: italic; margin-bottom: 0.65rem;">
                ${p.tech}
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
                ${tagsHtml}
              </div>

              <div class="project-card-footer">
                <button type="button" class="btn-modal-expand" data-modal-slug="${p.slug}" aria-label="View ${p.title} details">
                  <span>View Details</span>
                  <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                ${liveBtnHtml}
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <section class="projects-section" id="projects">
      <div class="section-header">
        <div>
          <h2 class="section-title">Verified Projects & Systems</h2>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Real-world web engineering, system architecture, UX prototypes, and upcoming projects.
          </p>
        </div>
      </div>

      <div class="projects-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}

export function initSpotlightPhysics() {
  const elements = document.querySelectorAll(
    '.card-spotlight, .border-glow-card, .featured-card, .resume-item, .edu-item, .philosophy-card, .react-bits-stack-wrapper, .contact-item, .tech-grid-card, .github-calendar-box, .btn-primary, .btn-secondary, .pill-badge, .deck-nav-btn'
  );

  elements.forEach((el) => {
    let ticking = false;
    let lastEvent = null;

    function updatePhysics() {
      if (!lastEvent) return;
      const rect = el.getBoundingClientRect();
      const x = lastEvent.clientX - rect.left;
      const y = lastEvent.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = x - cx;
      const dy = y - cy;

      let kx = Infinity;
      let ky = Infinity;
      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);
      const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);

      let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      if (degrees < 0) degrees += 360;

      el.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      el.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
      el.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(2)}`);
      el.style.setProperty('--cursor-angle', `${degrees.toFixed(2)}deg`);
      ticking = false;
    }

    el.addEventListener('pointermove', (e) => {
      lastEvent = e;
      if (!ticking) {
        window.requestAnimationFrame(updatePhysics);
        ticking = true;
      }
    }, { passive: true });

    el.addEventListener('pointerenter', (e) => {
      lastEvent = e;
      updatePhysics();
    }, { passive: true });

    el.addEventListener('pointerleave', () => {
      lastEvent = null;
      el.style.setProperty('--edge-proximity', '0');
    }, { passive: true });
  });
}
