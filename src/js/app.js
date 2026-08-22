// ==========================================================================
// Main Application Bootstrap
// ==========================================================================

import { initTheme } from './theme.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
});
