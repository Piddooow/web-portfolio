// ==========================================================================
// Marquee Component — Dual-Track Infinite Scrolling Tech Stack
// ==========================================================================

import { techMarqueeData } from '../data.js';

export function renderMarquee() {
  const track1Items = [...techMarqueeData, ...techMarqueeData];
  const track2Items = [...techMarqueeData.slice().reverse(), ...techMarqueeData.slice().reverse()];

  const renderTrackHtml = (items) =>
    items
      .map(
        (t) => `
        <div class="tech-pill">
          <i class="${t.icon} tech-icon"></i>
          <span>${t.label}</span>
        </div>
      `
      )
      .join('');

  return `
    <section class="marquee-section" id="tech-stack-marquee" style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="section-header" style="margin-bottom: 0.25rem;">
        <span class="eyebrow-mono">Technologies & Tools</span>
        <a href="#/tech-stack" class="section-link">
          <span>View All Stack</span>
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="marquee-wrapper" title="Hover to pause">
        <!-- Track 1: Scroll Left -->
        <div class="tech-track">
          ${renderTrackHtml(track1Items)}
        </div>

        <!-- Track 2: Scroll Right -->
        <div class="tech-track tech-track-right">
          ${renderTrackHtml(track2Items)}
        </div>
      </div>
    </section>
  `;
}
