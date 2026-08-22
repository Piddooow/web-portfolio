// ==========================================================================
// Capabilities Component — Core Competencies (from CV)
// ==========================================================================

import { competenciesData } from '../data.js';

export function renderCapabilities() {
  const cardsHtml = competenciesData
    .map((cat) => {
      const itemsListHtml = cat.items
        .map(
          (item) => `
          <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.86rem; color: var(--text-primary); padding: 0.25rem 0;">
            <span style="width: 5px; height: 5px; border-radius: 9999px; background-color: var(--text-muted); flex-shrink: 0;"></span>
            <span>${item}</span>
          </div>
        `
        )
        .join('');

      return `
        <div class="card-spotlight" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <span class="eyebrow-mono" style="font-size: 0.65rem;">${cat.subtitle}</span>
            <h3 style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-top: 0.25rem;">${cat.category}</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.25rem; border-top: 1px dashed var(--border-dashed); padding-top: 0.75rem;">
            ${itemsListHtml}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="capabilities-section" id="capabilities">
      <div class="section-header">
        <div>
          <h2 class="section-title">Core Competencies</h2>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Analytical frameworks, system modeling tools, and execution capabilities.
          </p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
        ${cardsHtml}
      </div>
    </section>
  `;
}
