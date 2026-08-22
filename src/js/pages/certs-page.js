// ==========================================================================
// Certifications Page View — Full Credential Catalog & Modal Viewer
// ==========================================================================

import { certificationsData } from '../data.js';
import { initCertModalEvents } from '../components/certifications.js';

export function renderCertificationsPage() {
  const itemsHtml = certificationsData
    .map(
      (c) => `
      <div class="experience-item" style="padding-bottom: 1.5rem; border-bottom: 1px dashed var(--border-dashed);">
        <div class="exp-date">${c.dates}</div>
        <div style="display: flex; flex-direction: column; gap: 0.35rem;">
          <h3 class="exp-title" style="font-size: 1.125rem;">${c.title}</h3>
          <p class="exp-company">${c.issuer}</p>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">Credential ID: ${c.credentialId}</span>
          
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem;">
            <button type="button" class="cert-thumb-btn" data-img="${c.image}" style="width: 5.5rem; height: 3.5rem; border-radius: 0.375rem; overflow: hidden; border: 1px solid var(--border-subtle); cursor: pointer;" title="Click to view certificate">
              <img src="${c.image}" alt="${c.title}" style="width: 100%; height: 100%; object-fit: cover;" />
            </button>

            <a href="${c.credentialUrl}" target="_blank" rel="noopener noreferrer" class="pill-badge" style="font-size: 0.75rem; gap: 0.35rem;">
              <span>Verify Credential</span>
              <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
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

        <h1 class="section-title" style="font-size: 2.25rem; margin-bottom: 0.5rem;">Certifications</h1>
        <p style="max-width: 32rem; color: var(--text-secondary); margin-bottom: 2rem;">
          Verified technical specializations, system architecture credentials, and engineering accreditations.
        </p>
      </div>

      <div class="experience-list">
        ${itemsHtml}
      </div>

      <div id="cert-modal-root"></div>
    </main>
  `;
}

export function initCertificationsPageEvents() {
  initCertModalEvents();
}
