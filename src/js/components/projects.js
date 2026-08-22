// ==========================================================================
// Projects Component — Verified Projects + Minimal Coming Soon Card
// ==========================================================================

import { projectsData } from '../data.js';

export function renderProjects(limit = 6) {
  const displayProjects = projectsData.slice(0, limit);

  const cardsHtml = displayProjects
    .map((p) => {
      const isComingSoon = p.isComingSoon === true;

      const tagsHtml = p.techTags
        .map((t) => `<span class="tag-chip" style="font-size: 0.68rem; padding: 0.15rem 0.45rem;">${t}</span>`)
        .join('');

      const liveBtnHtml = p.liveUrl
        ? `
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-live" style="display: inline-flex; align-items: center; gap: 0.3rem; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-primary); margin-top: 0.5rem; text-decoration: underline; text-underline-offset: 3px;">
            <span>Visit Live Site</span>
            <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        `
        : '';

      return `
        <article class="card-spotlight project-card ${isComingSoon ? 'coming-soon-card' : ''}" data-slug="${p.slug}" style="${isComingSoon ? 'border: 1px dashed var(--border-dashed);' : ''}">
          <div class="project-card-img-wrap">
            <img src="${p.image}" alt="${p.title}" class="project-card-img" />
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

              <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                ${tagsHtml}
              </div>

              ${liveBtnHtml}
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
  const cards = document.querySelectorAll('.card-spotlight');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
