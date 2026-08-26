// ==========================================================================
// Home Page Composition — David Antono Enampato (D4vd)
// ==========================================================================

import { renderHero, initHeroAvatarPhysics } from '../components/hero.js';
import { initScrollRevealObserver } from '../components/scroll-reveal.js';
import { renderPhilosophy } from '../components/philosophy.js';
import { renderLogoLoop } from '../components/logo-loop.js';
import { renderProjects, initSpotlightPhysics } from '../components/projects.js';
import { renderCapabilities } from '../components/capabilities.js';
import { renderAbout } from '../components/about.js';
import { renderExperience } from '../components/experience.js';
import { renderOtherSide, initOtherSideCarousel } from '../components/other-side.js';
import { initTextScatter } from '../components/text-scatter.js';
import { initBendingMarquee } from '../components/bending-marquee.js';
import { renderGitHubActivity, initGitHubActivityEvents } from '../components/github-activity.js';
import { renderContact } from '../components/contact.js';

export function renderHomePage() {
  return `
    <main class="site-container main-content">
      ${renderHero()}
      ${renderPhilosophy()}
      ${renderLogoLoop()}
      ${renderProjects()}
      ${renderCapabilities()}
      ${renderAbout()}
      ${renderExperience()}
      ${renderOtherSide()}
      ${renderGitHubActivity()}
      ${renderContact()}
    </main>
  `;
}

export function initHomePageEvents() {
  initHeroAvatarPhysics();
  initSpotlightPhysics();
  initOtherSideCarousel();
  initGitHubActivityEvents();
  initScrollRevealObserver();
  initTextScatter();
  initBendingMarquee();
}
