// ==========================================================================
// ClickSpark Physics Engine — React Bits Signature ClickSpark
// Monochromatic (Pure Black in Light Mode, Pure White in Dark Mode)
// Locked to 18fps frame rate with 8 radial spark rays
// ==========================================================================

export function initClickSpark(options = {}) {
  const {
    sparkColor = 'theme',
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
    fps = 60
  } = options;

  let canvas = document.getElementById('click-spark-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'click-spark-canvas';
    canvas.className = 'click-spark-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999999';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  let sparks = [];
  let animId = null;
  let lastFrameTime = 0;
  const frameInterval = 1000 / fps;

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  function getSparkColor() {
    if (sparkColor !== 'theme') return sparkColor;
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? '#ffffff' : '#09090b';
  }

  function loop(timestamp) {
    if (timestamp - lastFrameTime < frameInterval) {
      animId = requestAnimationFrame(loop);
      return;
    }
    lastFrameTime = timestamp;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    sparks = sparks.filter((spark) => {
      const elapsed = timestamp - spark.startTime;
      if (elapsed >= duration) return false;

      const progress = elapsed / duration;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const distance = easeOut * sparkRadius;
      const currentLength = Math.max(1, sparkSize * (1 - progress));

      const x1 = spark.x + Math.cos(spark.angle) * distance;
      const y1 = spark.y + Math.sin(spark.angle) * distance;
      const x2 = spark.x + Math.cos(spark.angle) * (distance + currentLength);
      const y2 = spark.y + Math.sin(spark.angle) * (distance + currentLength);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = spark.color;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.globalAlpha = Math.max(0, 1 - progress);
      if (spark.color === '#ffffff') {
        ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
        ctx.shadowBlur = 4;
      }
      ctx.stroke();
      ctx.restore();

      return true;
    });

    if (sparks.length > 0) {
      animId = requestAnimationFrame(loop);
    } else {
      animId = null;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  function triggerSpark(x, y) {
    const now = performance.now();
    const color = getSparkColor();

    for (let i = 0; i < sparkCount; i++) {
      sparks.push({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        color,
        startTime: now
      });
    }

    if (!animId) {
      lastFrameTime = performance.now();
      animId = requestAnimationFrame(loop);
    }
  }

  window.addEventListener(
    'pointerdown',
    (e) => {
      if (e.clientX >= window.innerWidth - 8) return;
      triggerSpark(e.clientX, e.clientY);
    },
    { passive: true }
  );
}
