import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../hooks/useTheme';
import './Layout.css';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`layout ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;