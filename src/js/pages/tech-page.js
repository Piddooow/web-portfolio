// ==========================================================================
// Tech Stack Page View — Categorized Tooling & Architecture Breakdown
// ==========================================================================

import { categorizedTechStack } from '../data.js';

export function renderTechPage() {
  const sectionsHtml = categorizedTechStack
    .map((cat) => {
      const itemsHtml = cat.items
        .map(
          (item) => `
          <div class="card-spotlight" style="padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 0.35rem;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0;">${item.name}</h4>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0; line-height: 1.45;">${item.desc}</p>
          </div>
        `
        )
        .join('');

      return `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h2 style="font-size: 1.25rem; font-weight: 400; color: var(--text-primary); border-bottom: 1px dashed var(--border-dashed); padding-bottom: 0.5rem;">
            ${cat.category}
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.875rem;">
            ${itemsHtml}
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

        <h1 class="section-title" style="font-size: 2.25rem; margin-bottom: 0.5rem;">Full Tech Stack</h1>
        <p style="max-width: 32rem; color: var(--text-secondary); margin-bottom: 2.5rem;">
          A categorized inventory of engineering languages, frontend libraries, backend runtimes, databases, and design workflows.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2.5rem;">
        ${sectionsHtml}
      </div>
    </main>
  `;
}
