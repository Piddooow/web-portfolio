import React, { useRef, useEffect, useState, useMemo, useId } from 'react';
import './BendingMarquee.css';

/**
 * BendingMarquee — React Bits Pro Component (@reactbits-starter/bending-marquee-tw)
 * Highly polished, hardware-accelerated 3D curved marquee ribbon.
 * Continuous Mathematical Modulo Scrolling at 90+ FPS with zero jitter during scrolling.
 */
export const BendingMarquee = ({
  text: propText,
  marqueeText = "Hey Hey It's Vidd!!",
  speed = 16.0,
  bend = 60,
  curveAmount,
  depth = -200,
  perspective = 800,
  fontSize = 34,
  fontWeight = 600,
  letterSpacing = 1.0,
  separator = '*',
  bandPadding = 12,
  direction = 'left',
  interactive = false,
  className = '',
  textColor,
  bandColor,
  style = {}
}) => {
  const content = propText || marqueeText;
  const effectiveBend = curveAmount !== undefined ? curveAmount : bend;
  const isRight = direction === 'right';

  const processedText = useMemo(() => {
    const trimmed = content.trim();
    return `${trimmed}\u00A0\u00A0\u00A0${separator}\u00A0\u00A0\u00A0`;
  }, [content, separator]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);

  const uid = useId().replace(/:/g, '-');
  const pathId = `bending-curve-${uid}`;

  const baseY = 50;
  // Signature 3D bending curve
  const pathD = `M-300,${baseY} Q720,${baseY + effectiveBend} 1740,${baseY}`;

  const totalText = useMemo(() => {
    if (!spacing) return processedText;
    const repeatCount = Math.max(8, Math.ceil(3600 / spacing) + 6);
    return Array(repeatCount).fill(processedText).join('');
  }, [spacing, processedText]);

  useEffect(() => {
    const measure = () => {
      if (measureRef.current) {
        const length = measureRef.current.getComputedTextLength();
        if (length > 0) setSpacing(length);
      }
    };
    measure();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
  }, [processedText, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    if (!spacing || spacing <= 0) return;
    let frameId;
    let accumulatedDistance = 0;
    let lastTimestamp = null;

    const step = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.033);
      lastTimestamp = timestamp;

      if (textPathRef.current) {
        const pxPerSec = (speed / 16.0) * 85;
        accumulatedDistance += pxPerSec * dt;

        const normalized = ((accumulatedDistance % spacing) + spacing) % spacing;
        const currentOffset = isRight
          ? -spacing * 1.5 + normalized
          : -spacing * 1.5 - normalized;

        textPathRef.current.setAttribute('startOffset', `${currentOffset.toFixed(2)}px`);
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [spacing, isRight, speed]);

  return (
    <div
      className={`bending-marquee-container unclickable ${className}`}
      style={{
        perspective: `${perspective}px`,
        paddingTop: `${bandPadding}px`,
        paddingBottom: `${bandPadding}px`,
        backgroundColor: bandColor || 'transparent',
        ...style
      }}
      aria-hidden="true"
    >
      <div
        className="bending-marquee-3d-stage"
        style={{
          transform: `translate3d(0, 0, ${depth}px) scale(${1 - Math.abs(depth) * 0.0006})`
        }}
      >
        <svg
          className="bending-marquee-svg select-none"
          viewBox="0 0 1440 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            ref={measureRef}
            xmlSpace="preserve"
            style={{
              visibility: 'hidden',
              opacity: 0,
              pointerEvents: 'none',
              fontSize: `${fontSize}px`,
              fontWeight,
              letterSpacing: `${letterSpacing}px`
            }}
          >
            {processedText}
          </text>
          <defs>
            <path id={pathId} d={pathD} fill="none" stroke="transparent" />
          </defs>
          <text
            xmlSpace="preserve"
            className="bending-marquee-text"
            style={{
              fontSize: `${fontSize}px`,
              fontWeight,
              letterSpacing: `${letterSpacing}px`,
              fill: textColor || undefined
            }}
          >
            <textPath
              ref={textPathRef}
              className="bending-marquee-text-path"
              href={`#${pathId}`}
              startOffset="0px"
              xmlSpace="preserve"
            >
              {totalText}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default BendingMarquee;
