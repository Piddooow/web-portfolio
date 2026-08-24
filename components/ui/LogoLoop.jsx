import React from 'react';
import './LogoLoop.css';

export default function LogoLoop({
  logos = [],
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor,
  ariaLabel = 'Technology partners and tools',
  className = ''
}) {
  const isVertical = direction === 'up' || direction === 'down';
  const duration = Math.max(10, 1000 / (speed || 60));

  return (
    <div
      className={`logo-loop-container ${isVertical ? 'vertical' : 'horizontal'} ${
        fadeOut ? 'has-fade' : ''
      } ${className}`}
      style={{
        '--logo-height': `${logoHeight}px`,
        '--logo-gap': `${gap}px`,
        '--loop-duration': `${duration}s`,
        '--fade-color': fadeOutColor || 'var(--bg-primary, #0d0c11)'
      }}
      aria-label={ariaLabel}
    >
      <div className={`logo-loop-track ${direction} ${scaleOnHover ? 'scale-on-hover' : ''}`}>
        <div className="logo-loop-group">
          {logos.map((logo, idx) => (
            <div key={`logo-1-${idx}`} className="logo-loop-item">
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={logo.title || logo.alt}
                  className="logo-loop-link"
                >
                  {logo.node ? (
                    logo.node
                  ) : (
                    <img src={logo.src} alt={logo.alt || 'logo'} className="logo-loop-img" />
                  )}
                  {logo.title && <span className="logo-loop-title">{logo.title}</span>}
                </a>
              ) : (
                <div className="logo-loop-content">
                  {logo.node ? (
                    logo.node
                  ) : (
                    <img src={logo.src} alt={logo.alt || 'logo'} className="logo-loop-img" />
                  )}
                  {logo.title && <span className="logo-loop-title">{logo.title}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="logo-loop-group" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div key={`logo-2-${idx}`} className="logo-loop-item">
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  className="logo-loop-link"
                >
                  {logo.node ? (
                    logo.node
                  ) : (
                    <img src={logo.src} alt={logo.alt || 'logo'} className="logo-loop-img" />
                  )}
                  {logo.title && <span className="logo-loop-title">{logo.title}</span>}
                </a>
              ) : (
                <div className="logo-loop-content">
                  {logo.node ? (
                    logo.node
                  ) : (
                    <img src={logo.src} alt={logo.alt || 'logo'} className="logo-loop-img" />
                  )}
                  {logo.title && <span className="logo-loop-title">{logo.title}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
