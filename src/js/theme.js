// ==========================================================================
// Theme Manager — Dark/Light Mode with View Transitions & Sword-Glint Slicing
// ==========================================================================

const THEME_STORAGE_KEY = 'portfolio_theme';

export function isDark() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function initTheme() {
  const dark = isDark();
  applyTheme(dark);

  // Listen for system theme changes if no manual preference is saved
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches);
      updateToggleIcons();
    }
  });
}

export function toggleTheme(event) {
  const currentIsDark = isDark();
  const nextIsDark = !currentIsDark;

  if (event) {
    const x = event.clientX || window.innerWidth / 2;
    const y = event.clientY || window.innerHeight / 2;
    document.documentElement.style.setProperty('--theme-x', `${x}px`);
    document.documentElement.style.setProperty('--theme-y', `${y}px`);
  }

  // Create Sword-Glint slicing blade animation element
  const glint = document.createElement('div');
  glint.className = 'sword-glint slicing';
  document.body.appendChild(glint);
  setTimeout(() => {
    glint.remove();
  }, 900);

  const applyChange = () => {
    localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? 'dark' : 'light');
    applyTheme(nextIsDark);
    updateToggleIcons();
  };

  // Use View Transitions API if supported for the polygon clip reveal
  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.startViewTransition(() => {
      applyChange();
    });
  } else {
    document.documentElement.classList.add('no-transitions');
    applyChange();
    setTimeout(() => {
      document.documentElement.classList.remove('no-transitions');
    }, 50);
  }
}

export function updateToggleIcons() {
  const dark = isDark();
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach((btn) => {
    btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}
