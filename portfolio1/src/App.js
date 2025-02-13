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
    // Check if user has visited before
    return !localStorage.getItem('hasVisited');
  });

  const handleEnter = () => {
    setShowWelcome(false);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <Router>
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
          <Route path='/contact' element={showWelcome ? <Navigate to="/welcome" replace /> : <Contact />} />
          <Route path='/about' element={showWelcome ? <Navigate to="/welcome" replace /> : <About />} />
          <Route path='/resume' element={showWelcome ? <Navigate to="/welcome" replace /> : <Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;