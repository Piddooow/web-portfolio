// ==========================================================================
// Modal Cards Component — React Bits Pro (@reactbits-starter/modal-cards-tw)
// Sticky Top-Right Close Button, Centered Readable Sizing & ESC Trap
// (Backdrop click disabled as per user specification)
// ==========================================================================

import { projectsData } from '../data.js';

let isModalOpen = false;
let activeSlug = null;
let savedScrollPosition = 0;

export function initModalCards() {
  // Ensure the modal root exists in the DOM
  let modalRoot = document.getElementById('modal-card-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-card-root';
    modalRoot.className = 'modal-card-root';
    modalRoot.setAttribute('role', 'dialog');
    modalRoot.setAttribute('aria-modal', 'true');
    modalRoot.setAttribute('aria-hidden', 'true');
    modalRoot.innerHTML = `
      <div class="modal-card-backdrop" id="modal-card-backdrop"></div>
      <div class="modal-card-container" id="modal-card-container">
        <div class="modal-card-dialog" id="modal-card-dialog">
          <!-- Dynamic Modal Content Injected Here -->
        </div>
      </div>
    `;
    document.body.appendChild(modalRoot);

    // Prevent touchmove/wheel leakage when touching backdrop or outside dialog
    modalRoot.addEventListener(
      'touchmove',
      (e) => {
        if (!e.target.closest('#modal-card-dialog')) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    modalRoot.addEventListener(
      'wheel',
      (e) => {
        if (!e.target.closest('#modal-card-dialog')) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  }

  // NOTE: User cannot close by clicking outside/backdrop (backdrop click disabled)

  // Global click delegation for modal card triggers
  document.addEventListener('click', (e) => {
    // If click originated from inside live external link or close button, handle separately
    if (e.target.closest('.link-live') || e.target.closest('#modal-card-close') || e.target.closest('.ren-live-link') || e.target.closest('.modal-card-close-btn')) {
      return;
    }

    const trigger = e.target.closest('[data-modal-slug], .btn-modal-expand, .ren-btn-details');
    if (trigger) {
      e.preventDefault();
      const slug = trigger.getAttribute('data-modal-slug') || trigger.getAttribute('data-slug');
      if (slug) {
        openProjectModal(slug);
      }
    }
  });

  // Keyboard shortcut listener (ESC to close)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) {
      closeProjectModal();
    }
  });
}

export function openProjectModal(slug) {
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];
  if (!project) return;

  const modalRoot = document.getElementById('modal-card-root');
  const dialog = document.getElementById('modal-card-dialog');
  if (!modalRoot || !dialog) return;

  // Preserve user's current scroll journey position before opening modal
  savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;

  activeSlug = slug;
  isModalOpen = true;

  const tagsHtml = (project.techTags || [])
    .map((t) => `<span class="tag-chip" style="font-size: 0.72rem; padding: 0.2rem 0.55rem;">${t}</span>`)
    .join('');

  const featuresHtml = (project.features || [])
    .map(
      (f) => `
      <div class="modal-card-feature-item">
        <div class="modal-card-feature-header">
          <span class="modal-card-feature-dot"></span>
          <h5 class="modal-card-feature-title">${f.title}</h5>
        </div>
        <p class="modal-card-feature-text">${f.text}</p>
      </div>
    `
    )
    .join('');

  const liveActionBtn = project.liveUrl
    ? `
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.82rem; padding: 0.55rem 1.15rem; gap: 0.45rem;">
        <span>Visit Live Website</span>
        <svg style="width: 0.85rem; height: 0.85rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
      </a>
    `
    : '';

  dialog.innerHTML = `
    <!-- Sticky Close Button Bar (Follows user during scroll) -->
    <div class="modal-card-sticky-bar">
      <button type="button" class="modal-card-close-btn" id="modal-card-close" aria-label="Close modal (Escape)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Header Media Banner -->
    <div class="modal-card-hero">
      <img src="${project.image}" alt="${project.title}" class="modal-card-hero-img" />
      <div class="modal-card-hero-scrim"></div>

      <!-- Category & Status Badge -->
      <div class="modal-card-hero-badge" style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
        <span class="eyebrow-mono" style="color: #ffffff; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">${project.category}</span>
        ${project.status ? `<span class="ren-status-badge ${project.isComingSoon ? 'coming-soon-badge' : ''}" style="font-size: 0.65rem; padding: 0.12rem 0.5rem;">${project.status}</span>` : ''}
      </div>
    </div>

    <!-- Body Content -->
    <div class="modal-card-body">
      <!-- Title & Role Header -->
      <div class="modal-card-header-group">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.25rem;">
          <span class="eyebrow-mono" style="font-size: 0.7rem;">${project.role}</span>
          <span class="modal-card-year-pill">${project.year}</span>
        </div>
        <h2 class="modal-card-title">${project.title}</h2>
        <p class="modal-card-summary">${project.summary}</p>
      </div>

      <!-- Deep Architecture Grid (Challenge & Solution) -->
      <div class="modal-card-breakdown-grid">
        <div class="modal-card-breakdown-box challenge-box">
          <div class="breakdown-box-header">
            <svg class="breakdown-box-icon" style="color: #f43f5e;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span class="eyebrow-mono" style="color: #f43f5e; font-size: 0.68rem;">The Challenge</span>
          </div>
          <p class="breakdown-box-text">${project.challenge || project.summary}</p>
        </div>

        <div class="modal-card-breakdown-box solution-box">
          <div class="breakdown-box-header">
            <svg class="breakdown-box-icon" style="color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="eyebrow-mono" style="color: #10b981; font-size: 0.68rem;">The Solution</span>
          </div>
          <p class="breakdown-box-text">${project.solution || project.overview || project.summary}</p>
        </div>
      </div>

      <!-- Key Engineering & System Features -->
      ${
        featuresHtml
          ? `
        <div class="modal-card-features-section">
          <h4 class="modal-card-section-heading">Key Architecture & Features</h4>
          <div class="modal-card-features-grid">
            ${featuresHtml}
          </div>
        </div>
      `
          : ''
      }

      <!-- Tech Stack & Tools -->
      <div class="modal-card-stack-section">
        <h4 class="modal-card-section-heading">Technologies & Methodologies</h4>
        <div class="modal-card-tags-wrap">
          ${tagsHtml}
        </div>
      </div>

      <!-- Action Footer (Clean with Live link if available, no redundant bottom close button) -->
      ${
        liveActionBtn
          ? `
        <div class="modal-card-footer-actions" style="justify-content: flex-start;">
          ${liveActionBtn}
        </div>
      `
          : ''
      }
    </div>
  `;

  // Attach sticky close button event
  const closeBtn = dialog.querySelector('#modal-card-close');
  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  // Lock background scroll and open modal without changing background scroll position
  document.documentElement.classList.add('modal-card-open');
  document.body.classList.add('modal-card-open');
  modalRoot.setAttribute('aria-hidden', 'false');
  modalRoot.classList.remove('is-closing');
  modalRoot.classList.add('is-open');

  // Smooth scroll dialog internal content to top
  dialog.scrollTop = 0;
}

export function closeProjectModal() {
  const modalRoot = document.getElementById('modal-card-root');
  if (!modalRoot || !isModalOpen) return;

  isModalOpen = false;
  activeSlug = null;

  modalRoot.classList.add('is-closing');
  modalRoot.classList.remove('is-open');

  setTimeout(() => {
    modalRoot.classList.remove('is-closing');
    modalRoot.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('modal-card-open');
    document.body.classList.remove('modal-card-open');

    // Restore user's exact scroll position in their journey
    window.scrollTo({
      top: savedScrollPosition,
      behavior: 'instant'
    });
  }, 220);
}
