import { useState, useEffect } from 'react';

export const useCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Function to update cursor position
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Function to handle cursor visibility
    const handleMouseOut = () => {
      setIsHidden(true);
    };
    
    const handleMouseOver = () => {
      setIsHidden(false);
    };
    
    // Handle mouse click
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };
    
    // Add hover effects to all interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };
    
    // Initial setup
    addHoverListeners();
    
    // Handle dynamically added elements with a MutationObserver
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          addHoverListeners();
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return { position, isHovering, isHidden, isClicking };
};