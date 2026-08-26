import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './Preloader.css';

const DEFAULT_WORDS = [
  'SYSTEMS ARCHITECTURE',
  'OPERATIONS & STRATEGY',
  'UI/UX & WEB ENGINEERING',
  'WELCOME TO VIDD'
];

/**
 * Preloader — React Bits Pro Animated Loading Screen Component (@reactbits-starter/preloader-tw)
 * Unskippable Full-Screen Stairs Cascade Entrance Reveal
 */
export const Preloader = ({
  brandName = 'VIDD',
  words = DEFAULT_WORDS,
  subtitle,
  logoSrc = 'src/assets/images/spider-icon.png',
  duration = 1600,
  variant = 'stairs',
  stairCount = 5,
  stairsRevealFrom = 'left',
  onLoadingComplete,
  onComplete,
  bgColor,
  accentColor,
  zIndex = 999999
}) => {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ARCHITECTURE');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Calculate stairs indices based on reveal direction
  const stairsIndices = useMemo(() => {
    return Array.from({ length: stairCount }, (_, i) => {
      if (stairsRevealFrom === 'right') {
        return stairCount - 1 - i;
      }
      if (stairsRevealFrom === 'center') {
        const mid = Math.floor(stairCount / 2);
        return Math.abs(mid - i);
      }
      return i;
    });
  }, [stairCount, stairsRevealFrom]);

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setPercent(100);
    setStatusText('READY');

    if (onLoadingComplete) onLoadingComplete();

    setTimeout(() => {
      setIsHidden(true);
      if (onComplete) onComplete();
    }, 750);
  }, [isExiting, onComplete, onLoadingComplete]);

  // Dynamic Word Cycle interval
  useEffect(() => {
    if (!words || words.length === 0) return;
    const intervalTime = Math.max(duration / words.length, 280);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [words, duration]);

  // Main animation frame tick (unskippable, must wait until completion)
  useEffect(() => {
    const startTime = performance.now();

    const frame = (now) => {
      if (isExiting) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);

      // Smooth cubic easeInOut curve
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentPercent = Math.min(Math.round(eased * 100), 100);
      setPercent(currentPercent);

      if (currentPercent < 30) {
        setStatusText('INITIALIZING ARCHITECTURE');
      } else if (currentPercent < 65) {
        setStatusText('LOADING DESIGN TOKENS');
      } else if (currentPercent < 98) {
        setStatusText('PREPARING ENVIRONMENT');
      } else {
        setStatusText('READY');
      }

      if (progress >= 1.0) {
        handleFinish();
      } else {
        requestAnimationFrame(frame);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [duration, handleFinish, isExiting]);

  if (isHidden) return null;

  return (
    <div
      className={`preloader-root preloader-${variant} ${isExiting ? 'is-exiting' : ''}`}
      style={{
        '--preloader-bg': bgColor,
        '--preloader-accent': accentColor,
        zIndex
      }}
      role="dialog"
      aria-label="Loading site"
    >
      {/* Stairs Variant Columns */}
      {variant === 'stairs' && (
        <div className="preloader-stairs-container">
          {stairsIndices.map((stairDelayIndex, idx) => (
            <div
              key={idx}
              className="preloader-stair-col"
              style={{ '--stair-index': stairDelayIndex }}
            />
          ))}
        </div>
      )}

      {/* Curtain Variant Panels */}
      {variant === 'curtain' && (
        <>
          <div className="preloader-curtain preloader-curtain-top" />
          <div className="preloader-curtain preloader-curtain-bottom" />
        </>
      )}

      {/* Slide / Percentage / Fallback Background */}
      {variant !== 'stairs' && variant !== 'curtain' && (
        <div className="preloader-stair-col" style={{ width: '100%', '--stair-index': 0 }} />
      )}

      <div className="preloader-glow-orb" />

      <div className="preloader-content">
        {logoSrc && (
          <div className="preloader-badge">
            <img src={logoSrc} alt={brandName} />
          </div>
        )}

        <div className="preloader-titles">
          <h1 className="preloader-brand-title">{brandName}</h1>
          <p className="preloader-word-cycle">
            {words && words.length > 0 ? words[currentWordIndex] : subtitle}
          </p>
        </div>

        <div className="preloader-bar-track">
          <div
            className="preloader-bar-indicator"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="preloader-info-row">
          <span className="preloader-status-text">{statusText}</span>
          <span className="preloader-counter-digits">
            {percent.toString().padStart(2, '0')}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
