// ==========================================================================
// Experience Page View — Renlenon-Style Minimal Vertical Timeline
// ==========================================================================

import { experienceData } from '../data.js';

export function renderExperiencePage() {
  const sortedExperience = [...experienceData].sort((a, b) => (a.order || 0) - (b.order || 0));

  const nodesHtml = sortedExperience
    .map((exp, idx) => {
      const isLast = idx === sortedExperience.length - 1;
      const isUpdated = exp.status && exp.status.includes('Active');

      const bulletsHtml = (exp.description || exp.bulletPoints || [])
        .map((b) => `<li>${b}</li>`)
        .join('');

      const tagsHtml = (exp.tech || [])
        .map((t) => `<span class="pill-badge" style="font-size: 0.68rem; padding: 0.15rem 0.45rem;">${t}</span>`)
        .join('');

      return `
        <div class="ren-timeline-node ${isLast ? 'last-node' : ''} ${isUpdated ? 'active-updated-node' : ''}">
          <div class="ren-timeline-spine">
            <span class="ren-timeline-dot ${isUpdated ? 'active-pulse-dot' : ''}" aria-hidden="true"></span>
            ${!isLast ? '<span class="ren-timeline-line" aria-hidden="true"></span>' : ''}
          </div>

          <div class="ren-timeline-content">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.25rem;">
              <span class="ren-timeline-date">${exp.dates || exp.period}</span>
              ${exp.status ? `<span class="ren-status-badge" style="font-size: 0.62rem; padding: 0.1rem 0.45rem;">${exp.status}</span>` : ''}
            </div>
            
            <h2 class="ren-timeline-title">${exp.title || exp.role}</h2>
            <p class="ren-timeline-company">${exp.company}</p>
            <p class="ren-timeline-location">${exp.location}</p>

            <ul class="ren-timeline-bullets">
              ${bulletsHtml}
            </ul>

            ${tagsHtml ? `<div class="ren-timeline-tags">${tagsHtml}</div>` : ''}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <main class="site-container main-content">
      <div class="ren-page-header">
        <a href="#/" class="ren-back-link">
          <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span>Back to Home</span>
        </a>

        <h1 class="ren-page-title">Experience</h1>
        <p class="ren-page-subtitle">Where I've worked and what I did there.</p>
      </div>

      <div class="ren-timeline">
        ${nodesHtml}
      </div>
    </main>
  `;
}
