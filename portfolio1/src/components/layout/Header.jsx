import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, switchLanguage, language } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" aria-label="Tom Bouchard - Accueil">
          <span className="logo-text">TB</span>
        </Link>

        <nav className={`nav-desktop ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                {t('nav.home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                {t('nav.about')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects" 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                {t('nav.projects')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? t('theme.light') : t('theme.dark')}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="language-toggle"
            onClick={switchLanguage}
            aria-label={language === 'fr' ? t('language.en') : t('language.fr')}
          >
            <Globe size={20} />
            <span className="language-code">{language.toUpperCase()}</span>
          </button>
          
          <Link to="/about" className="resume-button">
            <Download size={18} />
            <span className="resume-text">{t('about.downloadResume')}</span>
          </Link>
          
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
        <nav className="nav-mobile-content">
          <ul className="nav-mobile-list">
            <li className="nav-mobile-item">
              <Link to="/" className="nav-mobile-link" onClick={closeMenu}>
                {t('nav.home')}
              </Link>
            </li>
            <li className="nav-mobile-item">
              <Link to="/about" className="nav-mobile-link" onClick={closeMenu}>
                {t('nav.about')}
              </Link>
            </li>
            <li className="nav-mobile-item">
              <Link to="/projects" className="nav-mobile-link" onClick={closeMenu}>
                {t('nav.projects')}
              </Link>
            </li>
            <li className="nav-mobile-item">
              <Link to="/contact" className="nav-mobile-link" onClick={closeMenu}>
                {t('nav.contact')}
              </Link>
            </li>
          </ul>

          <div className="mobile-actions">
            <button 
              className="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? t('theme.light') : t('theme.dark')}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDarkMode ? t('theme.light') : t('theme.dark')}</span>
            </button>
            
            <button 
              className="mobile-language-toggle"
              onClick={switchLanguage}
              aria-label={language === 'fr' ? t('language.en') : t('language.fr')}
            >
              <Globe size={20} />
              <span>{language === 'fr' ? t('language.en') : t('language.fr')}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;