"use client";

import React, { useState, useRef, useEffect } from "react";

interface RandomLetterSwapProps {
  label: string;
  className?: string;
  staggerDuration?: number;
  charset?: string;
  fps?: number;
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function RandomLetterSwap({
  label,
  className = "",
  charset = DEFAULT_CHARS,
  fps = 20, // Exact 20fps
}: RandomLetterSwapProps) {
  const [displayText, setDisplayText] = useState(label);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const fpsInterval = 1000 / fps; // 50ms at 20fps

  const startScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    const length = label.length;
    const stepIncrement = Math.max(0.65, length / 6); // Controlled ~300ms duration at 20fps

    intervalRef.current = setInterval(() => {
      setDisplayText(
        label
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return label[index]; // Resolved original letter
            }
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join("")
      );

      if (iteration >= length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(label); // Guaranteed 100% original text
        intervalRef.current = null;
      }

      iteration += stepIncrement;
    }, fpsInterval);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayText(label); // Instantly restore exact original text
  };

  useEffect(() => {
    setDisplayText(label);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [label]);

  return (
    <span
      className={`inline-block select-none cursor-pointer transition-colors duration-200 ${className}`}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
    >
      {displayText}
    </span>
  );
}

export default RandomLetterSwap;
