// ==========================================================================
// Navbar Component — Vidd Clean Minimal Responsive Brand Navigation
// Randomized Stagger Spring Roll Animation (Matching Motion/React Spec)
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

  function createLetterSwapHtml(label) {
    const lettersHtml = label
      .split('')
      .map((char, i) => {
        const displayChar = char === ' ' ? '&nbsp;' : char;
        return `
          <span aria-hidden="true" class="letter-slot">
            <span class="letter-char letter-${i}">${displayChar}</span>
            <span class="letter-secondary letter-secondary-${i}">${displayChar}</span>
          </span>
        `;
      })
      .join('');

    return `
      <span class="random-letter-swap" aria-label="${label}">
        <span class="sr-only">${label}</span>
        ${lettersHtml}
      </span>
    `;
  }

  const desktopLinksHtml = navItems
    .map((item) => {
      const active = currentPath === item.href ? 'active' : '';
      return `
        <a href="${item.href}" class="nav-link ${active}" data-label="${item.label}">
          ${createLetterSwapHtml(item.label)}
        </a>
      `;
    })
    .join('');

  const mobileLinksHtml = navItems
    .map((item, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      const active = currentPath === item.href ? 'active' : '';
      return `
        <a href="${item.href}" class="mobile-nav-link ${active}" data-label="${item.label}" style="--item-index: ${idx};">
          <span class="mobile-nav-link-num">${num}</span>
          <span class="mobile-nav-link-text">${item.label}</span>
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
          <div class="nav-right-wrap" id="nav-right-wrap">
            <!-- Desktop Links (Hidden on mobile < 640px) -->
            <div class="nav-links desktop-nav-links">
              ${desktopLinksHtml}
            </div>

            <div class="desktop-nav-divider" aria-hidden="true"></div>

            <!-- Theme Toggle Button -->
            <button type="button" class="theme-toggle-btn" id="theme-toggle" title="${dark ? 'Switch to light mode' : 'Switch to dark mode'}" aria-label="Toggle theme">
              <svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none"/>
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/>
              </svg>
              <svg class="theme-icon-moon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </button>

            <!-- React Bits StaggeredMenu Hamburger Button (Visible on mobile < 640px) -->
            <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
              <span class="toggle-line line-1"></span>
              <span class="toggle-line line-2"></span>
              <span class="toggle-line line-3"></span>
            </button>
          </div>
        </nav>
      </div>

      <!-- React Bits StaggeredMenu Dropdown Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
        <div class="site-container">
          <div class="mobile-nav-links" style="--total-items: ${navItems.length};">
            ${mobileLinksHtml}

            <div class="mobile-nav-social-wrap">
              <span class="mobile-nav-social-label">Connect</span>
              <div class="mobile-nav-social-links">
                <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="mobile-nav-social-link">GitHub</a>
                <a href="${profileData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="mobile-nav-social-link">David Antono (LinkedIn)</a>
                <a href="${profileData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="mobile-nav-social-link">Instagram</a>
                <a href="mailto:${profileData.email}" class="mobile-nav-social-link">Email</a>
              </div>
            </div>
          </div>
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

  // Mobile Drawer Toggle (React Bits StaggeredMenu effect)
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (mobileBtn && drawer) {
    let isOpen = false;

    function closeMenu() {
      if (!isOpen) return;
      isOpen = false;
      drawer.classList.remove('open');
      mobileBtn.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      if (isOpen) return;
      isOpen = true;
      drawer.classList.add('open');
      mobileBtn.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      mobileBtn.setAttribute('aria-expanded', 'true');
    }

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    const allLinks = document.querySelectorAll('.desktop-nav-links .nav-link, .mobile-nav-drawer .mobile-nav-link');
    allLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#') && !href.startsWith('#/')) {
          const targetId = href.substring(1);
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            closeMenu();

            allLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');

            try {
              history.pushState(null, '', href);
            } catch (err) {}

            const header = document.getElementById('site-header');
            const headerHeight = header ? header.offsetHeight : 64;
            const targetRect = targetEl.getBoundingClientRect();
            const targetPosition = targetRect.top + window.pageYOffset - headerHeight - 16;

            window.scrollTo({
              top: Math.max(0, targetPosition),
              behavior: 'smooth'
            });
          }
        } else {
          closeMenu();
        }
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

  // Exact Random Letter Swap Hover Animation for nav-right-wrap
  initRandomLetterSwapHover();
}

export function initRandomLetterSwapHover() {
  const links = document.querySelectorAll('#nav-right-wrap .nav-link');

  links.forEach((link) => {
    const swapContainer = link.querySelector('.random-letter-swap');
    if (!swapContainer) return;

    const label = link.getAttribute('data-label') || '';
    const length = label.length;
    if (length === 0) return;

    let isBlocked = false;
    let resetTimeout = null;

    link.addEventListener('mouseenter', () => {
      if (isBlocked) return;
      isBlocked = true;

      // Generate randomized order of character indexes
      const shuffled = Array.from({ length }, (_, i) => i).sort(() => Math.random() - 0.5);
      const staggerDuration = 20; // 0.02s per letter
      const animDuration = 700; // ms

      const primaryLetters = swapContainer.querySelectorAll('.letter-char');
      const secondaryLetters = swapContainer.querySelectorAll('.letter-secondary');

      for (let i = 0; i < length; i++) {
        const idx = shuffled[i];
        const delay = i * staggerDuration;

        const p = primaryLetters[idx];
        const s = secondaryLetters[idx];

        if (p && s) {
          p.style.transition = `transform ${animDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
          s.style.transition = `top ${animDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;

          p.style.transform = 'translateY(100%)';
          s.style.top = '0%';
        }
      }

      if (resetTimeout) clearTimeout(resetTimeout);

      const totalTime = length * staggerDuration + animDuration + 50;
      resetTimeout = setTimeout(() => {
        primaryLetters.forEach((p) => {
          p.style.transition = 'none';
          p.style.transform = 'translateY(0%)';
        });

        secondaryLetters.forEach((s) => {
          s.style.transition = 'none';
          s.style.top = '-100%';
        });

        // Force browser layout repaint
        void swapContainer.offsetHeight;

        isBlocked = false;
      }, totalTime);
    });
  });
}
