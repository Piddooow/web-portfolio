// ==========================================================================
// Capabilities Component — Core Competencies (Tools & Technical / Business & Strategy)
// ==========================================================================

import { competenciesData } from '../data.js';

export function renderCapabilities() {
  const getIconForItem = (itemText) => {
    const lower = itemText.toLowerCase();
    if (lower.includes('sql') || lower.includes('database')) return 'fa-solid fa-database';
    if (lower.includes('figma') || lower.includes('ui/ux')) return 'fa-brands fa-figma';
    if (lower.includes('visual paradigm') || lower.includes('erd') || lower.includes('use cases')) return 'fa-solid fa-diagram-project';
    if (lower.includes('excel') || lower.includes('financial')) return 'fa-solid fa-file-excel';
    if (lower.includes('web development') || lower.includes('react') || lower.includes('html')) return 'fa-brands fa-react';
    if (lower.includes('ms office') || lower.includes('reporting')) return 'fa-solid fa-file-lines';
    if (lower.includes('business analysis') || lower.includes('swot')) return 'fa-solid fa-magnifying-glass-chart';
    if (lower.includes('go-to-market') || lower.includes('gtm')) return 'fa-solid fa-rocket';
    if (lower.includes('negotiation') || lower.includes('procurement')) return 'fa-solid fa-handshake';
    if (lower.includes('operations') || lower.includes('inventory')) return 'fa-solid fa-boxes-stacked';
    if (lower.includes('stakeholder')) return 'fa-solid fa-users';
    if (lower.includes('marketing') || lower.includes('growth')) return 'fa-solid fa-bullhorn';
    return 'fa-solid fa-check';
  };

  const cardsHtml = competenciesData
    .map((cat) => {
      const itemsListHtml = cat.items
        .map((item) => {
          const icon = getIconForItem(item);
          return `
            <div class="competency-item-row" style="display: flex; align-items: center; gap: 0.85rem; padding: 0.65rem 0.85rem; border-radius: 0.5rem; background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;">
              <div style="display: flex; align-items: center; gap: 0.75rem; min-width: 0;">
                <span class="competency-icon-box" style="width: 28px; height: 28px; border-radius: 0.35rem; display: inline-flex; align-items: center; justify-content: center; background-color: var(--bg-surface-card); border: 1px dashed var(--border-dashed); font-size: 0.82rem; color: var(--text-primary); flex-shrink: 0;">
                  <i class="${icon}"></i>
                </span>
                <span style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); white-space: normal; line-height: 1.4;">
                  ${item}
                </span>
              </div>
            </div>
          `;
        })
        .join('');

      return `
        <div class="card-spotlight border-glow-card" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.75rem; border-bottom: 1px dashed var(--border-dashed); padding-bottom: 1rem;">
            <div>
              <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.18em;">${cat.subtitle}</span>
              <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text-primary); margin-top: 0.25rem; letter-spacing: -0.02em;">${cat.category}</h3>
            </div>
            <span class="pill-badge" style="font-family: var(--font-mono); font-size: 0.65rem; padding: 0.2rem 0.55rem; border: 1px dashed var(--border-dashed);">
              ${cat.items.length} Skills
            </span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
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
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="width: 8px; height: 8px; border-radius: 9999px; background-color: var(--text-primary); display: inline-block;"></span>
            <span class="eyebrow-mono">Professional Competencies</span>
          </div>
          <h2 class="section-title">Core Engineering & Capabilities</h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem; max-width: 42rem; line-height: 1.6;">
            Analytical frameworks, systems modeling instruments, modern web architecture, and execution capabilities.
          </p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.35rem; margin-top: 1.5rem;">
        ${cardsHtml}
      </div>
    </section>
  `;
}
