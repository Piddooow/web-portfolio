// ==========================================================================
// Philosophy Component — Guiding Principle (Italic Visual Statement)
// ==========================================================================

import { profileData } from '../data.js';

export function renderPhilosophy() {
  return `
    <section class="philosophy-section" id="philosophy" style="padding: 1.75rem 2rem; border-radius: 0.75rem; border: 1px dashed var(--border-dashed); background-color: var(--bg-surface-card);">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.2em;">Guiding Principle</span>
        <blockquote style="font-size: 1.25rem; font-style: italic; font-weight: 700; opacity: 0.85; color: var(--text-primary); line-height: 1.45; letter-spacing: -0.02em; margin: 0;">
          “${profileData.mainQuote}”
        </blockquote>
        <p style="font-size: 0.875rem; color: var(--text-secondary); opacity: 0.78; line-height: 1.6; margin: 0;">
          ${profileData.quoteSupporting}
        </p>
      </div>
    </section>
  `;
}
