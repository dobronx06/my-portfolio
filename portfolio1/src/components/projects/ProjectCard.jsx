import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import Card, { CardImage, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './ProjectCard.css';

const ProjectCard = ({ project, index = 0, detailed = false }) => {
  const { t, language } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const description = language === 'fr' ? project.description : project.descriptionEn;
  
  return (
    <div 
      ref={ref} 
      className={`project-card-wrapper stagger-item ${isVisible ? 'is-visible' : ''}`}
      style={{ '--index': index % 10 }}
    >
      <Card className="project-card" hover={true}>
        <CardImage 
          src={project.thumbnail} 
          alt={project.title}
          className="project-thumbnail"
        />
        
        <CardContent className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className={`project-card-description ${detailed ? 'detailed' : ''}`}>
            {description}
          </p>
          
          <div className="project-technologies">
            {project.technologies.slice(0, detailed ? project.technologies.length : 4).map((tech, i) => (
              <span key={i} className="project-tech-tag">{tech}</span>
            ))}
            {!detailed && project.technologies.length > 4 && (
              <span className="project-tech-tag">+{project.technologies.length - 4}</span>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="project-card-footer">
          {!detailed && (
            <Link to={`/projects/${project.id}`} className="view-details-link">
              {t('projects.viewDetails')}
              <ChevronRight size={16} />
            </Link>
          )}
          
          <div className="project-links">
            {project.demoUrl && (
              <Button 
                href={project.demoUrl}
                variant="primary"
                size="sm"
                icon={<ExternalLink size={14} />}
              >
                {t('projects.visitSite')}
              </Button>
            )}
            
            {project.codeUrl && (
              <Button 
                href={project.codeUrl}
                variant="secondary"
                size="sm"
                icon={<Github size={14} />}
              >
                {t('projects.viewCode')}
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;