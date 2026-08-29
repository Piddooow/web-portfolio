// ==========================================================================
// Projects Page View — Renlenon-Style Selected Projects with Spotlight & Filters
// Features: Staggered Blur-Slide Entrance, Cancelable Smooth Category Transitions (Matching Events Page),
// Consistent Modal Card Baseline Alignment, and Responsive Pagination
// ==========================================================================

import { projectsData } from '../data.js';
import { initSpotlightPhysics } from '../components/projects.js';
import { initModalCards } from '../components/modal-cards.js';

let activeCategory = 'All';
let currentPage = 1;
const ITEMS_PER_PAGE = 4;
let activeTransitionId = 0;

const CATEGORIES = [
  'All',
  'Website Development & Digital Presence',
  'System Analysis & UI/UX Design',
  'Enterprise System & AI Integration',
  'Business Analytics & Systems Modeling'
];

/**
 * Filter projects based on the active category
 */
function getFilteredProjects() {
  const sorted = [...projectsData].sort((a, b) => (a.order || 0) - (b.order || 0));
  return activeCategory === 'All'
    ? sorted
    : sorted.filter((p) => p.category === activeCategory);
}

/**
 * Render individual project cards HTML with initial entry animation state
 */
function renderProjectCardsHtml(pageProjects, initialHidden = false) {
  if (!pageProjects || pageProjects.length === 0) {
    return `
      <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.85rem; border: 1px dashed var(--border-dashed); border-radius: 0.875rem; background-color: var(--bg-surface-card);">
        <i class="fa-solid fa-folder-open" style="font-size: 1.5rem; margin-bottom: 0.75rem; display: block; opacity: 0.6;"></i>
        <span>No projects found in this category.</span>
      </div>
    `;
  }

  return pageProjects
    .map((p) => {
      const isComingSoon = p.isComingSoon === true;

      // Tech icons with interactive smooth tooltips
      const techIconsHtml = (p.techIcons || [])
        .map((t) => `
          <span class="ren-tech-icon-item" data-tooltip="${t.name}" aria-label="${t.name}">
            <i class="${t.icon}" style="${t.color ? `color: ${t.color};` : ''}"></i>
            <span class="ren-tech-tooltip">${t.name}</span>
          </span>
        `)
        .join('');

      const liveBtnHtml = p.liveUrl
        ? `
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="ren-live-link" onclick="event.stopPropagation();">
            <span>Visit Live</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 0.75rem; height: 0.75rem;">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        `
        : '';

      const thumbHtml = isComingSoon
        ? `
          <div class="ren-coming-soon-thumb">
            <div class="ren-coming-soon-radar" aria-hidden="true"></div>
            <span class="ren-coming-soon-text">COMING SOON • 2026</span>
          </div>
        `
        : `
          <div class="ren-project-thumb-link">
            <img src="${p.image}" alt="${p.title}" class="ren-project-thumb" loading="lazy" />
          </div>
        `;

      const initialStyle = initialHidden
        ? 'style="opacity: 0; filter: blur(10px); transform: translateY(35px);"'
        : 'style="opacity: 0; filter: blur(10px); transform: translateY(35px);"';

      return `
        <article class="card-spotlight ren-project-card modal-card-item" data-slug="${p.slug}" data-modal-slug="${p.slug}" ${initialStyle}>
          ${thumbHtml}
          <div class="ren-project-info">
            <div class="ren-project-header-group">
              <div class="ren-project-header-row">
                <h3 class="ren-project-title">${p.title}</h3>
                ${p.status ? `<span class="ren-status-badge ${isComingSoon ? 'coming-soon-badge' : ''}">${p.status}</span>` : ''}
              </div>
              <div class="ren-project-meta-row">
                <span class="ren-project-role">${p.role}</span>
                ${p.year ? `<span class="ren-project-meta-sep">•</span><span class="ren-project-year">${p.year}</span>` : ''}
              </div>
            </div>

            <p class="ren-project-summary">${p.summary}</p>

            <div class="ren-project-bottom-meta">
              ${techIconsHtml ? `<div class="ren-project-tech-row">${techIconsHtml}</div>` : ''}
            </div>

            <div class="ren-project-footer-actions">
              <button type="button" class="ren-btn-details btn-modal-expand" data-modal-slug="${p.slug}" aria-label="View ${p.title} details">
                <span>View Details</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              ${liveBtnHtml}
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

/**
 * Render pagination controls HTML
 */
function renderPaginationHtml(totalPages, current) {
  if (totalPages <= 1) return '';

  const pageButtonsHtml = Array.from({ length: totalPages }, (_, i) => i + 1)
    .map((pageNum) => `
      <button type="button" class="ren-page-num ${pageNum === current ? 'active' : ''}" data-page="${pageNum}">
        ${pageNum}
      </button>
    `)
    .join('');

  return `
    <div class="ren-pagination">
      <button type="button" class="ren-pagination-btn prev-btn" id="ren-prev-page" ${current <= 1 ? 'disabled' : ''}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
        <span>Previous</span>
      </button>

      <div class="ren-page-numbers">
        ${pageButtonsHtml}
      </div>

      <button type="button" class="ren-pagination-btn next-btn" id="ren-next-page" ${current >= totalPages ? 'disabled' : ''}>
        <span>Next</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  `;
}

/**
 * Render complete Projects Page HTML
 */
export function renderProjectsPage() {
  const filteredProjects = getFilteredProjects();
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const filtersHtml = CATEGORIES.map((cat) => {
    const isSelected = activeCategory === cat;
    const displayLabel = cat === 'Website Development & Digital Presence'
      ? 'Web Development'
      : cat === 'System Analysis & UI/UX Design'
      ? 'UI/UX & Systems'
      : cat === 'Enterprise System & AI Integration'
      ? 'Enterprise & AI'
      : cat === 'Business Analytics & Systems Modeling'
      ? 'Analytics & Systems'
      : cat;

    return `
      <button type="button" class="ren-filter-btn ${isSelected ? 'active' : ''}" data-category="${cat}">
        ${displayLabel}
      </button>
    `;
  }).join('');

  return `
    <main class="site-container main-content">
      <div class="ren-page-header">
        <a href="#/" class="ren-back-link">
          <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span>Back to Home</span>
        </a>

        <h1 class="ren-page-title">Selected Projects</h1>
        <p class="ren-page-subtitle">
          A collection of web apps and systems I've designed, built, and optimized — spanning UI/UX, full-stack development, and enterprise systems.
        </p>
      </div>

      <div class="ren-filters-row" id="projects-filters-row">
        ${filtersHtml}
      </div>

      <div class="ren-projects-grid" id="projects-catalog-grid">
        ${renderProjectCardsHtml(pageProjects, true)}
      </div>

      <div id="projects-pagination-container">
        ${renderPaginationHtml(totalPages, currentPage)}
      </div>
    </main>
  `;
}

/**
 * Animate cards entrance with staggered delay (matching Events page)
 */
function animateCardsIn(container, transitionId) {
  if (!container) return;
  const cards = container.querySelectorAll('.ren-project-card');

  cards.forEach((card, idx) => {
    setTimeout(() => {
      if (activeTransitionId !== transitionId) return;
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, filter 0.6s ease, box-shadow 0.25s ease, border-color 0.2s ease';
      card.style.opacity = '1';
      card.style.filter = 'blur(0px)';
      card.style.transform = 'translateY(0)';
    }, idx * 45);
  });

  setTimeout(() => {
    if (activeTransitionId === transitionId) {
      container.classList.remove('is-transitioning');
    }
  }, (cards.length * 45) + 300);
}

/**
 * Execute category or page transition with smooth exit + entrance
 */
function transitionProjectsCatalog(onDomUpdate, scrollToGrid = false) {
  const grid = document.getElementById('projects-catalog-grid');
  const paginationContainer = document.getElementById('projects-pagination-container');
  if (!grid) return;

  activeTransitionId += 1;
  const thisTransitionId = activeTransitionId;

  grid.classList.add('is-transitioning');
  const currentCards = grid.querySelectorAll('.ren-project-card');

  const executeUpdate = () => {
    if (activeTransitionId !== thisTransitionId) return;

    if (typeof onDomUpdate === 'function') onDomUpdate();

    const filtered = getFilteredProjects();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageProjects = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    grid.innerHTML = renderProjectCardsHtml(pageProjects, true);

    if (paginationContainer) {
      paginationContainer.innerHTML = renderPaginationHtml(totalPages, currentPage);
      bindPaginationHandlers();
    }

    initSpotlightPhysics();
    initModalCards();

    // Trigger staggered entrance animation (Events page standard)
    requestAnimationFrame(() => {
      animateCardsIn(grid, thisTransitionId);
    });

    if (scrollToGrid) {
      const header = document.querySelector('.ren-page-header');
      if (header) {
        header.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  if (currentCards && currentCards.length > 0) {
    currentCards.forEach((c) => c.classList.add('is-animating-out'));
    setTimeout(executeUpdate, 200);
  } else {
    executeUpdate();
  }
}

/**
 * Bind pagination button click handlers
 */
function bindPaginationHandlers() {
  const prevBtn = document.getElementById('ren-prev-page');
  if (prevBtn) {
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        transitionProjectsCatalog(null, true);
      }
    };
  }

  const nextBtn = document.getElementById('ren-next-page');
  if (nextBtn) {
    nextBtn.onclick = () => {
      const filtered = getFilteredProjects();
      const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
      if (currentPage < totalPages) {
        currentPage++;
        transitionProjectsCatalog(null, true);
      }
    };
  }

  const pageNumBtns = document.querySelectorAll('.ren-page-num');
  pageNumBtns.forEach((btn) => {
    btn.onclick = () => {
      const targetPage = parseInt(btn.getAttribute('data-page') || '1', 10);
      if (targetPage && targetPage !== currentPage) {
        currentPage = targetPage;
        transitionProjectsCatalog(null, true);
      }
    };
  });
}

/**
 * Initialize all Projects page interactive events
 */
export function initProjectsPageEvents() {
  initSpotlightPhysics();
  initModalCards();

  const grid = document.getElementById('projects-catalog-grid');
  if (grid) {
    activeTransitionId += 1;
    const initialTransitionId = activeTransitionId;
    requestAnimationFrame(() => {
      animateCardsIn(grid, initialTransitionId);
    });
  }

  // Category filter handlers
  const filterBtns = document.querySelectorAll('.ren-filter-btn');
  filterBtns.forEach((btn) => {
    btn.onclick = () => {
      const cat = btn.getAttribute('data-category');
      if (cat && cat !== activeCategory) {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        transitionProjectsCatalog(() => {
          activeCategory = cat;
          currentPage = 1;
        });
      }
    };
  });

  bindPaginationHandlers();
}
