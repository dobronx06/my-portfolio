import React, { createContext, useState, useContext } from 'react';

// Create context
const BackgroundContext = createContext();

// Background options
export const BACKGROUNDS = {
  PARTICLES: 'particles',
  GRID: 'grid',
  WAVES: 'waves'
};

// Provider component
export const BackgroundProvider = ({ children }) => {
  const [backgroundType, setBackgroundType] = useState(BACKGROUNDS.PARTICLES);
  
  const changeBackground = (type) => {
    if (Object.values(BACKGROUNDS).includes(type)) {
      setBackgroundType(type);
    }
  };
  
  return (
    <BackgroundContext.Provider value={{ backgroundType, changeBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Custom hook to use the background context
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};