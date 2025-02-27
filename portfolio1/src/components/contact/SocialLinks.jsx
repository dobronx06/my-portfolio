import React from 'react';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './SocialLinks.css';

const SocialLinks = ({ variant = 'default', className = '' }) => {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/tombouchard',
      icon: <Github size={variant === 'large' ? 24 : 20} />
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tombouchard',
      icon: <Linkedin size={variant === 'large' ? 24 : 20} />
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:contact@tombouchard.com',
      icon: <Mail size={variant === 'large' ? 24 : 20} />
    }
  ];
  
  if (variant === 'large') {
    return (
      <div className={`social-links-large ${className}`}>
        <h3 className="social-links-title">{t('contact.findMe')}</h3>
        <div className="social-links-grid">
          {socialLinks.map(link => (
            <a 
              key={link.id}
              href={link.url}
              className="social-link-large"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.name}
            >
              {link.icon}
              <span className="social-link-text">{link.name}</span>
              {link.url.startsWith('http') && (
                <ExternalLink size={14} className="external-link-icon" />
              )}
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  if (variant === 'simple') {
    return (
      <div className={`social-links-simple ${className}`}>
        {socialLinks.map(link => (
          <a 
            key={link.id}
            href={link.url}
            className="social-link-simple"
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    );
  }
  
  // Default variant
  return (
    <div className={`social-links-default ${className}`}>
      {socialLinks.map(link => (
        <a 
          key={link.id}
          href={link.url}
          className="social-link-default"
          target={link.url.startsWith('http') ? '_blank' : undefined}
          rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={link.name}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;