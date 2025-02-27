import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { getFeaturedProjects } from '../../assets/data/projects';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './ProjectsPreview.css';

const ProjectsPreview = () => {
  const { t, language } = useLanguage();
  const featuredProjects = getFeaturedProjects();
  
  return (
    <div className="container">
      <div className="projects-preview">
        <div className="projects-header">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>
        
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              language={language}
            />
          ))}
        </div>
        
        <div className="projects-more">
          <Link to="/projects" className="button button-primary button-hover-effect">
            {t('projects.viewAll')}
            <ChevronRight size={18} className="button-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, language }) => {
  const { t } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  const description = language === 'fr' ? project.description : project.descriptionEn;
  
  return (
    <div 
      ref={ref} 
      className={`project-card stagger-item ${isVisible ? 'is-visible' : ''}`}
      style={{ '--index': index }}
    >
      <div className="project-image-container">
        <div className="project-image-placeholder">
          {/* Replace with actual image when available */}
          <div className="project-thumbnail-placeholder" style={{
            background: `linear-gradient(${45 + index * 30}deg, var(--color-primary), var(--color-accent))`
          }}></div>
        </div>
        <div className="project-overlay">
          <Link to={`/projects/${project.id}`} className="project-overlay-link">
            {t('projects.viewDetails')}
          </Link>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="project-tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="project-tech-tag">+{project.technologies.length - 4}</span>
          )}
        </div>
        
        <div className="project-links">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={16} />
              <span>{t('projects.visitSite')}</span>
            </a>
          )}
          
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <Github size={16} />
              <span>{t('projects.viewCode')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;