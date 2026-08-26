import React, { useRef, useState, useCallback, useEffect } from 'react';
import './TextScatter.css';

export interface TextScatterProps extends React.HTMLAttributes<HTMLElement> {
  /** Text content to scatter */
  text?: string;
  /** Radius of influence around cursor in px (Default: 120) */
  scatterRadius?: number;
  /** Maximum repulsion force in px (Default: 45) */
  scatterForce?: number;
  /** Alias for scatterForce */
  velocity?: number;
  /** Maximum character rotation in degrees (Default: 35) */
  rotationRange?: number;
  /** Alias for rotationRange */
  rotation?: number;
  /** Spring return animation duration in ms (Default: 800) */
  springDuration?: number;
  /** Alias for springDuration in seconds or ms */
  duration?: number;
  /** Delay before returning to rest in seconds (Default: 2.0) */
  returnDelay?: number;
  /** Alias for returnDelay */
  returnAfter?: number;
  /** If true, returns immediately on pointer leave without 2s delay */
  immediateReturn?: boolean;
  /** Scale factor during scatter (Default: 1.05) */
  scale?: number;
  /** CSS class name for container */
  className?: string;
  /** CSS class name for each letter */
  letterClassName?: string;
  /** HTML tag name (Default: 'span') */
  as?: React.ElementType;
}

/**
 * TextScatter — React Bits Pro Interactive Typography Component (@reactbits-starter/text-scatter-tw)
 * Docs: https://pro.reactbits.dev/docs/components/text-scatter
 * Features: 90+ FPS Vector Physics, Immediate Return on Hero Heading, 2.0s Hold Delay on Badges, Touch Support
 */
export const TextScatter: React.FC<TextScatterProps> = ({
  text = "Who's Vidd?",
  scatterRadius = 120,
  scatterForce,
  velocity = 45,
  rotationRange,
  rotation = 35,
  springDuration,
  duration = 0.8,
  returnDelay = 2.0,
  returnAfter,
  immediateReturn = false,
  scale = 1.05,
  className = '',
  letterClassName = '',
  as: Component = 'span',
  children,
  ...props
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const cachedCentersRef = useRef<{ centerX: number; centerY: number }[]>([]);
  const isInteractingRef = useRef<boolean>(false);

  const isHeroHeading = immediateReturn ||
                        className.includes('text-scatter-hero-heading') ||
                        className.includes('text-scatter-giant');

  const effectiveForce = scatterForce ?? velocity;
  const effectiveRotation = rotationRange ?? rotation;
  const effectiveDelay = returnAfter ?? returnDelay;
  const effectiveDuration = springDuration ?? (duration <= 10 ? duration * 1000 : duration);

  const contentText = (typeof children === 'string' ? children : text) || "Who's Vidd?";
  const characters = contentText.split('');

  const updateCachedCenters = useCallback(() => {
    cachedCentersRef.current = letterRefs.current.map((el) => {
      if (!el) return { centerX: 0, centerY: 0 };
      const rect = el.getBoundingClientRect();
      return {
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2
      };
    });
  }, []);

  const returnToRest = useCallback(() => {
    if (isInteractingRef.current) return;
    letterRefs.current.forEach((letterEl) => {
      if (!letterEl) return;
      letterEl.style.transition = `transform ${effectiveDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      letterEl.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
      letterEl.dataset.isScattered = 'false';
    });
  }, [effectiveDuration]);

  const cancelPendingReset = useCallback(() => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  const scheduleReset = useCallback(() => {
    cancelPendingReset();
    if (isHeroHeading) {
      // Langsung kembali secara smooth & elegan
      returnToRest();
    } else {
      // Pertahankan posisi statis selama 2.0 detik penuh
      const delayMs = Math.max(effectiveDelay * 1000, 2000);
      resetTimerRef.current = setTimeout(() => {
        returnToRest();
        resetTimerRef.current = null;
      }, delayMs);
    }
  }, [cancelPendingReset, effectiveDelay, isHeroHeading, returnToRest]);

  const handlePointerStart = useCallback((clientX: number, clientY: number) => {
    isInteractingRef.current = true;
    cancelPendingReset();
    updateCachedCenters();
  }, [cancelPendingReset, updateCachedCenters]);

  const handlePointerMoveCoords = useCallback(
    (clientX: number, clientY: number) => {
      isInteractingRef.current = true;
      cancelPendingReset();

      if (!cachedCentersRef.current.length) {
        updateCachedCenters();
      }

      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

      rafIdRef.current = requestAnimationFrame(() => {
        letterRefs.current.forEach((letterEl, index) => {
          if (!letterEl) return;
          const center = cachedCentersRef.current[index];
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

            letterEl.style.transition = 'transform 0.06s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            letterEl.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${charScale.toFixed(3)})`;
            letterEl.dataset.isScattered = 'true';
          }
        });
      });
    },
    [cancelPendingReset, effectiveForce, effectiveRotation, scale, scatterRadius, updateCachedCenters]
  );

  const handlePointerEnd = useCallback(() => {
    isInteractingRef.current = false;
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    scheduleReset();
  }, [scheduleReset]);

  useEffect(() => {
    window.addEventListener('resize', updateCachedCenters, { passive: true });
    return () => {
      window.removeEventListener('resize', updateCachedCenters);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [updateCachedCenters]);

  return (
    <Component
      ref={containerRef}
      className={`text-scatter-container ${className}`}
      onMouseEnter={(e: React.MouseEvent) => handlePointerStart(e.clientX, e.clientY)}
      onMouseMove={(e: React.MouseEvent) => handlePointerMoveCoords(e.clientX, e.clientY)}
      onMouseLeave={handlePointerEnd}
      onTouchStart={(e: React.TouchEvent) => {
        if (e.touches && e.touches[0]) handlePointerStart(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onTouchMove={(e: React.TouchEvent) => {
        if (e.touches && e.touches[0]) handlePointerMoveCoords(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onTouchEnd={handlePointerEnd}
      onTouchCancel={handlePointerEnd}
      aria-label={contentText}
      {...props}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            letterRefs.current[index] = el;
          }}
          className={`text-scatter-char ${letterClassName}`}
          aria-hidden="true"
          data-char-index={index}
          data-is-scattered="false"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};

export default TextScatter;
