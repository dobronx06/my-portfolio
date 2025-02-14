import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

  // Définir le basename pour GitHub Pages
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      <div className="App">
        <div className="background-container">
          <NetworkAnimation />
        </div>
        <ThemeToggle />
        
        <Routes>
          {/* Welcome page route */}
          <Route 
            path="/welcome" 
            element={
              showWelcome ? (
                <WelcomePage onEnter={handleEnter} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />

          {/* Other routes */}
          <Route path='/' element={showWelcome ? <Navigate to="/welcome" replace /> : <Home />} />
          <Route path='/mycontact' element={showWelcome ? <Navigate to="/welcome" replace /> : <Contact />} />
          <Route path='/about' element={showWelcome ? <Navigate to="/welcome" replace /> : <About />} />
          <Route path='/resume' element={showWelcome ? <Navigate to="/welcome" replace /> : <Resume />} />

          {/* Catch all route for 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;