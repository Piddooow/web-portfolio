// ==========================================================================
// Client-Side Router — Multi-Route SPA Navigation with 404 Error Handler
// ==========================================================================

import { renderNavbar, initNavbarEvents } from './components/navbar.js';
import { renderFooter, initBackToTopEvents } from './components/footer.js';
import { renderChatWidget, initChatEvents } from './components/chat.js';
import { initTextScatter } from './components/text-scatter.js';
import { initModalCards } from './components/modal-cards.js';

import { renderHomePage, initHomePageEvents } from './pages/home.js';
import { renderProjectsPage, initProjectsPageEvents } from './pages/projects-page.js';
import { renderExperiencePage } from './pages/experience-page.js';
import { renderCertificationsPage, initCertificationsPageEvents } from './pages/certs-page.js';
import { renderTechPage } from './pages/tech-page.js';
import { renderEventsPage, initEventsPageEvents } from './pages/events-page.js';
import { renderCaseStudyPage } from './pages/case-study.js';
import { render404Page, init404PageEvents } from './pages/error-404-page.js';

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

  // Handle in-page anchors when home page is already mounted
  if (route.startsWith('#') && !route.startsWith('#/')) {
    const targetId = route.substring(1);
    const existingTarget = document.getElementById(targetId);
    if (existingTarget) {
      existingTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
  }

  // Scroll to top for page changes
  window.scrollTo({ top: 0, behavior: 'instant' });

  let mainHtml = '';
  let initPageEvents = () => {};
  let is404 = false;

  const validAnchors = [
    '#/', '#', '', '#projects', '#capabilities', '#about',
    '#experience', '#other-side', '#github-activity', '#contact'
  ];

  if (validAnchors.includes(route) || route.startsWith('#/')) {
    if (route === '#/' || route === '#' || route === '' || route.startsWith('#projects') || route.startsWith('#capabilities') || route.startsWith('#about') || route.startsWith('#experience') || route.startsWith('#other-side') || route.startsWith('#github-activity') || route.startsWith('#contact')) {
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
    } else if (route.startsWith('#/404') || route.startsWith('#/error')) {
      is404 = true;
      mainHtml = render404Page();
      initPageEvents = init404PageEvents;
    } else {
      is404 = true;
      mainHtml = render404Page();
      initPageEvents = init404PageEvents;
    }
  } else {
    is404 = true;
    mainHtml = render404Page();
    initPageEvents = init404PageEvents;
  }

  if (is404) {
    app.innerHTML = mainHtml;
    init404PageEvents();
    return;
  }

  app.innerHTML = `
    ${renderNavbar(route)}
    <div id="app-main" style="flex: 1; width: 100%;">
      ${mainHtml}
    </div>
    ${renderFooter()}
    ${renderChatWidget()}
  `;

  // Safe execution helper
  const safeExec = (fn, name) => {
    try {
      if (typeof fn === 'function') fn();
    } catch (err) {
      console.warn(`[Router Init Warning] Failed to initialize ${name}:`, err);
    }
  };

  // Initialize interactive event listeners
  safeExec(initNavbarEvents, 'Navbar');
  safeExec(initBackToTopEvents, 'BackToTop');
  safeExec(initChatEvents, 'Chat');
  safeExec(initPageEvents, 'PageEvents');
  safeExec(initTextScatter, 'TextScatter');
  safeExec(initModalCards, 'ModalCards');
}

export function initRouter() {
  if (typeof window !== 'undefined') {
    window.handleRoute = handleRoute;
    window.navigateTo = navigateTo;
    window.addEventListener('hashchange', handleRoute);
  }
  handleRoute();
}
