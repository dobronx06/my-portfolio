import React, { createContext, useState, useEffect } from 'react';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

export const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  fr: frTranslations
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || navigator.language.split('-')[0] || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const switchLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = key => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (!value[k]) return key;
      value = value[k];
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};