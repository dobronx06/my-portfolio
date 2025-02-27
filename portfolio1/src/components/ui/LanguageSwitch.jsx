import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './LanguageSwitch.css';

const LanguageSwitch = ({ className = '' }) => {
  const { language, switchLanguage, t } = useLanguage();

  return (
    <button 
      className={`language-switch ${className}`}
      onClick={switchLanguage}
      aria-label={language === 'fr' ? t('language.en') : t('language.fr')}
      title={language === 'fr' ? t('language.en') : t('language.fr')}
    >
      <Globe size={18} className="language-icon" />
      <span className="language-code">{language.toUpperCase()}</span>
      <div className="language-options">
        <span className={`language-option ${language === 'fr' ? 'active' : ''}`}>FR</span>
        <span className="language-separator">/</span>
        <span className={`language-option ${language === 'en' ? 'active' : ''}`}>EN</span>
      </div>
    </button>
  );
};

export default LanguageSwitch;