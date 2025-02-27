import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const titleRef = useRef(null);
  
  const text = t('hero.subtitle');
  
  useEffect(() => {
    // Animate entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!isLoaded) return;
    
    let currentIndex = 0;
    let typingInterval;
    
    // Start typing animation after entrance animation
    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setTypedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          
          // Start blinking cursor after typing
          let cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
          }, 500);
          
          return () => clearInterval(cursorInterval);
        }
      }, 50);
    };
    
    const timer = setTimeout(startTyping, 800);
    
    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [isLoaded, text]);
  
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero-text">
            <h4 className="hero-greeting">{t('hero.greeting')}</h4>
            <h1 className="hero-name">{t('hero.name')}</h1>
            <h2 className="hero-title">{t('hero.title')}</h2>
            <div className="hero-subtitle-container">
              <p className="hero-subtitle" ref={titleRef}>
                {typedText}
                <span className={`cursor ${showCursor ? 'active' : ''}`}></span>
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/projects" className="button button-primary button-hover-effect">
                {t('hero.cta')}
                <ChevronRight size={18} className="button-icon" />
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              {/* Placeholder for profile image */}
              <div className="profile-placeholder"></div>
            </div>
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span className="scroll-indicator-text">{t('hero.scrollDown')}</span>
          <div className="scroll-indicator-line">
            <ArrowDown size={20} className="scroll-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;