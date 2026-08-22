// ==========================================================================
// Events Page View — Speaking Engagements & Visual Archive
// ==========================================================================

import { eventsGalleryData } from '../data.js';
import { initSpotlightPhysics } from '../components/projects.js';

export function renderEventsPage() {
  const eventsHtml = eventsGalleryData
    .map(
      (evt) => `
      <article class="card-spotlight project-card">
        <div class="project-card-img-wrap" style="height: 12rem;">
          <img src="${evt.img}" alt="${evt.title}" class="project-card-img" />
        </div>
        <div class="project-card-body">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
              <span class="eyebrow-mono" style="font-size: 0.65rem;">${evt.location}</span>
              <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${evt.date}</span>
            </div>
            <h3 class="project-card-title">${evt.title}</h3>
            <p class="project-card-desc">${evt.desc}</p>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  return `
    <main class="site-container main-content" style="padding-top: 2rem;">
      <div>
        <a href="#/" class="section-link" style="margin-bottom: 1.5rem; display: inline-flex;">
          <svg style="width: 0.9rem; height: 0.9rem; transform: rotate(180deg);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <span>Back to Home</span>
        </a>

        <h1 class="section-title" style="font-size: 2.25rem; margin-bottom: 0.5rem;">Events & Speaking</h1>
        <p style="max-width: 32rem; color: var(--text-secondary); margin-bottom: 2rem;">
          Keynotes, technical workshops, panel discussions, and design community gatherings.
        </p>
      </div>

      <div class="projects-grid">
        ${eventsHtml}
      </div>
    </main>
  `;
}

export function initEventsPageEvents() {
  initSpotlightPhysics();
}
