// ==========================================================================
// Main Application Bootstrap
// ==========================================================================

import { initTheme } from './theme.js';
import { initRouter } from './router.js';
import { initPreloader } from './components/preloader.js';
import { initWarpTwister } from './components/warp-twister.js';
import { initClickSpark } from './components/click-spark.js';
import { initUserCursor } from './components/user-cursor.js';
import { initTextScatter } from './components/text-scatter.js';
import { initBendingMarquee } from './components/bending-marquee.js';
import { initStaggeredText } from './components/staggered-text.js';
import { initPullToRefresh } from './components/pull-to-refresh.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPreloader();
  initWarpTwister();
  initClickSpark({ sparkCount: 8, sparkRadius: 15, sparkSize: 10, duration: 400, fps: 60 });
  initUserCursor({ name: 'Jhon Doe', lerp: 0.22 });
  initTextScatter();
  initBendingMarquee();
  initStaggeredText();
  initPullToRefresh();
  initRouter();
});
