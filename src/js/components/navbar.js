// ==========================================================================
// Navbar Component — Vidd Clean Minimal Responsive Brand Navigation
// 20fps Smooth & Elegant Scramble-and-Resolve Letter Animation
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

  const desktopLinksHtml = navItems
    .map((item) => {
      const active = currentPath === item.href ? 'active' : '';
      return `
        <a href="${item.href}" class="nav-link ${active}" data-label="${item.label}">
          <span class="nav-link-text">${item.label}</span>
        </a>
      `;
    })
    .join('');

  const mobileLinksHtml = navItems
    .map((item) => {
      const active = currentPath === item.href ? 'active' : '';
      return `
        <a href="${item.href}" class="mobile-nav-link ${active}" data-label="${item.label}">
          <span class="nav-link-text">${item.label}</span>
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </a>
      `;
    })
    .join('');

  return `
    <header class="site-header" id="site-header">
      <div class="site-container">
        <nav class="nav-container" aria-label="Main Navigation">
          <!-- Monogram Brand Logo (Left) -->
          <a href="#/" class="brand-monogram" title="${profileData.name}">
            <span>${profileData.brandName}</span>
            <span class="brand-slash">/</span>
          </a>

          <!-- Navigation Links & Theme Controls (Right) -->
          <div class="nav-right-wrap">
            <!-- Desktop Links (Hidden on mobile < 640px) -->
            <div class="nav-links desktop-nav-links">
              ${desktopLinksHtml}
            </div>

            <div class="desktop-nav-divider" aria-hidden="true"></div>

            <!-- Theme Toggle Button -->
            <button type="button" class="theme-toggle-btn" id="theme-toggle" title="${dark ? 'Switch to light mode' : 'Switch to dark mode'}" aria-label="Toggle theme">
              <svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: ${dark ? 0 : 1}; transform: rotate(${dark ? '90deg' : '0deg'}) scale(${dark ? 0.5 : 1});">
                <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none"/>
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/>
              </svg>
              <svg class="theme-icon-moon" viewBox="0 0 24 24" fill="currentColor" style="opacity: ${dark ? 1 : 0}; transform: rotate(${dark ? '0deg' : '-90deg'}) scale(${dark ? 1 : 0.5});">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </button>

            <!-- Mobile Hamburger Menu Button (Visible on mobile < 640px) -->
            <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
              <svg class="hamburger-icon" id="hamburger-icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <svg class="hamburger-icon" id="hamburger-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <!-- Mobile Dropdown Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
        <div class="mobile-nav-links">
          ${mobileLinksHtml}
        </div>
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

  // Mobile Drawer Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const iconOpen = document.getElementById('hamburger-icon-open');
  const iconClose = document.getElementById('hamburger-icon-close');

  if (mobileBtn && drawer) {
    let isOpen = false;

    function closeMenu() {
      if (!isOpen) return;
      isOpen = false;
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      mobileBtn.setAttribute('aria-expanded', 'false');
      if (iconOpen) iconOpen.style.display = 'block';
      if (iconClose) iconClose.style.display = 'none';
    }

    function openMenu() {
      if (isOpen) return;
      isOpen = true;
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      mobileBtn.setAttribute('aria-expanded', 'true');
      if (iconOpen) iconOpen.style.display = 'none';
      if (iconClose) iconClose.style.display = 'block';
    }

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      const header = document.getElementById('site-header');
      if (header && !header.contains(e.target)) {
        closeMenu();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 640 && isOpen) {
        closeMenu();
      }
    });
  }

  // Exact 20fps smooth & elegant letter scramble
  initNavbarLetterScramble();
}

export function initNavbarLetterScramble() {
  const links = document.querySelectorAll('.desktop-nav-links .nav-link, .mobile-nav-links .mobile-nav-link');
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const fpsInterval = 1000 / 20; // Exact 20fps (50ms per frame)

  links.forEach((link) => {
    const textSpan = link.querySelector('.nav-link-text');
    if (!textSpan) return;

    const originalText = link.getAttribute('data-label') || textSpan.textContent.trim();
    let frameId = null;

    link.addEventListener('mouseenter', () => {
      let iteration = 0;
      const length = originalText.length;
      // Controlled resolution across ~6 frames at 20fps (~300ms total, snappy & smooth)
      const stepIncrement = Math.max(0.65, length / 6);

      if (frameId) clearInterval(frameId);

      frameId = setInterval(() => {
        textSpan.textContent = originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return originalText[index]; // Resolved letter
            }
            return charset[Math.floor(Math.random() * charset.length)]; // 20fps random swap
          })
          .join('');

        if (iteration >= length) {
          clearInterval(frameId);
          textSpan.textContent = originalText; // 100% Guaranteed original text
          frameId = null;
        }

        iteration += stepIncrement;
      }, fpsInterval);
    });

    link.addEventListener('mouseleave', () => {
      if (frameId) {
        clearInterval(frameId);
        frameId = null;
      }
      textSpan.textContent = originalText; // Instantly restore exact original text
    });
  });
}
