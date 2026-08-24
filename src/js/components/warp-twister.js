// ==========================================================================
// Warp Twister — React Bits Pro Distortion Background Engine
// Smooth, swirling spatial warp field with dynamic theme-responsive opacity
// ==========================================================================

export function initWarpTwister(options = {}) {
  let canvas = document.getElementById('warp-twister-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'warp-twister-canvas';
    canvas.className = 'warp-twister-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.transition = 'opacity 0.6s ease';
    document.body.prepend(canvas);
  }

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;
  let time = 0;
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    mouseX = width / 2;
    mouseY = height / 2;
    targetMouseX = mouseX;
    targetMouseY = mouseY;
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  window.addEventListener(
    'mousemove',
    (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    },
    { passive: true }
  );

  function draw() {
    time += 0.007;

    // Smooth pointer easing
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    
    // Dynamic theme palette with adjustable low-opacity
    const strokeStyleA = isDark ? 'rgba(168, 85, 247, 0.45)' : 'rgba(124, 58, 237, 0.35)'; // Violet/Neon Purple
    const strokeStyleB = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(59, 130, 246, 0.30)'; // Cyan/Blue
    const strokeStyleC = isDark ? 'rgba(232, 121, 249, 0.25)' : 'rgba(168, 85, 247, 0.20)'; // Fuchsia/Pink

    const centerX = width * 0.5 + (mouseX - width * 0.5) * 0.25;
    const centerY = height * 0.45 + (mouseY - height * 0.45) * 0.25;

    const rings = window.innerWidth < 768 ? 14 : 22;
    const pointsPerRing = window.innerWidth < 768 ? 36 : 56;
    const maxRadius = Math.hypot(width, height) * 0.65;

    for (let r = 1; r <= rings; r++) {
      const radiusProgress = r / rings;
      const baseRadius = radiusProgress * maxRadius;
      
      // Color gradient alternation
      if (r % 3 === 0) ctx.strokeStyle = strokeStyleA;
      else if (r % 3 === 1) ctx.strokeStyle = strokeStyleB;
      else ctx.strokeStyle = strokeStyleC;

      ctx.lineWidth = 1 + (1 - radiusProgress) * 0.8;
      ctx.beginPath();

      for (let p = 0; p <= pointsPerRing; p++) {
        const angle = (p / pointsPerRing) * Math.PI * 2;

        // Twisting vortex warp mathematics
        const twist = Math.sin(time * 0.8 + radiusProgress * 3.5) * 0.65;
        const waveA = Math.sin(angle * 4 + time * 1.5 + r * 0.3) * (18 * radiusProgress);
        const waveB = Math.cos(angle * 3 - time * 1.2 + r * 0.2) * (14 * radiusProgress);

        const currentAngle = angle + twist * (1 - radiusProgress * 0.5);
        const currentRadius = baseRadius + waveA + waveB;

        const x = centerX + Math.cos(currentAngle) * currentRadius;
        const y = centerY + Math.sin(currentAngle) * (currentRadius * 0.62); // Isometric ellipse perspective

        if (p === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.stroke();
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}
