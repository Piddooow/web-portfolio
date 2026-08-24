// ==========================================================================
// Main Application Bootstrap
// ==========================================================================

import { initTheme } from './theme.js';
import { initRouter } from './router.js';
import { initWarpTwister } from './components/warp-twister.js';
import { initClickSpark } from './components/click-spark.js';
import { initUserCursor } from './components/user-cursor.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initWarpTwister();
  initClickSpark({ sparkCount: 8, sparkRadius: 15, sparkSize: 10, duration: 400, fps: 60 });
  initUserCursor({ name: 'Memey Cintakuu', lerp: 0.22 });
  initRouter();
});
