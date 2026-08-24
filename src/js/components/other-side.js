// ==========================================================================
// "The other side of Vidd" — React Bits <Stack /> Interactive Component
// Left: Editorial Story & Controls | Right: Interactive 3D Photo Stack
// Flexible unbounded drag & smooth spring dynamics
// ==========================================================================

import { personalGalleryData } from '../data.js';

export function renderOtherSide() {
  const total = personalGalleryData.length;
  const initialTopIndex = total - 1; // Top card is the last in stack array
  const activeItem = personalGalleryData[initialTopIndex] || personalGalleryData[0];

  return `
    <section class="other-side-section" id="other-side" style="margin-top: 1.5rem;">
      <div class="section-header">
        <div>
          <h2 class="section-title">The other side of Vidd</h2>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Beyond systems and code — moments in sports, discipline, recreation, and daily life.
          </p>
        </div>
      </div>

      <!-- React Bits Stack Interactive Container (Unbounded Drag / Overflow Visible) -->
      <div class="react-bits-stack-wrapper card-spotlight" id="react-bits-stack-wrapper">
        <div class="react-bits-stack-grid">
          
          <!-- Column 1 (Left): Active Card Details & Story -->
          <div class="stack-info-col">
            <div class="stack-info-card" id="stack-info-card">
              <div class="stack-info-header">
                <span class="eyebrow-mono" id="stack-tag-text" style="font-size: 0.65rem; color: var(--text-muted);">${activeItem.tag}</span>
                <span class="stack-counter-badge" id="stack-counter-badge">1 / ${total}</span>
              </div>

              <h3 class="stack-title" id="stack-name-text" style="font-size: 1.35rem; font-weight: 500; color: var(--text-primary); margin-top: 0.35rem; letter-spacing: -0.02em;">
                ${activeItem.name}
              </h3>
              
              <p class="stack-designation" id="stack-designation-text" style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
                ${activeItem.designation}
              </p>

              <blockquote class="stack-quote" id="stack-quote-text" style="font-size: 0.925rem; font-style: italic; color: var(--text-primary); line-height: 1.6; margin: 0; min-height: 4rem;">
                “${activeItem.quote}”
              </blockquote>

              <!-- Stack Navigation Controls -->
              <div class="stack-controls-row">
                <div class="stack-dots-indicator" id="stack-dots-indicator">
                  ${personalGalleryData
                    .map(
                      (_, i) => `
                      <button type="button" class="stack-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="View card ${i + 1}"></button>
                    `
                    )
                    .join('')}
                </div>

                <div class="stack-arrow-buttons">
                  <button type="button" class="deck-nav-btn" id="stack-prev-btn" aria-label="Previous card in stack" title="Previous Card">
                    <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <button type="button" class="deck-nav-btn" id="stack-next-btn" aria-label="Next card in stack" title="Next Card">
                    <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 2 (Right): Interactive 3D Stack Stage -->
          <div class="stack-stage-col">
            <div class="stack-outer-box" id="stack-outer-box">
              <div class="stack-container" id="react-bits-stack-deck" role="region" aria-label="Interactive draggable photo stack">
                ${personalGalleryData
                  .map((item, index) => {
                    return `
                      <div class="card-rotate" data-index="${index}" id="stack-card-${index}">
                        <div class="card stack-card-inner">
                          <img src="${item.src}" alt="${item.name}" class="card-image" loading="lazy" />
                          <div class="stack-card-badge">
                            <span>${item.tag}</span>
                          </div>
                        </div>
                      </div>
                    `;
                  })
                  .join('')}
              </div>
            </div>
            <div class="stack-drag-hint">
              <i class="fa-solid fa-hand-pointer" style="font-size: 0.75rem;"></i>
              <span>Drag anywhere or tap to shuffle</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initOtherSideCarousel() {
  const deck = document.getElementById('react-bits-stack-deck');
  const wrapper = document.getElementById('react-bits-stack-wrapper');
  if (!deck || !wrapper) return;

  const total = personalGalleryData.length;
  const sensitivity = 100; // Drag threshold to send to back
  const randomRotation = true;

  // Pre-generate stable random angles for cards
  const randomRotations = personalGalleryData.map(() => (Math.random() * 8 - 4));

  // Current stack order (array of indices: first item is bottom, last item is top)
  let stack = personalGalleryData.map((_, i) => i);
  let isPaused = false;
  let autoplayTimer = null;

  const tagEl = document.getElementById('stack-tag-text');
  const nameEl = document.getElementById('stack-name-text');
  const designationEl = document.getElementById('stack-designation-text');
  const quoteEl = document.getElementById('stack-quote-text');
  const counterEl = document.getElementById('stack-counter-badge');
  const dots = document.querySelectorAll('#stack-dots-indicator .stack-dot');
  const prevBtn = document.getElementById('stack-prev-btn');
  const nextBtn = document.getElementById('stack-next-btn');

  function updateInfo() {
    const topIdx = stack[stack.length - 1];
    const item = personalGalleryData[topIdx];
    if (!item) return;

    if (tagEl) tagEl.textContent = item.tag;
    if (nameEl) nameEl.textContent = item.name;
    if (designationEl) designationEl.textContent = item.designation;
    if (quoteEl) quoteEl.textContent = `“${item.quote}”`;
    if (counterEl) counterEl.textContent = `${topIdx + 1} / ${total}`;

    dots.forEach((dot, idx) => {
      if (idx === topIdx) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function renderStackPositions(animate = true) {
    stack.forEach((cardIdx, positionIndex) => {
      const cardEl = document.getElementById(`stack-card-${cardIdx}`);
      if (!cardEl) return;

      const inner = cardEl.querySelector('.stack-card-inner');
      const randomRotate = randomRotation ? randomRotations[cardIdx] : 0;
      
      const stackOffset = stack.length - positionIndex - 1;
      const rotateZ = stackOffset * -3.5 + randomRotate;
      const scale = 1 + positionIndex * 0.045 - stack.length * 0.045;
      const translateY = stackOffset * -6;
      const zIndex = positionIndex + 10;

      cardEl.style.zIndex = zIndex;

      if (inner) {
        inner.style.transition = animate ? 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease' : 'none';
        inner.style.transformOrigin = '90% 90%';
        inner.style.transform = `translateY(${translateY}px) scale(${scale}) rotateZ(${rotateZ}deg)`;
      }
    });

    updateInfo();
  }

  function sendToBack(directionX = 140, directionY = -40) {
    if (stack.length <= 1) return;
    const topCardIdx = stack[stack.length - 1];
    const topCardEl = document.getElementById(`stack-card-${topCardIdx}`);

    if (topCardEl) {
      const inner = topCardEl.querySelector('.stack-card-inner');
      if (inner) {
        // Fly out smoothly in the direction of swipe
        inner.style.transition = 'transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.28s ease';
        inner.style.transform = `translate(${directionX}px, ${directionY}px) rotate(${directionX > 0 ? 18 : -18}deg) scale(0.9)`;
        inner.style.opacity = '0.3';
      }
    }

    setTimeout(() => {
      const top = stack.pop();
      stack.unshift(top);

      if (topCardEl) {
        const inner = topCardEl.querySelector('.stack-card-inner');
        if (inner) {
          inner.style.opacity = '1';
        }
      }

      renderStackPositions(true);
    }, 200);
  }

  function bringToFront() {
    if (stack.length <= 1) return;
    const bottom = stack.shift();
    stack.push(bottom);
    renderStackPositions(true);
  }

  // Pointer Drag & 3D Tilt Physics (Unbounded - Works even outside wrapper)
  personalGalleryData.forEach((_, cardIdx) => {
    const cardEl = document.getElementById(`stack-card-${cardIdx}`);
    if (!cardEl) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let hasMoved = false;

    function onPointerDown(e) {
      if (stack[stack.length - 1] !== cardIdx) return;

      isDragging = true;
      hasMoved = false;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      currentX = 0;
      currentY = 0;

      cardEl.classList.add('grabbing');

      window.addEventListener('pointermove', onPointerMove, { passive: false });
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault();

      const x = (e.clientX || (e.touches && e.touches[0].clientX) || 0) - startX;
      const y = (e.clientY || (e.touches && e.touches[0].clientY) || 0) - startY;

      if (Math.abs(x) > 4 || Math.abs(y) > 4) {
        hasMoved = true;
      }

      currentX = x;
      currentY = y;

      // 3D tilt transformation based on drag position
      const rotateX = Math.max(-35, Math.min(35, (y / 100) * -35));
      const rotateY = Math.max(-35, Math.min(35, (x / 100) * 35));

      const inner = cardEl.querySelector('.stack-card-inner');
      if (inner) {
        inner.style.transition = 'none';
        inner.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      cardEl.classList.remove('grabbing');

      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);

      const dragDistance = Math.hypot(currentX, currentY);

      if (dragDistance > sensitivity) {
        // Send to back towards swipe direction
        const flyX = currentX > 0 ? 180 : -180;
        const flyY = currentY;
        sendToBack(flyX, flyY);
      } else if (!hasMoved) {
        // Send to back on click / tap
        sendToBack(140, -40);
      } else {
        // Snap back to resting position
        renderStackPositions(true);
      }
    }

    cardEl.addEventListener('pointerdown', onPointerDown);
  });

  // Navigation Buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      sendToBack(140, -40);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      bringToFront();
    });
  }

  // Dots click navigation
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.getAttribute('data-index') || '0', 10);
      while (stack[stack.length - 1] !== targetIdx) {
        const top = stack.pop();
        stack.unshift(top);
      }
      renderStackPositions(true);
    });
  });

  // Autoplay with Pause on Hover
  function startAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      if (!isPaused && document.visibilityState === 'visible') {
        sendToBack(140, -40);
      }
    }, 4000);
  }

  wrapper.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  wrapper.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  // Initial Render
  renderStackPositions(false);
  startAutoplay();
}
