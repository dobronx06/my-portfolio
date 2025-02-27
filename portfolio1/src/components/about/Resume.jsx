import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { getAllExperiences, getAllEducation } from '../../assets/data/experiences';
import { getAllSkills } from '../../assets/data/skills';
import Button from '../ui/Button';
import './Resume.css';

const Resume = () => {
  const { t, language } = useLanguage();
  const [activePrintSection, setActivePrintSection] = useState('all');
  
  const experiences = getAllExperiences();
  const education = getAllEducation();
  const skills = getAllSkills();
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h2 className="resume-title">{t('about.resume')}</h2>
        <div className="resume-actions">
          <Button 
            variant="primary" 
            icon={<Download size={18} />}
            href="/assets/Tom_Bouchard_CV.pdf"
            download
          >
            {t('about.downloadResume')}
          </Button>
          <Button 
            variant="secondary" 
            onClick={handlePrint}
          >
            {t('about.printResume')}
          </Button>
        </div>
      </div>
      
      <div className="resume-print-options">
        <span className="print-options-label">{t('about.printOptions')}:</span>
        <div className="print-options-buttons">
          <button 
            className={`print-option-button ${activePrintSection === 'all' ? 'active' : ''}`}
            onClick={() => setActivePrintSection('all')}
          >
            {t('about.printAll')}
          </button>
          <button 
            className={`print-option-button ${activePrintSection === 'experience' ? 'active' : ''}`}
            onClick={() => setActivePrintSection('experience')}
          >
            {t('about.experience')}
          </button>
          <button 
            className={`print-option-button ${activePrintSection === 'education' ? 'active' : ''}`}
            onClick={() => setActivePrintSection('education')}
          >
            {t('about.education')}
          </button>
          <button 
            className={`print-option-button ${activePrintSection === 'skills' ? 'active' : ''}`}
            onClick={() => setActivePrintSection('skills')}
          >
            {t('about.skills')}
          </button>
        </div>
      </div>
      
      <div className="resume-document">
        <div className="resume-paper">
          <div className="resume-paper-header">
            <h1 className="resume-name">Tom Bouchard</h1>
            <p className="resume-role">{t('hero.title')}</p>
            <div className="resume-contact">
              <span className="resume-contact-item">Paris, France</span>
              <span className="resume-contact-item">contact@tombouchard.com</span>
              <span className="resume-contact-item">+33 6 00 00 00 00</span>
            </div>
          </div>
          
          <div className={`resume-section ${(activePrintSection === 'all' || activePrintSection === 'experience') ? '' : 'hidden-for-print'}`}>
            <h2 className="resume-section-title">{t('about.experience')}</h2>
            {experiences.map(experience => {
              const description = language === 'fr' ? experience.description : experience.descriptionEn;
              return (
                <div key={experience.id} className="resume-item">
                  <div className="resume-item-header">
                    <h3 className="resume-item-title">{experience.title}</h3>
                    <span className="resume-item-date">
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                  <p className="resume-item-subtitle">
                    {experience.company} | {experience.location}
                  </p>
                  <ul className="resume-item-list">
                    {description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="resume-technologies">
                    {experience.technologies.map((tech, i) => (
                      <span key={i} className="resume-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className={`resume-section ${(activePrintSection === 'all' || activePrintSection === 'education') ? '' : 'hidden-for-print'}`}>
            <h2 className="resume-section-title">{t('about.education')}</h2>
            {education.map(edu => {
              const description = language === 'fr' ? edu.description : edu.descriptionEn;
              return (
                <div key={edu.id} className="resume-item">
                  <div className="resume-item-header">
                    <h3 className="resume-item-title">{edu.degree}</h3>
                    <span className="resume-item-date">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className="resume-item-subtitle">
                    {edu.institution} | {edu.location}
                  </p>
                  <ul className="resume-item-list">
                    {description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
          <div className={`resume-section ${(activePrintSection === 'all' || activePrintSection === 'skills') ? '' : 'hidden-for-print'}`}>
            <h2 className="resume-section-title">{t('about.skills')}</h2>
            <div className="resume-skills">
              <div className="resume-skill-group">
                <h3 className="resume-skill-group-title">Frontend</h3>
                <div className="resume-skill-tags">
                  {skills.frontend.map((skill, i) => (
                    <span key={i} className="resume-skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
              
              <div className="resume-skill-group">
                <h3 className="resume-skill-group-title">Backend</h3>
                <div className="resume-skill-tags">
                  {skills.backend.map((skill, i) => (
                    <span key={i} className="resume-skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
              
              <div className="resume-skill-group">
                <h3 className="resume-skill-group-title">Tools</h3>
                <div className="resume-skill-tags">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="resume-skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
              
              <div className="resume-skill-group">
                <h3 className="resume-skill-group-title">Design</h3>
                <div className="resume-skill-tags">
                  {skills.design.map((skill, i) => (
                    <span key={i} className="resume-skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
              
              <div className="resume-skill-group">
                <h3 className="resume-skill-group-title">{t('about.softSkills')}</h3>
                <div className="resume-skill-tags">
                  {skills.softSkills.map((skill, i) => (
                    <span key={i} className="resume-skill-tag">
                      {language === 'fr' ? skill.name : skill.nameEn}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;