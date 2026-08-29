// ==========================================================================
// Events Page View — Renlenon-Style Dynamic Masonry Gallery & Fullscreen Lightbox
// Features: Glitch-Free Photo Opening, Zero Background Layout Shift,
// Strict Non-Circular Boundary Navigation (First/Last Disabled),
// Mobile-Responsive Navigation Arrows & Hardware-Accelerated Isolated Backdrop
// ==========================================================================

import { eventsGalleryData } from '../data.js';

let activeLightboxIndex = null;
let touchStartX = 0;
let touchStartY = 0;
let touchLocked = false;
let touchHorizontal = false;
let resizeObserverInstance = null;

// Preload cache for instant zero-latency photo display
const preloadedImages = new Map();

function preloadAllGalleryImages() {
  if (typeof Image === 'undefined') return;
  eventsGalleryData.forEach((item) => {
    if (!preloadedImages.has(item.img)) {
      const img = new Image();
      img.src = item.img;
      preloadedImages.set(item.img, img);
    }
  });
}

// Preload immediately on module load
preloadAllGalleryImages();

export function renderEventsPage() {
  const itemsHtml = eventsGalleryData
    .map((evt, idx) => `
      <div class="ren-masonry-item" data-event-index="${idx}" style="opacity: 0; filter: blur(10px); transform: translateY(40px);" role="button" tabindex="0" aria-label="${evt.title}">
        <div class="ren-masonry-img" style="background-image: url('${evt.img}');"></div>
        <div class="ren-masonry-caption-overlay">
          <span class="ren-masonry-caption-title">${evt.title}</span>
          <span class="ren-masonry-caption-sub">${evt.location} • ${evt.date}</span>
        </div>
      </div>
    `)
    .join('');

  return `
    <main class="site-container main-content">
      <div class="ren-page-header">
        <a href="#/" class="ren-back-link">
          <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span>Back to Home</span>
        </a>

        <h1 class="ren-page-title">Events</h1>
        <p class="ren-page-subtitle">Photos from events, meetups, and moments outside the IDE.</p>
      </div>

      <div class="ren-masonry-container" id="ren-events-masonry">
        ${itemsHtml}
      </div>
    </main>
  `;
}

function ensureLightboxModal() {
  let modal = document.getElementById('ren-lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ren-lightbox-modal';
    modal.className = 'ren-lightbox-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-label', 'Event photo viewer');
    modal.innerHTML = `
      <div class="ren-lightbox-backdrop" id="ren-lightbox-backdrop"></div>
      <div class="ren-lightbox-dialog" id="ren-lightbox-dialog" onclick="event.stopPropagation()">
        <!-- Previous Button (Mobile & Desktop) -->
        <button type="button" class="ren-lightbox-nav-btn" id="ren-lightbox-prev" aria-label="Previous photo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div class="ren-lightbox-content-box">
          <div class="ren-lightbox-frame">
            <button type="button" class="ren-lightbox-close-btn" id="ren-lightbox-close" aria-label="Close viewer (Escape)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src="" alt="" class="ren-lightbox-img" id="ren-lightbox-img" />
          </div>

          <div class="ren-lightbox-caption-bar" id="ren-lightbox-caption">
            <h4 id="ren-lightbox-title"></h4>
            <p id="ren-lightbox-sub"></p>
          </div>
        </div>

        <!-- Next Button (Mobile & Desktop) -->
        <button type="button" class="ren-lightbox-nav-btn" id="ren-lightbox-next" aria-label="Next photo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    `;
    document.body.appendChild(modal);
  } else if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
  return modal;
}

function calculateMasonryLayout(isInitial = false) {
  // If modal is open, do not recalculate background masonry to prevent layout jumps
  if (document.body && document.body.classList.contains('lightbox-open') && !isInitial) {
    return;
  }

  const container = document.getElementById('ren-events-masonry');
  if (!container) return;

  const containerWidth = container.offsetWidth;
  if (!containerWidth) return;

  // Determine column count based on container width
  let cols = 1;
  if (containerWidth >= 1500) cols = 5;
  else if (containerWidth >= 1000) cols = 4;
  else if (containerWidth >= 600) cols = 3;
  else if (containerWidth >= 400) cols = 2;

  const gap = 14; // pixels between items
  const colWidth = (containerWidth - (cols - 1) * gap) / cols;
  const colHeights = new Array(cols).fill(0);

  const items = container.querySelectorAll('.ren-masonry-item');
  items.forEach((item, idx) => {
    const data = eventsGalleryData[idx];
    const baseHeight = data && data.height ? data.height : 360;
    // Scale height proportional to column width
    const itemHeight = Math.round((baseHeight / 360) * (colWidth * 0.95));

    // Find the shortest column
    let minCol = 0;
    let minHeight = colHeights[0];
    for (let c = 1; c < cols; c++) {
      if (colHeights[c] < minHeight) {
        minHeight = colHeights[c];
        minCol = c;
      }
    }

    const x = minCol * (colWidth + gap);
    const y = colHeights[minCol];

    item.style.width = `${colWidth}px`;
    item.style.height = `${itemHeight}px`;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    colHeights[minCol] += itemHeight + gap;

    // Trigger entrance animation only on initial mount
    if (isInitial) {
      setTimeout(() => {
        item.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, filter 0.6s ease, box-shadow 0.3s ease';
        item.style.opacity = '1';
        item.style.filter = 'blur(0px)';
        item.style.transform = 'translateY(0)';
      }, idx * 45);
    }
  });

  const maxHeight = Math.max(...colHeights);
  container.style.height = `${maxHeight}px`;
}

