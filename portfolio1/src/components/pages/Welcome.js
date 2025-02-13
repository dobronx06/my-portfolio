import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Welcome.css';

const WelcomePage = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [typedText, setTypedText] = useState('');
  const textToType = "Welcome to my Portfolio";
  const navigate = useNavigate();
  
  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < textToType.length) {
        setTypedText(prev => prev + textToType.charAt(index));
        index++;
        setTimeout(typeText, 100);
      }
    };
    
    setTimeout(typeText, 500);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    onEnter();
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className={`welcome-container ${isExiting ? 'exit' : ''}`}>
      <div className="welcome-content">
        <h1 className="welcome-title">
          <span className="typed-text">{typedText}</span>
          <span className="cursor"></span>
        </h1>
        
        <p className="welcome-description">
          Frontend Developer & Creative Coder
        </p>
        
        <button 
          className="enter-button"
          onClick={handleEnter}
          style={{ 
            opacity: typedText.length === textToType.length ? 0 : 1,
            transform: typedText.length === textToType.length ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Enter
          <ArrowRight className="arrow-icon" />
        </button>
      </div>
      
      <div className="background-animation">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;