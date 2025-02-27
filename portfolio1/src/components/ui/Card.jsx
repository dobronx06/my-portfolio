import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  elevation = 'md', 
  onClick = null 
}) => {
  const cardClassName = `
    card 
    ${hover ? 'card-hover' : ''} 
    ${className} 
    card-elevation-${elevation}
    ${onClick ? 'card-clickable' : ''}
  `;

  return (
    <div className={cardClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`card-title ${className}`}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`card-footer ${className}`}>
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`card-image-container ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="card-image" />
      ) : (
        <div className="card-image-placeholder"></div>
      )}
    </div>
  );
};

export default Card;