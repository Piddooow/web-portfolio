// ==========================================================================
// Certifications Component — Credentials & Image Lightbox Modal
// ==========================================================================

import { certificationsData } from '../data.js';

export function renderCertifications(limit = 2) {
  const displayCerts = certificationsData.slice(0, limit);

  const itemsHtml = displayCerts
    .map(
      (c) => `
      <div class="experience-item" style="padding-bottom: 0.5rem;">
        <div class="exp-date">${c.dates}</div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <h3 class="exp-title">${c.title}</h3>
          <p class="exp-company">${c.issuer}</p>
          ${
            c.credentialId
              ? `<span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">Credential ID: ${c.credentialId}</span>`
              : ''
          }
          
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.5rem;">
            <button type="button" class="cert-thumb-btn" data-img="${c.image}" style="width: 4.5rem; height: 3rem; border-radius: 0.375rem; overflow: hidden; border: 1px solid var(--border-subtle); cursor: pointer;" title="Click to view certificate">
              <img src="${c.image}" alt="${c.title}" style="width: 100%; height: 100%; object-fit: cover;" />
            </button>

            <a href="${c.credentialUrl}" target="_blank" rel="noopener noreferrer" class="pill-badge" style="font-size: 0.7rem; gap: 0.3rem;">
              <span>Verify</span>
              <svg style="width: 0.7rem; height: 0.7rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    <section class="certifications-section" id="certifications">
      <div class="section-header">
        <h2 class="section-title">Certifications</h2>
        <a href="#/certifications" class="section-link">
          <span>View All</span>
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="experience-list">
        ${itemsHtml}
      </div>

      <!-- Cert Modal Container Container -->
      <div id="cert-modal-root"></div>
    </section>
  `;
}

export function initCertModalEvents() {
  const thumbBtns = document.querySelectorAll('.cert-thumb-btn');
  thumbBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const img = btn.getAttribute('data-img');
      if (img) openCertModal(img);
    });
  });
}

export function openCertModal(imgSrc) {
  const root = document.getElementById('cert-modal-root') || document.body;
  const modal = document.createElement('div');
  modal.className = 'cert-modal-backdrop';
  modal.id = 'active-cert-modal';

  modal.innerHTML = `
    <div class="cert-modal-dialog" onclick="event.stopPropagation()">
      <button type="button" class="cert-modal-close" id="close-modal-btn" aria-label="Close modal">
        <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <img src="${imgSrc}" alt="Certification credential view" style="width: 100%; height: auto; max-height: 75vh; object-fit: contain;" />
    </div>
  `;

  modal.addEventListener('click', () => modal.remove());
  const closeBtn = modal.querySelector('#close-modal-btn');
  if (closeBtn) closeBtn.addEventListener('click', () => modal.remove());

  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escHandler);
    }
  });

  root.appendChild(modal);
}
