// ==========================================================================
// Hero Component — Vidd
// Refined 24fps Smooth Pixelated Avatar Transition & /D4vd Alias
// ==========================================================================

import { profileData, educationData } from '../data.js';

export function renderHero() {
  const socialsHtml = profileData.socials
    .map(
      (s) => `
      <a href="${s.href}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-${s.type}" title="${s.label}">
        <i class="${s.icon}"></i>
      </a>
    `
    )
    .join('');

  return `
    <section class="hero-section" id="hero">
      <div class="hero-profile-row">
        <!-- Interactive 24fps Pixelated Avatar Transition -->
        <div class="pixelated-image-card" id="pixel-avatar" tabindex="0" role="button" aria-label="Toggle profile avatar transition" title="Hover or tap to reveal">
          <!-- Default View: Childhood Photo (Before Hover) -->
          <div class="pixelated-image-card__default" id="pixel-avatar-default">
            <img src="${profileData.childhoodImage}" alt="${profileData.name} Childhood" />
          </div>

          <!-- Active View: Adult Suit Photo (After Hover) -->
          <div class="pixelated-image-card__active" id="pixel-avatar-active">
            <img src="${profileData.adultImage}" alt="${profileData.name} Present" />
          </div>

          <!-- Pixel Matrix Overlay -->
          <div class="pixelated-image-card__pixels" id="pixel-avatar-pixels"></div>
        </div>

        <div class="hero-meta-col">
          <div class="hero-name-badge-row">
            <h1 class="hero-name" style="display: inline-flex; align-items: baseline; gap: 0.35rem; flex-wrap: wrap;">
              <span>${profileData.name}</span>
              <span class="verified-badge" title="Verified Profile" aria-label="Verified" style="align-self: center;">
                <svg viewBox="0 0 24 24" class="verified-icon" aria-hidden="true">
                  <path fill="#1D9BF0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                  <path fill="#ffffff" d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                </svg>
              </span>
              <span class="hero-name-alias" style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 400; color: var(--text-muted); letter-spacing: 0.02em; margin-left: 0.15rem;">/ D4vd</span>
            </h1>
            <div class="status-beacon">
              <span class="beacon-dot"></span>
              <span>${profileData.status}</span>
            </div>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-secondary); margin-top: -0.25rem;">
            ${educationData.institution} — ${educationData.degree} (GPA ${educationData.gpa})
          </div>

          <div class="hero-social-links">
            ${socialsHtml}
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.15rem;">
        <div>
          <span class="eyebrow-mono" style="font-size: 0.72rem; letter-spacing: 0.25em;">${profileData.heroEyebrow}</span>
          <h2 class="hero-headline" style="margin-top: 0.4rem;">
            ${profileData.heroHeadingHtml || profileData.heroHeading}
          </h2>
        </div>

        <p class="hero-bio">
          ${profileData.heroSupportingHtml || profileData.heroSupporting}
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn-primary">
            <span>View Projects</span>
            <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <a href="#about" class="btn-secondary">
            <span>Academic Background</span>
          </a>

          <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="gap: 0.4rem;">
            <i class="fa-solid fa-file-lines" style="font-size: 0.75rem;"></i>
            <span>View Resume (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initHeroAvatarPhysics() {
  const container = document.getElementById('pixel-avatar');
  const activeLayer = document.getElementById('pixel-avatar-active');
  const pixelsContainer = document.getElementById('pixel-avatar-pixels');
  if (!container || !activeLayer || !pixelsContainer) return;

  // Refined high-density matrix (8x8 = 64 blocks)
  const gridSize = 8;
  const totalPixels = gridSize * gridSize;
  const stepDuration = 350; // ms per phase (elegant & slightly slower)
  const fpsInterval = 1000 / 18; // Exact 18fps (~55.5ms)

  pixelsContainer.innerHTML = '';
  const pixelElements = [];

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const el = document.createElement('div');
      el.className = 'pixelated-image-card__pixel';
      const sizePct = 100 / gridSize;
      el.style.width = `${sizePct}%`;
      el.style.height = `${sizePct}%`;
      el.style.left = `${c * sizePct}%`;
      el.style.top = `${r * sizePct}%`;
      pixelsContainer.appendChild(el);
      pixelElements.push(el);
    }
  }

  let isHovered = false;
  let animTimeout = null;
  let frameInterval = null;

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function clearAllAnimations() {
    if (animTimeout) clearTimeout(animTimeout);
    if (frameInterval) clearInterval(frameInterval);
    animTimeout = null;
    frameInterval = null;
  }

  function runPixelTransition(targetActive) {
    clearAllAnimations();
    isHovered = targetActive;

    const randomizedIndices = shuffle(Array.from({ length: totalPixels }, (_, i) => i));
    const totalFrames = Math.max(6, Math.floor(stepDuration / fpsInterval));
    const pixelsPerFrame = Math.ceil(totalPixels / totalFrames);

    let currentFrame = 0;
    
    // Phase 1: Reveal pixel blocks covering image at smooth 24fps
    frameInterval = setInterval(() => {
      currentFrame++;
      const endIdx = Math.min(totalPixels, currentFrame * pixelsPerFrame);
      for (let i = 0; i < endIdx; i++) {
        const pIdx = randomizedIndices[i];
        pixelElements[pIdx].style.display = 'block';
      }

      if (currentFrame >= totalFrames) {
        clearInterval(frameInterval);
        frameInterval = null;

        // Switch underlying layer at midpoint
        activeLayer.style.display = targetActive ? 'block' : 'none';

        // Phase 2: Hide pixel blocks revealing destination photo at 24fps
        const hideIndices = shuffle(Array.from({ length: totalPixels }, (_, i) => i));
        let hideFrame = 0;

        frameInterval = setInterval(() => {
          hideFrame++;
          const hideEndIdx = Math.min(totalPixels, hideFrame * pixelsPerFrame);
          for (let i = 0; i < hideEndIdx; i++) {
            const pIdx = hideIndices[i];
            pixelElements[pIdx].style.display = 'none';
          }

          if (hideFrame >= totalFrames) {
            clearInterval(frameInterval);
            frameInterval = null;
            pixelElements.forEach((p) => (p.style.display = 'none'));
          }
        }, fpsInterval);
      }
    }, fpsInterval);
  }

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    container.addEventListener('click', () => {
      runPixelTransition(!isHovered);
    });
  } else {
    container.addEventListener('mouseenter', () => {
      if (!isHovered) runPixelTransition(true);
    });

    container.addEventListener('mouseleave', () => {
      if (isHovered) runPixelTransition(false);
    });

    container.addEventListener('focus', () => {
      if (!isHovered) runPixelTransition(true);
    });

    container.addEventListener('blur', () => {
      if (isHovered) runPixelTransition(false);
    });
  }
}
