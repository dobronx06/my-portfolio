import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <span className="logo-text">TB</span>
            </Link>
            <p className="footer-tagline">Tom Bouchard</p>
            <div className="footer-social">
              <a 
                href="https://github.com/tombouchard" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/tombouchard" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@tombouchard.com" 
                aria-label="Email"
                className="social-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-nav">
            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Navigation</h3>
              <ul className="footer-nav-list">
                <li><Link to="/" className="footer-nav-link">{t('nav.home')}</Link></li>
                <li><Link to="/about" className="footer-nav-link">{t('nav.about')}</Link></li>
                <li><Link to="/projects" className="footer-nav-link">{t('nav.projects')}</Link></li>
                <li><Link to="/contact" className="footer-nav-link">{t('nav.contact')}</Link></li>
              </ul>
            </div>
            
            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Contact</h3>
              <ul className="footer-nav-list">
                <li><a href="mailto:contact@tombouchard.com" className="footer-nav-link">contact@tombouchard.com</a></li>
                <li><a href="tel:+33600000000" className="footer-nav-link">+33 6 00 00 00 00</a></li>
                <li><a href="https://github.com/tombouchard" target="_blank" rel="noopener noreferrer" className="footer-nav-link">GitHub</a></li>
                <li><a href="https://linkedin.com/in/tombouchard" target="_blank" rel="noopener noreferrer" className="footer-nav-link">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">{t('footer.copyright')}</p>
          <p className="footer-made-with">{t('footer.madeWith')}</p>
          <button 
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;