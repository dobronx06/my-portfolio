import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href = null,
  to = null,
  icon = null,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  className = '',
  onClick = null,
  type = 'button',
  ...props 
}) => {
  const buttonClass = `
    button 
    button-${variant} 
    button-${size}
    ${fullWidth ? 'button-full-width' : ''}
    ${disabled ? 'button-disabled' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="button-icon button-icon-left">{icon}</span>
      )}
      
      <span className="button-text">{children}</span>
      
      {icon && iconPosition === 'right' && (
        <span className="button-icon button-icon-right">{icon}</span>
      )}
    </>
  );

  // External link
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClass}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onClick={!disabled ? onClick : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link 
        to={to}
        className={buttonClass}
        onClick={!disabled ? onClick : undefined}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <button 
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;