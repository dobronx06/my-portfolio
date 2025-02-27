import React, { useRef, useEffect } from 'react';
import { useCursor } from '../../hooks/useCursor';
import { useTheme } from '../../hooks/useTheme';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const { position, isHovering, isHidden, isClicking } = useCursor();
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    if (!cursor) return;
    
    // Use requestAnimationFrame for smoother animation
    const moveCursor = () => {
      const { x, y } = position;
      
      // Apply different animation speed for outer cursor (delayed effect)
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      
    };
    
    requestAnimationFrame(moveCursor);
  }, [position]);
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className={`
          custom-cursor 
          ${isHovering ? 'hovering' : ''} 
          ${isHidden ? 'hidden' : ''} 
          ${isClicking ? 'clicking' : ''}
          ${isDarkMode ? 'dark-mode' : 'light-mode'}
        `}
      />
    </>
  );
};

export default CustomCursor;