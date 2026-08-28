// ==========================================================================
// Featured Project Component — Primary Showcase with Modal Card Integration
// ==========================================================================

import { featuredProject } from '../data.js';

export function renderFeatured() {
  const tagsHtml = featuredProject.techTags
    .map((t) => `<span class="pill-badge" style="font-size: 0.7rem;">${t}</span>`)
    .join('');

  return `
    <section class="featured-card modal-card-item" id="featured-work" data-slug="${featuredProject.slug}" data-modal-slug="${featuredProject.slug}" style="cursor: pointer;">
      <div class="featured-img-wrap">
        <img src="${featuredProject.image}" alt="${featuredProject.title} live screenshot" class="featured-img" />
        <div class="modal-card-expand-badge" aria-hidden="true" title="Expand showcase details">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </div>
      </div>

      <div class="featured-content">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
            <span class="eyebrow-mono" style="font-size: 0.65rem;">Primary Showcase • ${featuredProject.category}</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${featuredProject.year}</span>
          </div>
          <h3 class="featured-title" style="margin-top: 0.35rem;">${featuredProject.title}</h3>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">${featuredProject.role}</span>
        </div>

        <p style="font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary);">
          ${featuredProject.summary}
        </p>

        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
          ${featuredProject.tech}
        </div>

        <div class="featured-tags" style="align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
            ${tagsHtml}
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn-secondary btn-modal-expand" data-modal-slug="${featuredProject.slug}" style="font-size: 0.76rem; padding: 0.4rem 0.85rem; gap: 0.35rem;" aria-label="View ${featuredProject.title} details">
              <span>View Details</span>
              <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <a href="${featuredProject.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary link-live" style="font-size: 0.76rem; padding: 0.4rem 0.85rem; gap: 0.35rem;" onclick="event.stopPropagation();">
              <span>Visit Live</span>
              <svg style="width: 0.8rem; height: 0.8rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
