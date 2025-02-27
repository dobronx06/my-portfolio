import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { getAllProjects, getProjectsByCategory } from '../../assets/data/projects';
import ProjectCard from './ProjectCard';
import Button from '../ui/Button';
import './ProjectsList.css';

const ProjectsList = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const allProjects = getAllProjects();
  const categories = [
    { id: 'all', label: t('projects.viewAll') },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'design', label: 'Design' }
  ];
  
  useEffect(() => {
    let filtered = activeCategory === 'all' 
      ? [...allProjects]
      : getProjectsByCategory(activeCategory);
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => {
        const title = project.title.toLowerCase();
        const description = project.description.toLowerCase();
        const descriptionEn = project.descriptionEn.toLowerCase();
        const tech = project.technologies.join(' ').toLowerCase();
        
        return title.includes(query) || 
               description.includes(query) || 
               descriptionEn.includes(query) || 
               tech.includes(query);
      });
    }
    
    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery, allProjects, t]);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="projects-list-container">
      <div className="projects-filters">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            placeholder={t('projects.searchPlaceholder')}
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        
        <Button 
          variant="ghost" 
          size="md" 
          icon={<Filter size={18} />}
          className="filter-toggle-btn"
          onClick={toggleFilters}
        >
          {t('projects.filter')}
        </Button>
        
        <div className={`categories-filter ${showFilters ? 'show' : ''}`}>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="projects-count">
        {filteredProjects.length} {t('projects.projectsFound')}
      </div>
      
      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="no-projects">
          <p>{t('projects.noProjects')}</p>
          <Button 
            variant="secondary" 
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
          >
            {t('projects.resetFilters')}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;