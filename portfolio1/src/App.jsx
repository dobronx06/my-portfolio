import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { BackgroundProvider } from './context/backgroundSelector';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CustomCursor from './components/ui/CustomCursor';
import Background from './components/ui/Background';
import BackgroundControl from './components/ui/BackgroundControl';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BackgroundProvider>
          <Router>
            <CustomCursor />
            <Background />
            <BackgroundControl />
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Layout>
          </Router>
        </BackgroundProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;