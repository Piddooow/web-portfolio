// ==========================================================================
// Preloader — React Bits Pro Animated Loading Screen Engine (@reactbits-starter/preloader-tw)
// Docs: https://pro.reactbits.dev/docs/components/preloader
// Features: Snappy, Smooth, Resilient & Auto-Recovering with Hard Safety Timers
// Returns a Promise that resolves when the loading & exit reveal sequence completes.
// ==========================================================================

export function initPreloader(options = {}) {
  const brandName = options.brandName || 'VIDD';
  const words = options.words || [
    'SYSTEMS ARCHITECTURE',
    'OPERATIONS & STRATEGY',
    'UI/UX & WEB ENGINEERING',
    'WELCOME TO VIDD PORTFOLIO'
  ];
  const logoSrc = options.logoSrc || 'src/assets/images/spider-icon.png';
  const duration = options.duration || 900; // Snappy 900ms duration
  const stairCount = options.stairCount || 5;
  const onReady = options.onReady || null;

  return new Promise((resolve) => {
    // Add scroll lock
    if (document.body) {
      document.body.classList.add('preloader-active');
      document.body.classList.remove('page-revealed');
    }

    let loader = document.getElementById('preloader-screen');
    if (!loader) {
      loader = document.createElement('div');
      loader.id = 'preloader-screen';
      loader.className = 'preloader-root preloader-stairs';
      loader.setAttribute('role', 'dialog');
      loader.setAttribute('aria-label', 'Loading experience');

      let stairsHtml = '<div class="preloader-stairs-container">';
      for (let i = 0; i < stairCount; i++) {
        stairsHtml += `<div class="preloader-stair-col" style="--stair-index: ${i};"></div>`;
      }
      stairsHtml += '</div>';

      loader.innerHTML = `
        ${stairsHtml}
        <div class="preloader-glow-orb"></div>
        <div class="preloader-content">
          <div class="preloader-badge">
            <img src="${logoSrc}" alt="${brandName}" />
          </div>
          <div class="preloader-titles">
            <h1 class="preloader-brand-title">${brandName}</h1>
            <p id="preloader-word-cycle" class="preloader-word-cycle">${words[0]}</p>
          </div>
          <div class="preloader-bar-track">
            <div id="preloader-bar-indicator" class="preloader-bar-indicator"></div>
          </div>
          <div class="preloader-info-row">
            <span id="preloader-status-text" class="preloader-status-text">INITIALIZING ARCHITECTURE</span>
            <span id="preloader-counter-digits" class="preloader-counter-digits">00%</span>
          </div>
        </div>
      `;
      document.body.prepend(loader);
    } else {
      loader.classList.remove('is-exiting', 'is-hidden');
      loader.style.pointerEvents = 'all';
      const cols = loader.querySelectorAll('.preloader-stair-col');
      cols.forEach((col) => {
        col.style.transform = '';
      });
      const content = loader.querySelector('.preloader-content');
      if (content) {
        content.style.opacity = '';
        content.style.transform = '';
        content.style.filter = '';
      }
      const orb = loader.querySelector('.preloader-glow-orb');
      if (orb) {
        orb.style.opacity = '';
        orb.style.transform = '';
      }
    }

    const fillEl = document.getElementById('preloader-bar-indicator');
    const percentEl = document.getElementById('preloader-counter-digits');
    const statusEl = document.getElementById('preloader-status-text');
    const wordEl = document.getElementById('preloader-word-cycle');

    if (fillEl) fillEl.style.width = '0%';
    if (percentEl) percentEl.textContent = '00%';
    if (statusEl) statusEl.textContent = options.isRefresh ? 'SYNCHRONIZING ARCHITECTURE' : 'INITIALIZING ARCHITECTURE';
    if (wordEl) {
      wordEl.textContent = words[0];
      wordEl.style.opacity = '1';
      wordEl.style.transform = 'translateY(0px)';
    }

    let isDone = false;
    let animFrameId = null;
    let wordIntervalId = null;
    let hardSafetyTimer = null;
    let emergencyDismissTimer = null;

    // Rotating word cycle
    let wordIdx = 0;
    if (words && words.length > 1) {
      const wordInterval = Math.max(Math.floor(duration / words.length), 200);
      wordIntervalId = setInterval(() => {
        if (isDone) return;
        wordIdx = (wordIdx + 1) % words.length;
        if (wordEl) {
          wordEl.style.opacity = '0';
          wordEl.style.transform = 'translateY(3px)';
          setTimeout(() => {
            if (wordEl && !isDone) {
              wordEl.textContent = words[wordIdx];
              wordEl.style.opacity = '1';
              wordEl.style.transform = 'translateY(0px)';
            }
          }, 60);
        }
      }, wordInterval);
    }

    function forceRemovePreloader() {
      if (wordIntervalId) clearInterval(wordIntervalId);
      if (hardSafetyTimer) clearTimeout(hardSafetyTimer);
      if (emergencyDismissTimer) clearTimeout(emergencyDismissTimer);
      if (animFrameId) cancelAnimationFrame(animFrameId);

      if (document.body) {
        document.body.classList.remove('preloader-active');
        document.body.classList.add('page-revealed');
      }
      const el = document.getElementById('preloader-screen');
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }

    function finishLoader() {
      if (isDone) return;
      isDone = true;

      if (wordIntervalId) clearInterval(wordIntervalId);
      if (hardSafetyTimer) clearTimeout(hardSafetyTimer);
      if (animFrameId) cancelAnimationFrame(animFrameId);

      if (fillEl) fillEl.style.width = '100%';
      if (percentEl) percentEl.textContent = '100%';
      if (statusEl) statusEl.textContent = 'READY';
      if (wordEl) {
        wordEl.textContent = words[words.length - 1];
        wordEl.style.opacity = '1';
        wordEl.style.transform = 'translateY(0px)';
      }

      if (typeof onReady === 'function') {
        try {
          onReady();
        } catch (e) {
          console.error('Preloader onReady error:', e);
        }
      }

      setTimeout(() => {
        if (loader) {
          loader.classList.add('is-exiting');
          loader.style.pointerEvents = 'none';
        }

        if (document.body) {
          document.body.classList.add('page-revealed');
        }

        setTimeout(() => {
          forceRemovePreloader();
          resolve();
        }, 550);
      }, 50);
    }

    // Interactive user bypass (clicking loader immediately finishes it)
    loader.addEventListener('click', finishLoader, { once: true });

    // Hard failsafe timers to guarantee completion
    hardSafetyTimer = setTimeout(finishLoader, duration + 300);
    emergencyDismissTimer = setTimeout(() => {
      forceRemovePreloader();
      resolve();
    }, duration + 1200);

    // Tab visibility recovery (if tab was inactive when loaded)
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !isDone) {
        finishLoader();
        document.removeEventListener('visibilitychange', onVisibilityChange);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const startTime = performance.now();

    function tick(now) {
      if (isDone) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);

      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentPercent = Math.min(Math.round(eased * 100), 100);

      if (fillEl) fillEl.style.width = `${currentPercent}%`;
      if (percentEl) percentEl.textContent = `${currentPercent.toString().padStart(2, '0')}%`;

      if (statusEl) {
        if (options.isRefresh) {
          if (currentPercent < 35) statusEl.textContent = 'SYNCHRONIZING ARCHITECTURE';
          else if (currentPercent < 70) statusEl.textContent = 'UPDATING SYSTEM TOKENS';
          else statusEl.textContent = 'READY';
        } else {
          if (currentPercent < 35) statusEl.textContent = 'INITIALIZING ARCHITECTURE';
          else if (currentPercent < 70) statusEl.textContent = 'LOADING DESIGN TOKENS';
          else statusEl.textContent = 'READY';
        }
      }

      if (progress >= 1.0) {
        finishLoader();
      } else {
        animFrameId = requestAnimationFrame(tick);
      }
    }

    animFrameId = requestAnimationFrame(tick);
  });
}
