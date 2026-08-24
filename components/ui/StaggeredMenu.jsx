import React, { useState, useEffect, useCallback } from 'react';
import './StaggeredMenu.css';

export default function StaggeredMenu({
  position = 'right',
  items = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ],
  socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ],
  displaySocials = true,
  displayItemNumbering = true,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  colors = ['#B497CF', '#5227FF'],
  logoUrl = '',
  accentColor = '#ff6b6b',
  onMenuOpen,
  onMenuClose,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next && onMenuOpen) onMenuOpen();
      if (!next && onMenuClose) onMenuClose();
      return next;
    });
  }, [onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      if (onMenuClose) onMenuClose();
    }
  }, [isOpen, onMenuClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  return (
    <div
      className={`staggered-menu-wrapper ${position} ${isOpen ? 'menu-open' : ''} ${className}`}
      style={{
        '--accent-color': accentColor,
        '--color-curtain-1': colors[0] || '#B497CF',
        '--color-curtain-2': colors[1] || '#5227FF',
        '--btn-color': isOpen && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor
      }}
    >
      <button
        type="button"
        className="staggered-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="toggle-line line-1" />
        <span className="toggle-line line-2" />
        <span className="toggle-line line-3" />
      </button>

      <div className="staggered-curtain-layer curtain-1" />
      <div className="staggered-curtain-layer curtain-2" />

      <aside className="staggered-menu-panel" aria-hidden={!isOpen}>
        <div className="staggered-menu-inner">
          {logoUrl && (
            <div className="staggered-menu-brand">
              <img src={logoUrl} alt="Logo" className="staggered-logo" />
            </div>
          )}

          <nav className="staggered-nav-list" aria-label="Staggered Navigation">
            {items.map((item, index) => {
              const num = String(index + 1).padStart(2, '0');
              return (
                <a
                  key={item.link || index}
                  href={item.link}
                  className="staggered-nav-item"
                  aria-label={item.ariaLabel || item.label}
                  onClick={closeMenu}
                  style={{ '--item-delay': `${index * 50 + 120}ms` }}
                >
                  {displayItemNumbering && <span className="staggered-item-number">{num}</span>}
                  <span className="staggered-item-label">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {displaySocials && socialItems && socialItems.length > 0 && (
            <div
              className="staggered-social-wrap"
              style={{ '--social-delay': `${items.length * 50 + 180}ms` }}
            >
              <span className="staggered-social-title">Connect</span>
              <div className="staggered-social-links">
                {socialItems.map((s, idx) => (
                  <a
                    key={s.link || idx}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="staggered-social-link"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
