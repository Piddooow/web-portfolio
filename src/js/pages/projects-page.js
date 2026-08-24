// ==========================================================================
// Projects Page View — Full Catalog & Filterable Grid
// ==========================================================================

import { projectsData } from '../data.js';
import { initSpotlightPhysics } from '../components/projects.js';

let activeCategory = 'All';

export function renderProjectsPage() {
  const categories = ['All', 'Desktop App', 'Web Platform', 'Open Source', 'Full-Stack', 'E-Commerce'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const filtersHtml = categories
    .map((cat) => {
      const isSelected = activeCategory === cat;
      return `
        <button type="button" class="project-filter-btn pill-badge ${isSelected ? 'active-filter' : ''}" data-category="${cat}" style="cursor: pointer; transition: all 0.2s ease; ${isSelected ? 'background-color: var(--text-primary); color: var(--text-inverse);' : ''}">
          ${cat}
        </button>
      `;
    })
    .join('');

  const cardsHtml = filteredProjects
    .map((p) => {
      const tagsHtml = p.tech
        .map((t) => `<span class="tag-chip" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">${t}</span>`)
        .join('');

      return `
        <article class="card-spotlight project-card" data-slug="${p.slug}">
          <span class="edge-light"></span>
          <a href="${p.detailsUrl}" class="project-card-img-wrap" title="View ${p.title}">
            <img src="${p.image}" alt="${p.title}" class="project-card-img" />
          </a>

          <div class="project-card-body">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
                <span class="eyebrow-mono" style="font-size: 0.65rem;">${p.category}</span>
                <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${p.year}</span>
              </div>
              <h3 class="project-card-title">${p.title}</h3>
              <p class="project-card-desc">${p.summary}</p>
            </div>

            <div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
                ${tagsHtml}
              </div>

              <div class="project-card-footer">
                <a href="${p.detailsUrl}" class="card-action-btn">
                  <span>Details</span>
                  <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>

                ${
                  p.liveUrl
                    ? `
                  <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-action-btn" title="Live Preview">
                    <span>Live</span>
                    <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                `
                    : ''
                }
              </div>
            </div>
          </div>
        </article>
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

        <h1 class="section-title" style="font-size: 2.25rem; margin-bottom: 0.5rem;">Selected Projects</h1>
        <p style="max-width: 32rem; color: var(--text-secondary); margin-bottom: 1.75rem;">
          A comprehensive archive of applications, cryptographic tools, and design systems I've built and optimized.
        </p>

        <!-- Category Filters -->
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
          ${filtersHtml}
        </div>
      </div>

      <div class="projects-grid" id="projects-catalog-grid">
        ${cardsHtml}
      </div>
    </main>
  `;
}

export function initProjectsPageEvents() {
  initSpotlightPhysics();

  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      if (cat && cat !== activeCategory) {
        activeCategory = cat;
        // Re-render container
        const app = document.getElementById('app-main');
        if (app) {
          app.innerHTML = renderProjectsPage();
          initProjectsPageEvents();
        }
      }
    });
  });
}
