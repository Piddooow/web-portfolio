// ==========================================================================
// BendingMarquee Component & Engine — React Bits Pro (@reactbits-starter/bending-marquee-tw)
// Exact 3D curved arch ribbon with signature bend curvature:
// bend: 60, depth: -200, perspective: 800, speed: 16.0, fontSize: 34,
// fontWeight: 600, letterSpacing: 1.0, separator: '*', unclickable & theme-adaptive
// Continuous Mathematical Modulo Scrolling at 90+ FPS with zero jitter during scrolling
// ==========================================================================

let marqueeInstanceCount = 0;

/**
 * Render Bending Marquee HTML markup
 */
export function renderBendingMarquee({
  marqueeText = "Hey Hey It's Vidd!!",
  direction = 'left',
  bend = 60,
  curveAmount,
  depth = -200,
  perspective = 800,
  fontSize = 34,
  fontWeight = 600,
  letterSpacing = 1.0,
  separator = '*',
  bandPadding = 12,
  speed = 16.0,
  interactive = true,
  className = '',
  textColor = '',
  bandColor = ''
} = {}) {
  marqueeInstanceCount += 1;
  const uid = `bm-${marqueeInstanceCount}-${Date.now().toString(36)}`;
  const pathId = `curve-path-${uid}`;
  const effectiveBend = curveAmount !== undefined ? curveAmount : bend;
  const baseY = 50;
  // Exact signature 3D bending curve (-300 to 1740) with prominent bend arch
  const pathD = `M-300,${baseY} Q720,${baseY + effectiveBend} 1740,${baseY}`;

  const trimmed = marqueeText.trim();
  const cleanText = `${trimmed}\u00A0\u00A0\u00A0${separator}\u00A0\u00A0\u00A0`;
  const unclickableClass = interactive ? '' : 'unclickable';

  return `
    <div 
      class="bending-marquee-container ${unclickableClass} ${className}".trim() 
      id="${uid}" 
      data-marquee-text="${encodeURIComponent(cleanText)}"
      data-direction="${direction}"
      data-speed="${speed}"
      data-depth="${depth}"
      data-perspective="${perspective}"
      data-font-size="${fontSize}"
      data-font-weight="${fontWeight}"
      data-letter-spacing="${letterSpacing}"
      data-band-padding="${bandPadding}"
      data-interactive="${interactive ? 'true' : 'false'}"
      data-path-id="${pathId}"
      style="perspective: ${perspective}px; padding-top: ${bandPadding}px; padding-bottom: ${bandPadding}px; ${bandColor ? `background-color: ${bandColor};` : ''}"
      role="region"
      aria-label="${trimmed}"
    >
      <div class="bending-marquee-3d-stage" style="transform: translate3d(0, 0, ${depth}px) scale(${1 - Math.abs(depth) * 0.0006});">
        <svg class="bending-marquee-svg" viewBox="0 0 1440 100" preserveAspectRatio="xMidYMid meet">
          <text class="bending-marquee-measure" xml:space="preserve" style="visibility: hidden; opacity: 0; pointer-events: none; font-size: ${fontSize}px; font-weight: ${fontWeight}; letter-spacing: ${letterSpacing}px;">
            ${cleanText}
          </text>
          <defs>
            <path id="${pathId}" d="${pathD}" fill="none" stroke="transparent"></path>
          </defs>
          <text xml:space="preserve" class="bending-marquee-text" style="font-size: ${fontSize}px; font-weight: ${fontWeight}; letter-spacing: ${letterSpacing}px; ${textColor ? `fill: ${textColor};` : ''}">
            <textPath class="bending-marquee-text-path" href="#${pathId}" startOffset="0px" xmlSpace="preserve">
              ${cleanText}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  `;
}

/**
 * Initialize all Bending Marquee instances in the DOM
 */
export function initBendingMarquee(selector = '.bending-marquee-container') {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const containers = document.querySelectorAll(selector);
  if (!containers || containers.length === 0) return;

  containers.forEach((container) => {
    if (container.dataset.initialized === 'true') return;
    container.dataset.initialized = 'true';

    const measureEl = container.querySelector('.bending-marquee-measure');
    const textPathEl = container.querySelector('.bending-marquee-text-path');
    if (!measureEl || !textPathEl) return;

    const rawText = decodeURIComponent(container.dataset.marqueeText || "Hey Hey It's Vidd!!\u00A0\u00A0\u00A0*\u00A0\u00A0\u00A0");
    const direction = container.dataset.direction || 'left';
    const baseSpeed = parseFloat(container.dataset.speed || '16.0');
    let currentSpeed = baseSpeed;
    let targetSpeed = baseSpeed;
    let isHovered = false;
    const isRight = direction === 'right';

    let spacing = 0;

    const computeSpacing = () => {
      if (!measureEl) return;
      const measured = measureEl.getComputedTextLength();
      if (measured && measured > 10) {
        spacing = measured;
      } else {
        spacing = rawText.length * 22;
      }

      const repeatCount = Math.max(8, Math.ceil(3600 / spacing) + 6);
      const fullText = Array(repeatCount).fill(rawText).join('');
      if (textPathEl.textContent !== fullText) {
        textPathEl.textContent = fullText;
      }
    };

    computeSpacing();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(computeSpacing);
    }

    // Interactivity handlers: click bursts speed smoothly, hover slightly relaxes speed
    container.addEventListener('mouseenter', () => {
      isHovered = true;
      targetSpeed = baseSpeed * 0.75;
    }, { passive: true });

    container.addEventListener('mouseleave', () => {
      isHovered = false;
      targetSpeed = baseSpeed;
    }, { passive: true });

    container.addEventListener('click', () => {
      // Dynamic velocity burst with smooth decay back to target
      currentSpeed = baseSpeed * 2.4;
    });

    let accumulatedDistance = 0;
    let lastTimestamp = null;
    let rafId = null;

    function step(timestamp) {
      if (!container.isConnected) {
        if (rafId) cancelAnimationFrame(rafId);
        return;
      }

      if (!lastTimestamp) lastTimestamp = timestamp;
      const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.033);
      lastTimestamp = timestamp;

      // Smooth decay / acceleration towards target speed
      currentSpeed += (targetSpeed - currentSpeed) * Math.min(dt * 3.5, 1);

      if (spacing > 0 && textPathEl) {
        const pxPerSec = (currentSpeed / 16.0) * 85;
        accumulatedDistance += pxPerSec * dt;

        const normalized = ((accumulatedDistance % spacing) + spacing) % spacing;
        const currentOffset = isRight
          ? -spacing * 1.5 + normalized
          : -spacing * 1.5 - normalized;

        textPathEl.setAttribute('startOffset', `${currentOffset.toFixed(2)}px`);
      }

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
  });
}
