import React, { useEffect, useRef } from 'react';
import './Twist.css';

export interface TwistProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Initial speed of intro twist animation */
  introSpeed?: number;
  /** Ambient speed factor */
  speed?: number;
  /** Custom base colors for rings */
  colors?: string[];
  /** Intensity of the twist vortex curvature (default: 0.65) */
  twistStrength?: number;
  /** Responsive mobile ring reduction (default: true) */
  responsive?: boolean;
  /** Optional custom CSS classes */
  className?: string;
  /** Background opacity */
  opacity?: number;
}

/**
 * Twist / Warp Twister — React Bits Pro Spatial Distortion & Entrance Effect (@reactbits-starter/twist)
 * High-performance, hardware-accelerated swirling spatial warp field with first-visit intro expansion.
 * 100% responsive on Web and Phone.
 */
export const Twist: React.FC<TwistProps> = ({
  introSpeed = 1.2,
  speed = 0.007,
  colors,
  twistStrength = 0.65,
  responsive = true,
  className = '',
  opacity = 1,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;
    let introTime = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const draw = () => {
      time += speed;
      introTime = Math.min(introTime + 0.016 * introSpeed, 1.0);

      // Smooth cubic intro surge
      const introProgress = 1 - Math.pow(1 - introTime, 3.5);
      const introTwistBoost = (1 - introProgress) * 2.5;

      // Smooth pointer easing
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const isMobile = responsive && width < 768;
      const rings = isMobile ? 12 : 22;
      const pointsPerRing = isMobile ? 32 : 56;
      const maxRadius = Math.hypot(width, height) * (0.45 + introProgress * 0.25);

      const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
      
      const palette = colors || (isDark
        ? ['rgba(168, 85, 247, 0.45)', 'rgba(56, 189, 248, 0.35)', 'rgba(232, 121, 249, 0.25)']
        : ['rgba(124, 58, 237, 0.35)', 'rgba(59, 130, 246, 0.30)', 'rgba(168, 85, 247, 0.20)']);

      const centerX = width * 0.5 + (mouseX - width * 0.5) * 0.22;
      const centerY = height * 0.45 + (mouseY - height * 0.45) * 0.22;

      for (let r = 1; r <= rings; r++) {
        const radiusProgress = r / rings;
        const baseRadius = radiusProgress * maxRadius * introProgress;
        
        ctx.strokeStyle = palette[(r - 1) % palette.length];
        ctx.lineWidth = (1 + (1 - radiusProgress) * 0.8) * (isMobile ? 0.9 : 1.0);
        ctx.beginPath();

        for (let p = 0; p <= pointsPerRing; p++) {
          const angle = (p / pointsPerRing) * Math.PI * 2;

          // Twisting vortex warp physics
          const twist = Math.sin(time * 0.8 + radiusProgress * 3.5) * (twistStrength + introTwistBoost);
          const waveA = Math.sin(angle * 4 + time * 1.5 + r * 0.3) * (18 * radiusProgress * introProgress);
          const waveB = Math.cos(angle * 3 - time * 1.2 + r * 0.2) * (14 * radiusProgress * introProgress);

          const currentAngle = angle + twist * (1 - radiusProgress * 0.5);
          const currentRadius = baseRadius + waveA + waveB;

          const x = centerX + Math.cos(currentAngle) * currentRadius;
          const y = centerY + Math.sin(currentAngle) * (currentRadius * (isMobile ? 0.72 : 0.62));

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
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [introSpeed, speed, colors, twistStrength, responsive]);

  return (
    <div
      ref={containerRef}
      className={`twist-canvas-container ${className}`}
      style={{ opacity, ...props.style }}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="twist-canvas" />
    </div>
  );
};

export default Twist;
