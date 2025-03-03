import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Timeline from '../components/ui/Timeline';
import { getAllExperiences, getAllEducation } from '../assets/data/experiences';
import { getAllSkills, getAllCategories } from '../assets/data/skills';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SkillsSection } from '../components/about/Skills';
import './AboutPage.css';

const AboutPage = () => {
  const { t, language } = useLanguage();
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');
  
  const experiences = getAllExperiences();
  const education = getAllEducation();
  const skills = getAllSkills();
  const categories = getAllCategories();
  
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [skillsRef, skillsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [expRef, expVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [eduRef, eduVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <div className="about-page">
      <section 
        ref={headerRef} 
        className={`about-hero animate-on-view ${headerVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <h1 className="about-title">{t('about.title')}</h1>
          <p className="about-subtitle">{t('about.subtitle')}</p>
          
          <div className="about-intro">
            {t('about.description').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="resume-download">
            <a 
              href="/assets/Tom_Bouchard_CV.pdf" 
              download 
              className="button button-primary button-hover-effect"
            >
              <Download size={18} />
              <span>{t('about.downloadResume')}</span>
            </a>
          </div>
        </div>
      </section>
      
      <section 
        ref={skillsRef} 
        className={`skills-section animate-on-view ${skillsVisible ? 'is-visible' : ''}`}
      >
        <SkillsSection
          skills={skills}
          categories={categories}
          activeSkillCategory={activeSkillCategory}
          setActiveSkillCategory={setActiveSkillCategory}
          language={language}
        />
      </section>
      
      <section 
        ref={expRef} 
        className={`experience-section animate-on-view ${expVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">{t('about.experience')}</h2>
          <Timeline items={experiences} type="experience" />
        </div>
      </section>
      
      <section 
        ref={eduRef} 
        className={`education-section animate-on-view ${eduVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">{t('about.education')}</h2>
          <Timeline items={education} type="education" />
        </div>
      </section>
    </div>
  );
};

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default AboutPage;