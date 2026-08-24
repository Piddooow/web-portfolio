import React, { useRef, useEffect } from 'react';
import './ScrollReveal.css';

export default function ScrollReveal({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 5,
  blurStrength = 10,
  className = ''
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.scroll-reveal-word');

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      const start = windowHeight * 0.88;
      const end = windowHeight * 0.25;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

      words.forEach((word, idx) => {
        const wordProgress = Math.max(0, Math.min(1, (progress - (idx / words.length) * 0.7) / 0.3));
        const opacity = baseOpacity + (1 - baseOpacity) * wordProgress;
        const blur = enableBlur ? (1 - wordProgress) * blurStrength : 0;
        const rotation = (1 - wordProgress) * baseRotation;
        const translateY = (1 - wordProgress) * 12;

        word.style.opacity = opacity.toFixed(2);
        word.style.filter = enableBlur ? `blur(${blur.toFixed(1)}px)` : 'none';
        word.style.transform = `translateY(${translateY.toFixed(1)}px) rotate(${rotation.toFixed(1)}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [baseOpacity, enableBlur, baseRotation, blurStrength]);

  const text = typeof children === 'string' ? children : '';
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="scroll-reveal-word">
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
}
