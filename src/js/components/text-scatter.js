// ==========================================================================
// TextScatter — React Bits Pro Interactive Typography Engine (@reactbits-starter/text-scatter-tw)
// Docs: https://pro.reactbits.dev/docs/components/text-scatter
// Features: 90+ FPS Vector Physics, Immediate Return on Hero Heading, 2.0s Hold Delay on Badges,
// Full Mobile Touch & Pointer Support, Smooth Seamless Eased Recovery
// ==========================================================================

export function initTextScatter(options = {}) {
  const {
    selector = '[data-text-scatter]',
    scatterRadius = 120,
    scatterForce = 45,
    velocity,
    rotationRange = 35,
    rotation,
    springDuration = 800,
    duration,
    returnDelay = 2.0,
    returnAfter,
    scale = 1.05
  } = options;

  const effectiveForce = velocity !== undefined ? velocity : scatterForce;
  const effectiveRotation = rotation !== undefined ? rotation : rotationRange;
  const effectiveDuration = duration !== undefined ? (duration <= 10 ? duration * 1000 : duration) : springDuration;
  const effectiveDelay = returnAfter !== undefined ? returnAfter : returnDelay;

  const elements = document.querySelectorAll(selector);

  elements.forEach((container) => {
    if (container.dataset.textScatterProcessed === 'true') return;
    container.dataset.textScatterProcessed = 'true';

    const rawText = container.getAttribute('data-text-scatter') || container.textContent || "Who's Vidd?";
    const chars = rawText.trim().split('');

    // Check if this container is configured for immediate return on hover end
    const isImmediateReturn = container.classList.contains('text-scatter-hero-heading') ||
                              container.classList.contains('text-scatter-giant') ||
                              container.getAttribute('data-immediate-return') === 'true' ||
                              container.getAttribute('data-return-delay') === '0';

    container.innerHTML = '';
    const charElements = [];

    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.className = 'text-scatter-char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.setAttribute('aria-hidden', 'true');
      span.dataset.charIndex = String(index);
      span.dataset.isScattered = 'false';
      container.appendChild(span);
      charElements.push(span);
    });

    container.setAttribute('aria-label', rawText);

    let resetTimer = null;
    let rafId = null;
    let cachedCharCenters = [];
    let isInteracting = false;

    // Cache character bounding box centers to prevent layout thrashing
    const updateCachedCenters = () => {
      cachedCharCenters = charElements.map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          centerX: rect.left + rect.width / 2,
          centerY: rect.top + rect.height / 2
        };
      });
    };

    // Smooth return to initial state with natural momentum
    const returnToRest = () => {
      if (isInteracting) return; // Guard against late firing
      charElements.forEach((charEl) => {
        charEl.style.transition = `transform ${effectiveDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        charEl.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
        charEl.dataset.isScattered = 'false';
      });
    };

    const cancelPendingReset = () => {
      if (resetTimer) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }
    };

    const scheduleReset = () => {
      cancelPendingReset();
      if (isImmediateReturn) {
        // Langsung kembali secara smooth & elegan setelah hover pada hero heading
        returnToRest();
      } else {
        // Pertahankan posisi statis secara utuh selama tepat 2.0 detik (2000ms)
        const delayMs = Math.max(effectiveDelay * 1000, 2000);
        resetTimer = setTimeout(() => {
          returnToRest();
          resetTimer = null;
        }, delayMs);
      }
    };

    const handlePointerStart = (clientX, clientY) => {
      isInteracting = true;
      cancelPendingReset();
      updateCachedCenters();
      handlePointerMoveCoords(clientX, clientY);
    };

    const handlePointerMoveCoords = (clientX, clientY) => {
      isInteracting = true;
      cancelPendingReset();

      if (!cachedCharCenters.length) {
        updateCachedCenters();
      }

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        charElements.forEach((charEl, index) => {
          const center = cachedCharCenters[index];
          if (!center) return;

          const dx = center.centerX - clientX;
          const dy = center.centerY - clientY;
          const distance = Math.hypot(dx, dy);

          if (distance < scatterRadius) {
            const proximity = Math.pow(1 - distance / scatterRadius, 1.15);
            const force = proximity * effectiveForce;
            const angle = Math.atan2(dy, dx);
            const offsetX = Math.cos(angle) * force;
            const offsetY = Math.sin(angle) * force;
            const rotDir = index % 2 === 0 ? 1 : -1;
            const rot = rotDir * proximity * effectiveRotation;
            const charScale = 1 + proximity * (scale - 1);

            charEl.style.transition = 'transform 0.06s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            charEl.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${charScale.toFixed(3)})`;
            charEl.dataset.isScattered = 'true';
          }
        });
      });
    };

    const handlePointerEnd = () => {
      isInteracting = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      scheduleReset();
    };

    // Desktop Mouse Events
    container.addEventListener('mouseenter', (e) => handlePointerStart(e.clientX, e.clientY), { passive: true });
    container.addEventListener('mousemove', (e) => handlePointerMoveCoords(e.clientX, e.clientY), { passive: true });
    container.addEventListener('mouseleave', handlePointerEnd, { passive: true });

    // Mobile / Touch Events
    container.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMoveCoords(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    container.addEventListener('touchend', handlePointerEnd, { passive: true });
    container.addEventListener('touchcancel', handlePointerEnd, { passive: true });

    window.addEventListener('resize', updateCachedCenters, { passive: true });
  });
}
