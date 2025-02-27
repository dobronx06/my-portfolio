import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Theme.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if theme preference is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Update data-theme attribute on document
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;