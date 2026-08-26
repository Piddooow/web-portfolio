import React, { useEffect, useRef, useState } from 'react';
import './StaggeredText.css';

export interface StaggeredTextProps {
  /** Text content to stagger animate */
  text: string;
  /** Stagger granularity: 'words' | 'letters' (Default: 'words') */
  staggerBy?: 'words' | 'letters';
  /** Delay step between elements in seconds (Default: 0.035) */
  staggerDelay?: number;
  /** Animation duration per element in seconds (Default: 0.7) */
  duration?: number;
  /** Animation direction: 'up' | 'down' | 'left' | 'right' (Default: 'up') */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Initial delay before stagger sequence starts in seconds (Default: 0.1) */
  initialDelay?: number;
  /** Trigger type: 'mount' | 'scroll' (Default: 'mount') */
  trigger?: 'mount' | 'scroll';
  /** CSS class name */
  className?: string;
  /** Custom HTML tag */
  as?: React.ElementType;
}

/**
 * StaggeredText — React Bits Pro Text Animation Component (@reactbits-starter/staggered-text-tw)
 * Docs: https://pro.reactbits.dev/docs/components/staggered-text
 * Features: Masked Overflow Baseline Slide, Soft Blur Dissolve & High-Performance CSS Transitions
 */
export const StaggeredText: React.FC<StaggeredTextProps> = ({
  text,
  staggerBy = 'words',
  staggerDelay = 0.035,
  duration = 0.7,
  direction = 'up',
  initialDelay = 0.1,
  trigger = 'mount',
  className = '',
  as: Component = 'span'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (trigger === 'mount') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, initialDelay * 1000);
      return () => clearTimeout(timer);
    } else if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );

      if (rootRef.current) {
        observer.observe(rootRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger, initialDelay]);

  // Break down into tokens
  const tokens = staggerBy === 'words' ? text.split(' ') : text.split('');

  return (
    <Component
      ref={rootRef}
      className={`staggered-text-root dir-${direction} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        '--stagger-duration': `${duration}s`
      } as React.CSSProperties}
      aria-label={text}
    >
      {tokens.map((token, index) => {
        const itemDelay = initialDelay + index * staggerDelay;
        return (
          <React.Fragment key={index}>
            <span className="staggered-text-mask">
              <span
                className="staggered-text-item"
                style={{
                  '--stagger-delay': `${itemDelay.toFixed(3)}s`
                } as React.CSSProperties}
              >
                {token === ' ' ? '\u00A0' : token}
              </span>
            </span>
            {staggerBy === 'words' && index < tokens.length - 1 && (
              <span className="staggered-text-space">&nbsp;</span>
            )}
          </React.Fragment>
        );
      })}
    </Component>
  );
};

export default StaggeredText;
