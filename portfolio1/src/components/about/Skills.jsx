import React from 'react';
import './Skills.css';

export const SkillsSection = ({ 
  skills, 
  categories, 
  activeSkillCategory, 
  setActiveSkillCategory,
  language
}) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderIcon = (iconPath) => {
    try {
      // Try to import the image directly
      return (
        <img 
          src={require(`${iconPath}`)} 
          alt="skill icon" 
          className="skill-icon-image"
        />
      );
    } catch (error) {
      // Fallback if image import fails
      console.warn(`Failed to load icon: ${iconPath}`, error);
      return (
        <div className="skill-icon-fallback">
          {iconPath.split('/').pop().charAt(0).toUpperCase()}
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h2 className="section-title">Compétences</h2>
      
      <div className="skills-categories">
        {categories.map(category => (
          <button 
            key={category}
            className={`skills-category-button ${activeSkillCategory === category ? 'active' : ''}`}
            onClick={() => setActiveSkillCategory(category)}
          >
            {capitalizeFirstLetter(category)}
          </button>
        ))}
      </div>
      
      <div className="skills-cards-container">
        {skills[activeSkillCategory].map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">
              {renderIcon(skill.icon)}
            </div>
            <h3 className="skill-name">
            {language === 'en' && skill.nameEn ? skill.nameEn : skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;