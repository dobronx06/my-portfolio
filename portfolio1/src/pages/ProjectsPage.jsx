import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { getAllProjects, getProjectsByCategory } from '../assets/data/projects';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  const allProjects = getAllProjects();
  const categories = ['all', 'frontend', 'fullstack', 'design'];
  
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  useEffect(() => {
    let filtered = activeCategory === 'all' 
      ? [...allProjects]
      : getProjectsByCategory(activeCategory);
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => {
        const title = project.title.toLowerCase();
        const description = language === 'fr' 
          ? project.description.toLowerCase() 
          : project.descriptionEn.toLowerCase();
        const tech = project.technologies.join(' ').toLowerCase();
        
        return title.includes(query) || 
               description.includes(query) || 
               tech.includes(query);
      });
    }
    
    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery, allProjects, language]);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div className="projects-page">
      <section 
        ref={headerRef} 
        className={`projects-hero animate-on-view ${headerVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <h1 className="projects-title">{t('projects.title')}</h1>
          <p className="projects-subtitle">{t('projects.subtitle')}</p>
          
          <div className="projects-filter">
            <div className="categories-filter">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-button ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === 'all' 
                    ? t('projects.viewAll')
                    : capitalizeFirstLetter(category)
                  }
                </button>
              ))}
            </div>
            
            <div className="search-filter">
              <div className="search-input-container">
                <Search size={18} className="search-icon" />
                <input 
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="projects-grid-section">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  language={language}
                />
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>{t('projects.noProjects')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project, index, language }) => {
  const { t } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const description = language === 'fr' ? project.description : project.descriptionEn;
  
  return (
    <div 
      ref={ref} 
      className={`project-card stagger-item ${isVisible ? 'is-visible' : ''}`}
      style={{ '--index': index % 10 }}
    >
      <div className="project-image-container">
        <div className="project-image-placeholder">
          {/* Replace with actual image when available */}
          <div className="project-thumbnail-placeholder" style={{
            background: `linear-gradient(${45 + index * 30}deg, var(--color-primary), var(--color-accent))`
          }}></div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          <h4 className="tech-title">{t('projects.technologies')}:</h4>
          <div className="tech-tags">
            {project.technologies.map((tech, i) => (
              <span key={i} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="project-links">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link button button-primary button-sm"
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
              className="project-link button button-secondary button-sm"
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

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ProjectsPage;