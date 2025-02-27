import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './ContactPreview.css';

const ContactPreview = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container">
      <div className="contact-preview">
        <div className="contact-preview-content">
          <h2 className="contact-preview-title">{t('contact.title')}</h2>
          <p className="contact-preview-subtitle">{t('contact.subtitle')}</p>
          
          <div className="contact-preview-actions">
            <Link to="/contact" className="button button-primary button-hover-effect">
              {t('nav.contact')}
              <ChevronRight size={18} className="button-icon" />
            </Link>
            
            <a 
              href="mailto:contact@tombouchard.com" 
              className="button button-secondary"
            >
              <Mail size={18} />
              <span>contact@tombouchard.com</span>
            </a>
          </div>
          
          <div className="contact-preview-divider">
            <span className="divider-line"></span>
            <span className="divider-text">{t('contact.or')}</span>
            <span className="divider-line"></span>
          </div>
          
          <div className="contact-preview-social">
            <p className="social-text">{t('contact.findMe')}</p>
            <div className="social-links">
              <a 
                href="https://github.com/tombouchard" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-item"
                aria-label="GitHub"
              >
                <Github size={24} />
                <span>GitHub</span>
                <ExternalLink size={14} className="external-icon" />
              </a>
              
              <a 
                href="https://linkedin.com/in/tombouchard" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-item"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
                <ExternalLink size={14} className="external-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPreview;