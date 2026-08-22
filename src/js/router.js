// ==========================================================================
// Client-Side Router — Multi-Route SPA Navigation
// ==========================================================================

import { renderNavbar, initNavbarEvents } from './components/navbar.js';
import { renderFooter, initBackToTopEvents } from './components/footer.js';
import { renderChatWidget, initChatEvents } from './components/chat.js';

import { renderHomePage, initHomePageEvents } from './pages/home.js';
import { renderProjectsPage, initProjectsPageEvents } from './pages/projects-page.js';
import { renderExperiencePage } from './pages/experience-page.js';
import { renderCertificationsPage, initCertificationsPageEvents } from './pages/certs-page.js';
import { renderTechPage } from './pages/tech-page.js';
import { renderEventsPage, initEventsPageEvents } from './pages/events-page.js';
import { renderCaseStudyPage } from './pages/case-study.js';

export function getRoute() {
  const hash = window.location.hash || '#/';
  return hash;
}

export function navigateTo(route) {
  window.location.hash = route;
}

export function handleRoute() {
  const route = getRoute();
  const app = document.getElementById('root');
  if (!app) return;

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'instant' });

  let mainHtml = '';
  let initPageEvents = () => {};

  if (route === '#/' || route === '#' || route === '') {
    mainHtml = renderHomePage();
    initPageEvents = initHomePageEvents;
  } else if (route.startsWith('#/projects')) {
    mainHtml = renderProjectsPage();
    initPageEvents = initProjectsPageEvents;
  } else if (route.startsWith('#/experience')) {
    mainHtml = renderExperiencePage();
  } else if (route.startsWith('#/certifications')) {
    mainHtml = renderCertificationsPage();
    initPageEvents = initCertificationsPageEvents;
  } else if (route.startsWith('#/tech-stack')) {
    mainHtml = renderTechPage();
  } else if (route.startsWith('#/events')) {
    mainHtml = renderEventsPage();
    initPageEvents = initEventsPageEvents;
  } else if (route.startsWith('#/keepr')) {
    mainHtml = renderCaseStudyPage('keepr');
  } else if (route.startsWith('#/pawsitivecare')) {
    mainHtml = renderCaseStudyPage('pawsitivecare');
  } else {
    mainHtml = renderHomePage();
    initPageEvents = initHomePageEvents;
  }

  app.innerHTML = `
    ${renderNavbar(route)}
    <div id="app-main" style="flex: 1; width: 100%;">
      ${mainHtml}
    </div>
    ${renderFooter()}
    ${renderChatWidget()}
  `;

  // Initialize interactive event listeners
  initNavbarEvents();
  initBackToTopEvents();
  initChatEvents();
  initPageEvents();
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
