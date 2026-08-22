// ==========================================================================
// Experience Component — Professional Experience & Leadership (from CV)
// ==========================================================================

import { experienceData, profileData } from '../data.js';

export function renderExperience() {
  const expItemsHtml = experienceData
    .map(
      (exp) => `
      <div class="experience-item" style="padding-bottom: 1.5rem; border-bottom: 1px dashed var(--border-dashed);">
        <div class="exp-date">${exp.period}</div>
        <div>
          <h3 class="exp-title">${exp.role}</h3>
          <p class="exp-company">${exp.company} • ${exp.location}</p>
          <ul class="exp-desc-list" style="margin-top: 0.6rem;">
            ${exp.bulletPoints.map((b) => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="experience-section" id="experience">
      <div class="section-header">
        <div>
          <h2 class="section-title">Professional Experience</h2>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Operational leadership, vendor negotiation, and team execution.
          </p>
        </div>
        <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="section-link" style="gap: 0.4rem;">
          <span>View Resume</span>
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
      </div>

      <div class="experience-list">
        ${expItemsHtml}
      </div>
    </section>
  `;
}
