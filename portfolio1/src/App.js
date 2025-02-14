import './App.css';
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import NetworkAnimation from './components/Background/particleEffect.js';
import ThemeToggle from './components/Theme/Theme.js';
import WelcomePage from './components/pages/Welcome.js';

function App() {
  const [showWelcome, setShowWelcome] = useState(() => {
    return !localStorage.getItem('hasVisited');
  });

  const handleEnter = () => {
    setShowWelcome(false);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <HashRouter>
      <div className="App">
        <div className="background-container">
          <NetworkAnimation />
        </div>
        <ThemeToggle />
        
        <Routes>
          <Route 
            path="/welcome" 
            element={showWelcome ? <WelcomePage onEnter={handleEnter} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/" 
            element={showWelcome ? <Navigate to="/welcome" /> : <Home />} 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/resume" 
            element={<Resume />} 
          />
          <Route 
            path="*" 
            element={<Navigate to="/" />} 
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;