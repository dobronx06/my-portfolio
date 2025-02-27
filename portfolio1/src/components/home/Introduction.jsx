import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Palette, Zap } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Introduction.css';

const Introduction = () => {
  const { t } = useLanguage();
  
  const [card1Ref, card1Visible] = useIntersectionObserver({ threshold: 0.2 });
  const [card2Ref, card2Visible] = useIntersectionObserver({ threshold: 0.2 });
  const [card3Ref, card3Visible] = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <div className="container">
      <div className="introduction">
        <div className="introduction-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
          
          <div className="introduction-text">
            {t('about.description').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <Link to="/about" className="button button-primary button-hover-effect">
            {t('nav.about')}
            <ChevronRight size={18} className="button-icon" />
          </Link>
        </div>
        
        <div className="skill-cards">
          <div 
            ref={card1Ref} 
            className={`skill-card stagger-item ${card1Visible ? 'is-visible' : ''}`}
          >
            <div className="skill-card-icon">
              <Code size={24} />
            </div>
            <h3 className="skill-card-title">Frontend Development</h3>
            <p className="skill-card-description">
              I create responsive web applications with modern technologies like React, ensuring a seamless user experience.
            </p>
            <div className="skill-card-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">HTML5</span>
            </div>
          </div>
          
          <div 
            ref={card2Ref} 
            className={`skill-card stagger-item ${card2Visible ? 'is-visible' : ''}`}
          >
            <div className="skill-card-icon">
              <Palette size={24} />
            </div>
            <h3 className="skill-card-title">UI/UX Design</h3>
            <p className="skill-card-description">
              I design intuitive and aesthetically pleasing interfaces with a focus on user experience and accessibility.
            </p>
            <div className="skill-card-tags">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">Animation</span>
            </div>
          </div>
          
          <div 
            ref={card3Ref} 
            className={`skill-card stagger-item ${card3Visible ? 'is-visible' : ''}`}
          >
            <div className="skill-card-icon">
              <Zap size={24} />
            </div>
            <h3 className="skill-card-title">Performance Optimization</h3>
            <p className="skill-card-description">
              I optimize web applications for speed and efficiency, ensuring a smooth experience for all users.
            </p>
            <div className="skill-card-tags">
              <span className="skill-tag">Lighthouse</span>
              <span className="skill-tag">Lazy Loading</span>
              <span className="skill-tag">Code Splitting</span>
              <span className="skill-tag">SEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;