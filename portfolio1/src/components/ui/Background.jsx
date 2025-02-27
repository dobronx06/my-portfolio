import React from 'react';
import { useBackground, BACKGROUNDS } from '../../context/backgroundSelector';
import InteractiveBackground from './AnimatedBackground';
import GridInteractiveBackground from './FluidBackground';
import WaveBackground from './WaveBackground';

const Background = () => {
  const { backgroundType } = useBackground();
  
  // Render the currently selected background
  const renderBackground = () => {
    switch (backgroundType) {
      case BACKGROUNDS.GRID:
        return <GridInteractiveBackground />;
      case BACKGROUNDS.WAVES:
        return <WaveBackground />;
      case BACKGROUNDS.PARTICLES:
      default:
        return <InteractiveBackground />;
    }
  };
  
  return renderBackground();
};

export default Background;