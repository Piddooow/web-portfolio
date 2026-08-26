// ==========================================================================
// Preloader — React Bits Pro Animated Loading Screen Engine (@reactbits-starter/preloader-tw)
// Docs: https://pro.reactbits.dev/docs/components/preloader
// Features: Unskippable, Snappy & Seamless Switch with Page Entrance Trigger
// ==========================================================================

export function initPreloader(options = {}) {
  const brandName = options.brandName || 'VIDD';
  const words = options.words || [
    'SYSTEMS ARCHITECTURE',
    'OPERATIONS & STRATEGY',
    'UI/UX & WEB ENGINEERING',
    'WELCOME TO VIDD'
  ];
  const logoSrc = options.logoSrc || 'src/assets/images/spider-icon.png';
  const duration = options.duration || 1600;
  const stairCount = options.stairCount || 5;

  // Add scroll lock
  if (document.body) {
    document.body.classList.add('preloader-active');
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
  }

  const fillEl = document.getElementById('preloader-bar-indicator');
  const percentEl = document.getElementById('preloader-counter-digits');
  const statusEl = document.getElementById('preloader-status-text');
  const wordEl = document.getElementById('preloader-word-cycle');

  let isDone = false;
  let animFrameId;
  let wordIntervalId;

  // Rotating word cycle
  let wordIdx = 0;
  if (words && words.length > 1) {
    const wordInterval = Math.max(duration / words.length, 280);
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
        }, 100);
      }
    }, wordInterval);
  }

  function finishLoader() {
    if (isDone) return;
    isDone = true;
    if (wordIntervalId) clearInterval(wordIntervalId);

    if (fillEl) fillEl.style.width = '100%';
    if (percentEl) percentEl.textContent = '100%';
    if (statusEl) statusEl.textContent = 'READY';
    if (wordEl) {
      wordEl.textContent = words[words.length - 1];
      wordEl.style.opacity = '1';
      wordEl.style.transform = 'translateY(0px)';
    }

    // Fast, smooth & seamless switch (zero hesitation)
    setTimeout(() => {
      loader.classList.add('is-exiting');
      loader.style.pointerEvents = 'none';

      // Trigger post-preloader page entrance reveal
      if (document.body) {
        document.body.classList.add('page-revealed');
      }

      setTimeout(() => {
        if (document.body) {
          document.body.classList.remove('preloader-active');
        }
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
        cancelAnimationFrame(animFrameId);
      }, 750);
    }, 60);
  }

  const startTime = performance.now();

  function tick(now) {
    if (isDone) return;
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1.0);

    // Smooth cubic easeInOut curve
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const currentPercent = Math.min(Math.round(eased * 100), 100);

    if (fillEl) fillEl.style.width = `${currentPercent}%`;
    if (percentEl) percentEl.textContent = `${currentPercent.toString().padStart(2, '0')}%`;

    if (statusEl) {
      if (currentPercent < 30) statusEl.textContent = 'INITIALIZING ARCHITECTURE';
      else if (currentPercent < 65) statusEl.textContent = 'LOADING DESIGN TOKENS';
      else if (currentPercent < 98) statusEl.textContent = 'PREPARING ENVIRONMENT';
      else statusEl.textContent = 'READY';
    }

    if (progress >= 1.0) {
      finishLoader();
    } else {
      animFrameId = requestAnimationFrame(tick);
    }
  }

  animFrameId = requestAnimationFrame(tick);
}
