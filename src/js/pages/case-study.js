// ==========================================================================
// Case Study Page View — In-Depth Architectural & Product Deep-Dive
// ==========================================================================

import { caseStudies } from '../data.js';

export function renderCaseStudyPage(slug = 'keepr') {
  const data = caseStudies[slug] || caseStudies.keepr;

  const stackHtml = data.stack
    .map((s) => `<span class="pill-badge" style="font-size: 0.75rem;">${s}</span>`)
    .join('');

  const featuresHtml = data.features
    .map(
      (f) => `
      <div class="card-spotlight" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: var(--text-primary);"></div>
          <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0;">${f.title}</h4>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0; line-height: 1.55;">${f.text}</p>
      </div>
    `
    )
    .join('');

  return `
    <main class="site-container main-content">
      <div class="ren-page-header">
        <a href="#/projects" class="ren-back-link">
          <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span>Back to Projects</span>
        </a>

        <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.85rem;">
          <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.2em;">Case Study</span>
          <h1 class="ren-page-title" style="margin-top: 0;">${data.title}</h1>
        </div>
        <p class="ren-page-subtitle">${data.subtitle}</p>
      </div>

      <!-- Meta Overview Bar -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1.25rem; padding: 1.25rem; border-radius: 0.75rem; border: 1px dashed var(--border-dashed); background-color: var(--bg-surface-card);">
        <div>
          <span class="eyebrow-mono" style="font-size: 0.65rem;">Role</span>
          <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin-top: 0.2rem;">${data.role}</p>
        </div>
        <div>
          <span class="eyebrow-mono" style="font-size: 0.65rem;">Timeline</span>
          <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin-top: 0.2rem;">${data.timeline}</p>
        </div>
        <div style="grid-column: span 2;">
          <span class="eyebrow-mono" style="font-size: 0.65rem;">Core Stack</span>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.25rem;">
            ${stackHtml}
          </div>
        </div>
      </div>

      <!-- Project Overview -->
      <section style="display: flex; flex-direction: column; gap: 1.75rem;">
        <div>
          <h2 style="font-size: 1.35rem; font-weight: 400; color: var(--text-primary); margin-bottom: 0.75rem;">Overview</h2>
          <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
            ${data.overview}
          </p>
        </div>

        <!-- Challenge & Solution Grid -->
        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;" class="sm:grid-cols-2">
          <div style="padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--border-subtle); background-color: var(--bg-surface);">
            <span class="eyebrow-mono" style="color: #ef4444;">The Challenge</span>
            <h3 style="font-size: 1.1rem; font-weight: 500; color: var(--text-primary); margin-top: 0.35rem; margin-bottom: 0.75rem;">Security vs. Friction</h3>
            <p style="font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary);">${data.challenge}</p>
          </div>

          <div style="padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--border-subtle); background-color: var(--bg-surface);">
            <span class="eyebrow-mono" style="color: #10b981;">The Solution</span>
            <h3 style="font-size: 1.1rem; font-weight: 500; color: var(--text-primary); margin-top: 0.35rem; margin-bottom: 0.75rem;">Local-First Native Speed</h3>
            <p style="font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary);">${data.solution}</p>
          </div>
        </div>

        <!-- Key Features & Engineering Highlights -->
        <div style="margin-top: 1.5rem;">
          <h2 style="font-size: 1.35rem; font-weight: 400; color: var(--text-primary); margin-bottom: 1.25rem;">Key Architecture & Features</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
            ${featuresHtml}
          </div>
        </div>

        <!-- Project CTAs -->
        <div style="display: flex; gap: 1rem; padding-top: 2rem; border-top: 1px dashed var(--border-dashed);">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <i class="fa-brands fa-github"></i>
            <span>View Source Code</span>
          </a>
          <a href="#/projects" class="btn-secondary">
            <span>Explore Other Projects</span>
          </a>
        </div>
      </section>
    </main>
  `;
}
