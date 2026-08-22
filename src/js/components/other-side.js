// ==========================================================================
// "The other side of Vidd" — Compact Editorial 3D Swipeable Carousel Component
// ==========================================================================

import { personalGalleryData } from '../data.js';

let activeGalleryIndex = 0;
let autoplayTimer = null;

export function renderOtherSide() {
  const activeItem = personalGalleryData[activeGalleryIndex] || personalGalleryData[0];

  return `
    <section class="other-side-section" id="other-side" style="margin-top: 1.5rem;">
      <div class="section-header">
        <div>
          <h2 class="section-title">The other side of Vidd</h2>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Beyond systems and code — moments in sports, discipline, and daily life.
          </p>
        </div>
      </div>

      <!-- Compact Circular 3D Carousel Container -->
      <div class="circular-carousel-wrapper" id="circular-carousel-wrapper">
        <div class="circular-carousel-grid">
          <!-- 3D Perspective Image Deck (Compact & Balanced) -->
          <div class="circular-image-deck" id="circular-image-deck" tabindex="0" role="region" aria-label="Swipeable photo deck">
            ${personalGalleryData
      .map(
        (item, index) => `
                <div class="circular-deck-item" data-index="${index}" id="deck-item-${index}">
                  <img src="${item.src}" alt="${item.name} (${item.tag})" class="deck-image" />
                  <div class="deck-badge-overlay">
                    <span>${item.tag}</span>
                  </div>
                </div>
              `
      )
      .join('')}
          </div>

          <!-- Content & Caption Column -->
          <div class="circular-content-col">
            <div class="circular-text-body" id="circular-text-body">
              <span class="eyebrow-mono" id="deck-tag-text" style="font-size: 0.65rem; color: var(--text-muted);">${activeItem.tag}</span>
              <h3 class="deck-title" id="deck-name-text" style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-top: 0.2rem; letter-spacing: -0.02em;">
                ${activeItem.name}
              </h3>
              <p class="deck-designation" id="deck-designation-text" style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.65rem;">
                ${activeItem.designation}
              </p>
              <blockquote class="deck-quote" id="deck-quote-text" style="font-size: 0.9rem; font-style: italic; color: var(--text-primary); line-height: 1.55; margin: 0; min-height: 3.5rem;">
                “${activeItem.quote}”
              </blockquote>
            </div>

            <!-- Navigation Controls & Swipe Dots -->
            <div class="circular-controls-row">
              <div class="deck-dots-indicator" id="deck-dots-indicator">
                ${personalGalleryData
      .map(
        (_, i) => `
                    <button type="button" class="deck-dot ${i === activeGalleryIndex ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
                  `
      )
      .join('')}
              </div>

              <div class="deck-arrow-buttons">
                <button type="button" class="deck-nav-btn" id="deck-prev-btn" aria-label="Previous photo" title="Previous (Left Arrow)">
                  <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button type="button" class="deck-nav-btn" id="deck-next-btn" aria-label="Next photo" title="Next (Right Arrow)">
                  <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initOtherSideCarousel() {
  const container = document.getElementById('circular-image-deck');
  const wrapper = document.getElementById('circular-carousel-wrapper');
  if (!container || !wrapper) return;

  const total = personalGalleryData.length;
  const prevBtn = document.getElementById('deck-prev-btn');
  const nextBtn = document.getElementById('deck-next-btn');
  const nameEl = document.getElementById('deck-name-text');
  const designationEl = document.getElementById('deck-designation-text');
  const quoteEl = document.getElementById('deck-quote-text');
  const tagEl = document.getElementById('deck-tag-text');
  const dots = document.querySelectorAll('.deck-dot');

  function update3DTransform() {
    const isMobile = window.innerWidth < 640;
    const gap = isMobile ? 28 : 48;

    for (let i = 0; i < total; i++) {
      const el = document.getElementById(`deck-item-${i}`);
      if (!el) continue;

      const isActive = i === activeGalleryIndex;
      const isLeft = (activeGalleryIndex - 1 + total) % total === i;
      const isRight = (activeGalleryIndex + 1) % total === i;

      if (isActive) {
        el.style.zIndex = '3';
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
        el.style.transform = 'translateX(0px) translateY(0px) scale(1) rotateY(0deg)';
      } else if (isLeft) {
        el.style.zIndex = '2';
        el.style.opacity = '0.65';
        el.style.pointerEvents = 'auto';
        el.style.transform = `translateX(-${gap}px) translateY(-6px) scale(0.88) rotateY(14deg)`;
      } else if (isRight) {
        el.style.zIndex = '2';
        el.style.opacity = '0.65';
        el.style.pointerEvents = 'auto';
        el.style.transform = `translateX(${gap}px) translateY(-6px) scale(0.88) rotateY(-14deg)`;
      } else {
        el.style.zIndex = '1';
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        el.style.transform = 'translateX(0px) translateY(14px) scale(0.75) rotateY(0deg)';
      }
    }

    // Update text with soft transition
    const activeItem = personalGalleryData[activeGalleryIndex];
    if (nameEl) nameEl.textContent = activeItem.name;
    if (designationEl) designationEl.textContent = activeItem.designation;
    if (quoteEl) quoteEl.textContent = `“${activeItem.quote}”`;
    if (tagEl) tagEl.textContent = activeItem.tag;

    dots.forEach((dot, idx) => {
      if (idx === activeGalleryIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToNext() {
    activeGalleryIndex = (activeGalleryIndex + 1) % total;
    update3DTransform();
  }

  function goToPrev() {
    activeGalleryIndex = (activeGalleryIndex - 1 + total) % total;
    update3DTransform();
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(goToNext, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoplay();
      goToNext();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoplay();
      goToPrev();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
      stopAutoplay();
      activeGalleryIndex = idx;
      update3DTransform();
    });
  });

  // Touch & Mouse Drag / Swipe Handlers
  let startX = 0;
  let isDown = false;

  container.addEventListener('touchstart', (e) => {
    stopAutoplay();
    startX = e.touches[0].clientX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 35) {
      if (diff < 0) goToNext();
      else goToPrev();
    }
  }, { passive: true });

  container.addEventListener('mousedown', (e) => {
    stopAutoplay();
    isDown = true;
    startX = e.clientX;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDown) return;
    isDown = false;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 35) {
      if (diff < 0) goToNext();
      else goToPrev();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      stopAutoplay();
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      stopAutoplay();
      goToNext();
    }
  });

  wrapper.addEventListener('mouseenter', stopAutoplay);
  wrapper.addEventListener('mouseleave', startAutoplay);

  update3DTransform();
  startAutoplay();
}
