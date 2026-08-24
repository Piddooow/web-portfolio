import React, { useRef, useEffect, useCallback, ReactNode } from 'react';
import './ClickSpark.css';

export interface ClickSparkProps extends React.HTMLAttributes<HTMLDivElement> {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
  fps?: number;
  children?: ReactNode;
  className?: string;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  color: string;
  startTime: number;
}

/**
 * ClickSpark — React Bits Pro Interactive Particle Burst Component
 * Monochromatic Black & White theme adaptation with 18fps quantization.
 */
export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = 'theme',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  extraScale = 1.0,
  fps = 60,
  children,
  className = '',
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastFrameTime = 0;
    const frameInterval = 1000 / fps;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
      canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = (timestamp: number) => {
      if (timestamp - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const distance = easeOut * sparkRadius * extraScale;
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

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale, fps]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const now = performance.now();
      const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
      const color = sparkColor === 'theme' ? (isDark ? '#ffffff' : '#09090b') : sparkColor;

      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        color,
        startTime: now
      }));

      sparksRef.current.push(...newSparks);
    },
    [sparkCount, sparkColor]
  );

  return (
    <div
      className={`click-spark-wrapper ${className}`}
      onClick={handleClick}
      style={{ position: 'relative', width: '100%', height: '100%' }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="click-spark-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;
