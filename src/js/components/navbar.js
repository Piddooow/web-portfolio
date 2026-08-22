// ==========================================================================
// Navbar Component — Vidd Clean Minimal Brand Navigation
// ==========================================================================

import { profileData } from '../data.js';
import { toggleTheme, isDark } from '../theme.js';

export function renderNavbar(currentPath = '#/') {
  const dark = isDark();
  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Competencies', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Personal', href: '#other-side' },
    { label: 'Activity', href: '#github-activity' },
    { label: 'Contact', href: '#contact' }
  ];

  const linksHtml = navItems
    .map((item) => {
      const active = currentPath === item.href ? 'active' : '';
      return `<a href="${item.href}" class="nav-link ${active}">${item.label}</a>`;
    })
    .join('');

  return `
    <header class="site-header" id="site-header">
      <div class="site-container">
        <nav class="nav-container" aria-label="Main Navigation">
          <a href="#/" class="brand-monogram" title="${profileData.name}">
            ${profileData.brandName}
            <span>/</span>
          </a>

          <div class="nav-links-wrap">
            <div class="nav-links">
              ${linksHtml}
            </div>

            <div class="nav-divider" aria-hidden="true"></div>

            <button type="button" class="theme-toggle-btn" id="theme-toggle" title="${dark ? 'Switch to light mode' : 'Switch to dark mode'}" aria-label="Toggle theme">
              <svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: ${dark ? 0 : 1}; transform: rotate(${dark ? '90deg' : '0deg'}) scale(${dark ? 0.5 : 1});">
                <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none"/>
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/>
              </svg>
              <svg class="theme-icon-moon" viewBox="0 0 24 24" fill="currentColor" style="opacity: ${dark ? 1 : 0}; transform: rotate(${dark ? '0deg' : '-90deg'}) scale(${dark ? 1 : 0.5});">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      toggleTheme(e);
    });
  }
}
