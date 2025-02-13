import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Cards.css';

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  githubUrl, 
  liveUrl,
  tags = [] 
}) => {
  return (
    <div className="project-card-container">
      <article className="project-card">
        <header className="project-header">
          <h2 className="project-title">{title}</h2>
        </header>
        
        {imageUrl && (
          <div className="project-image-container">
            <img src={imageUrl} alt={title} className="project-image" />
          </div>
        )}
        
        <div className="project-content">
          <p className="project-description">{description}</p>
          
          {tags.length > 0 && (
            <div className="project-tags">
              {tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
          
          <div className="project-links">
            {githubUrl && (
              <a 
                href={githubUrl}
                className="project-link project-link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} style={{ marginRight: '8px' }} />
                View Code
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                className="project-link project-link-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} style={{ marginRight: '8px' }} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;