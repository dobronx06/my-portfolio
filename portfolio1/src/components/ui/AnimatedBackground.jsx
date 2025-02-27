import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!backgroundRef.current) return;
    
    const updateBlobsPosition = () => {
      const blobs = backgroundRef.current.querySelectorAll('.background-blob');
      
      blobs.forEach((blob, index) => {
        // Different sensitivity factors for each blob for parallax effect
        const factorX = index === 0 ? 30 : index === 1 ? -20 : 25;
        const factorY = index === 0 ? -30 : index === 1 ? 20 : -25;
        
        // Calculate new positions based on mouse
        const translateX = (mousePosition.x - 0.5) * factorX;
        const translateY = (mousePosition.y - 0.5) * factorY;
        
        // Apply the transformation
        blob.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    updateBlobsPosition();
  }, [mousePosition]);

  return (
    <div 
      className={`animated-background ${isDarkMode ? 'dark-mode' : ''} ${isScrolling ? 'blur' : ''}`}
      ref={backgroundRef}
    >
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      <div className="background-grid"></div>
      <div className="noise-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;