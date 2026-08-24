import React from 'react';
import './ShinyText.css';

export default function ShinyText({
  text = '',
  speed = 2,
  delay = 0,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
  className = '',
  children
}) {
  const content = text || children;

  return (
    <span
      className={`shiny-text ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`}
      style={{
        '--shiny-speed': `${speed}s`,
        '--shiny-delay': `${delay}s`,
        '--shiny-base-color': color,
        '--shiny-shine-color': shineColor,
        '--shiny-spread': `${spread}px`,
        '--shiny-direction': direction === 'right' ? 'reverse' : 'normal',
        '--shiny-yoyo': yoyo ? 'alternate' : 'normal'
      }}
    >
      {content}
    </span>
  );
}
