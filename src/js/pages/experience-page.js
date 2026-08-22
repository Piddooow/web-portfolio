// ==========================================================================
// Experience Page View — Detailed Career Timeline
// ==========================================================================

import { experienceData } from '../data.js';

export function renderExperiencePage() {
  const itemsHtml = experienceData
    .map((exp) => {
      const bulletsHtml = exp.description
        .map((b) => `<li>${b}</li>`)
        .join('');

      const tagsHtml = exp.tech
        ? exp.tech.map((t) => `<span class="pill-badge" style="font-size: 0.7rem;">${t}</span>`).join('')
        : '';

      return `
        <div class="experience-item" style="padding-bottom: 1.5rem; border-bottom: 1px dashed var(--border-dashed);">
          <div class="exp-date">${exp.dates}</div>
          <div>
            <h3 class="exp-title" style="font-size: 1.125rem;">${exp.title}</h3>
            <p class="exp-company" style="font-size: 0.9rem; margin-bottom: 0.75rem;">${exp.company} • ${exp.location}</p>
            <ul class="exp-desc-list">
              ${bulletsHtml}
            </ul>
            ${
              tagsHtml
                ? `<div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 1rem;">${tagsHtml}</div>`
                : ''
            }
          </div>
        </div>
      `;
    })
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

        <h1 class="section-title" style="font-size: 2.25rem; margin-bottom: 0.5rem;">Experience</h1>
        <p style="max-width: 32rem; color: var(--text-secondary); margin-bottom: 2rem;">
          Career history, organizational leadership, and technical accomplishments across startups and client engagements.
        </p>
      </div>

      <div class="experience-list">
        ${itemsHtml}
      </div>
    </main>
  `;
}
