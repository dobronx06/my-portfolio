import React from 'react';
import { Layers, Grid, Waves } from 'lucide-react';
import { useBackground, BACKGROUNDS } from '../../context/backgroundSelector';
import { useLanguage } from '../../hooks/useLanguage';
import './BackgroundControl.css';

const BackgroundControl = () => {
  const { backgroundType, changeBackground } = useBackground();
  const { t } = useLanguage();
  
  const backgroundOptions = [
    {
      type: BACKGROUNDS.PARTICLES,
      icon: <Layers size={18} />,
      label: t('background.particles') || 'Particles'
    },
    {
      type: BACKGROUNDS.GRID,
      icon: <Grid size={18} />,
      label: t('background.grid') || 'Grid'
    },
    {
      type: BACKGROUNDS.WAVES,
      icon: <Waves size={18} />,
      label: t('background.waves') || 'Waves'
    }
  ];
  
  return (
    <div className="background-control">
      <div className="background-control-tooltip">{t('background.change') || 'Change background'}</div>
      <div className="background-buttons">
        {backgroundOptions.map((option) => (
          <button
            key={option.type}
            className={`background-button ${backgroundType === option.type ? 'active' : ''}`}
            onClick={() => changeBackground(option.type)}
            aria-label={option.label}
            title={option.label}
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundControl;