import React from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../ui/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './AboutMe.css';

const AboutMe = () => {
  const { t } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  // Placeholder data for profile info
  const profileInfo = {
    name: 'Tom Bouchard',
    role: t('hero.title'),
    location: 'Paris, France',
    email: 'contact@tombouchard.com',
    phone: '+33 6 00 00 00 00',
    languages: ['Français (natif)', 'Anglais (courant)'],
    hobbies: ['Photographie', 'Randonnée', 'Lecture', 'Musique']
  };
  
  return (
    <div 
      ref={ref}
      className={`about-me-container animate-on-view ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="about-me-header">
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="section-subtitle">{t('about.subtitle')}</p>
      </div>
      
      <div className="about-me-content">
        <div className="about-me-image-container">
          <div className="about-me-image">
            {/* Placeholder for profile image */}
            <div className="profile-image-placeholder"></div>
          </div>
          
          <div className="about-me-info">
            <h3 className="info-name">{profileInfo.name}</h3>
            <p className="info-role">{profileInfo.role}</p>
            
            <ul className="info-list">
              <li className="info-item">
                <span className="info-label">{t('common.location')}:</span>
                <span className="info-value">{profileInfo.location}</span>
              </li>
              <li className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">
                  <a href={`mailto:${profileInfo.email}`} className="info-link">
                    {profileInfo.email}
                  </a>
                </span>
              </li>
              <li className="info-item">
                <span className="info-label">{t('common.phone')}:</span>
                <span className="info-value">
                  <a href={`tel:${profileInfo.phone}`} className="info-link">
                    {profileInfo.phone}
                  </a>
                </span>
              </li>
              <li className="info-item">
                <span className="info-label">{t('about.languages')}:</span>
                <span className="info-value">{profileInfo.languages.join(', ')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="about-me-description">
          <div className="description-content">
            {t('about.description').map((paragraph, index) => (
              <p key={index} className="description-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="about-me-interests">
            <h3 className="interests-title">{t('about.interests')}</h3>
            <div className="interests-list">
              {profileInfo.hobbies.map((hobby, index) => (
                <span key={index} className="interest-tag">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
          
          <div className="resume-download">
            <Button 
              href="/assets/Tom_Bouchard_CV.pdf" 
              download 
              variant="primary"
              icon={<Download size={18} />}
            >
              {t('about.downloadResume')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;