function updateLightboxNavButtons(index) {
  const prevBtn = document.getElementById('ren-lightbox-prev');
  const nextBtn = document.getElementById('ren-lightbox-next');
  const total = eventsGalleryData.length;

  const canPrev = index > 0;
  const canNext = index < total - 1;

  if (prevBtn) {
    prevBtn.disabled = !canPrev;
    prevBtn.setAttribute('aria-disabled', String(!canPrev));
    if (canPrev) {
      prevBtn.classList.remove('disabled');
    } else {
      prevBtn.classList.add('disabled');
    }
  }

  if (nextBtn) {
    nextBtn.disabled = !canNext;
    nextBtn.setAttribute('aria-disabled', String(!canNext));
    if (canNext) {
      nextBtn.classList.remove('disabled');
    } else {
      nextBtn.classList.add('disabled');
    }
  }
}

function openLightbox(index) {
  if (index < 0 || index >= eventsGalleryData.length) return;
  activeLightboxIndex = index;

  const modal = ensureLightboxModal();
  const img = document.getElementById('ren-lightbox-img');
  const title = document.getElementById('ren-lightbox-title');
  const sub = document.getElementById('ren-lightbox-sub');

  if (!modal || !img || !title || !sub) return;

  const item = eventsGalleryData[index];

  // Set image and text immediately
  img.src = item.img;
  img.alt = item.title;
  title.textContent = item.title;
  sub.textContent = `${item.location} • ${item.date} — ${item.desc}`;

  // Update Previous / Next boundary state
  updateLightboxNavButtons(index);

  // Open modal with smooth isolated hardware-accelerated transition
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
}

function closeLightbox() {
  activeLightboxIndex = null;
  const modal = document.getElementById('ren-lightbox-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('lightbox-open');
}

function nextLightboxPhoto() {
  if (activeLightboxIndex === null) return;
  // Strict non-circular boundary check: stop at last photo
  if (activeLightboxIndex >= eventsGalleryData.length - 1) return;
  openLightbox(activeLightboxIndex + 1);
}

function prevLightboxPhoto() {
  if (activeLightboxIndex === null) return;
  // Strict non-circular boundary check: stop at first photo
  if (activeLightboxIndex <= 0) return;
  openLightbox(activeLightboxIndex - 1);
}

export function initEventsPageEvents() {
  // Ensure the body-level lightbox modal is initialized
  const modal = ensureLightboxModal();

  // Preload images
  preloadAllGalleryImages();

  // Compute Masonry Layout after DOM paint with initial animation
  requestAnimationFrame(() => {
    calculateMasonryLayout(true);
  });

  // Watch for resize safely
  const container = document.getElementById('ren-events-masonry');
  if (container) {
    if (resizeObserverInstance) resizeObserverInstance.disconnect();
    resizeObserverInstance = new ResizeObserver(() => {
      calculateMasonryLayout(false);
    });
    resizeObserverInstance.observe(container);

    // Reliable click event delegation on the masonry container
    container.onclick = (e) => {
      const item = e.target.closest('.ren-masonry-item');
      if (!item) return;
      const idx = parseInt(item.getAttribute('data-event-index') || '0', 10);
      if (!isNaN(idx)) {
        openLightbox(idx);
      }
    };

    container.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const item = e.target.closest('.ren-masonry-item');
        if (!item) return;
        e.preventDefault();
        const idx = parseInt(item.getAttribute('data-event-index') || '0', 10);
        if (!isNaN(idx)) {
          openLightbox(idx);
        }
      }
    };
  }

  // Modal navigation controls
  const prevBtn = document.getElementById('ren-lightbox-prev');
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      prevLightboxPhoto();
    };
  }

  const nextBtn = document.getElementById('ren-lightbox-next');
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      nextLightboxPhoto();
    };
  }

  const closeBtn = document.getElementById('ren-lightbox-close');
  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      closeLightbox();
    };
  }

  if (modal) {
    modal.addEventListener(
      'touchmove',
      (e) => {
        if (!e.target.closest('#ren-lightbox-dialog')) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    modal.addEventListener(
      'wheel',
      (e) => {
        if (!e.target.closest('#ren-lightbox-dialog')) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  }

  // Global Keyboard listener for Lightbox
  window.removeEventListener('keydown', handleLightboxKeyDown);
  window.addEventListener('keydown', handleLightboxKeyDown);

  // Touch swipe support on modal dialog
  const dialog = document.getElementById('ren-lightbox-dialog');
  if (dialog) {
    dialog.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      if (touch) {
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchLocked = false;
        touchHorizontal = false;
      }
    }, { passive: true });

    dialog.addEventListener('touchmove', (e) => {
      if (touchLocked) return;
      const touch = e.touches[0];
      if (!touch) return;
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        touchLocked = true;
        touchHorizontal = false;
        return;
      }
      if (Math.abs(dx) > 10) {
        touchLocked = true;
        touchHorizontal = true;
      }
    }, { passive: true });

    dialog.addEventListener('touchend', (e) => {
      if (!touchHorizontal) return;
      const touch = e.changedTouches[0];
      if (!touch) return;
      const dx = touch.clientX - touchStartX;
      if (Math.abs(dx) >= 45) {
        if (dx < 0) {
          nextLightboxPhoto();
        } else {
          prevLightboxPhoto();
        }
      }
      touchHorizontal = false;
      touchLocked = false;
    }, { passive: true });
  }
}

function handleLightboxKeyDown(e) {
  const modal = document.getElementById('ren-lightbox-modal');
  if (!modal || !modal.classList.contains('open')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    prevLightboxPhoto();
  } else if (e.key === 'ArrowRight') {
    nextLightboxPhoto();
  }
}
