import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import './ThemeToggle.css';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button 
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? t('theme.light') : t('theme.dark')}
      title={isDarkMode ? t('theme.light') : t('theme.dark')}
    >
      <div className="toggle-icon-wrapper">
        <Sun className={`toggle-icon sun ${isDarkMode ? 'hidden' : ''}`} size={20} />
        <Moon className={`toggle-icon moon ${isDarkMode ? '' : 'hidden'}`} size={20} />
      </div>
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;