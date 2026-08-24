import React, { useEffect, useRef, useState } from 'react';
import './UserCursor.css';

export interface UserCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  className?: string;
}

/**
 * UserCursor — React Bits Pro Real-Time Multiplayer User Cursor
 * Instantaneous, zero-delay cursor tracking replacing default OS cursor.
 */
export const UserCursor: React.FC<UserCursorProps> = ({
  name = 'Memey Cintakuu',
  className = '',
  ...props
}) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, select, [role="button"], .interactive, .card-action-btn, .deck-nav-btn')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`user-cursor-container ${isVisible ? 'visible' : ''} ${isPointer ? 'is-pointer' : ''} ${className}`}
      aria-hidden="true"
      {...props}
    >
      <svg
        className="user-cursor-pointer"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0V16.8L4.6 12.3L11.8 12.3L0 0Z"
          className="user-cursor-svg-path"
        />
      </svg>
      <div className="user-cursor-badge">
        <span className="user-cursor-name">{name}</span>
      </div>
    </div>
  );
};

export default UserCursor;
