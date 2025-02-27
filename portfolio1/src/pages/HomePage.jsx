import React from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import ProjectsPreview from '../components/projects/ProjectsPreview';
import ContactPreview from '../components/contact/ContactPreview';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './HomePage.css';

const HomePage = () => {
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [projectsRef, projectsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [contactRef, contactVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <div className="home-page">
      <Hero />
      
      <section 
        ref={introRef} 
        className={`section-container animate-on-view ${introVisible ? 'is-visible' : ''}`}
      >
        <Introduction />
      </section>
      
      <section 
        ref={projectsRef} 
        className={`section-container animate-on-view ${projectsVisible ? 'is-visible' : ''}`}
      >
        <ProjectsPreview />
      </section>
      
      <section 
        ref={contactRef} 
        className={`section-container animate-on-view ${contactVisible ? 'is-visible' : ''}`}
      >
        <ContactPreview />
      </section>
    </div>
  );
};

export default HomePage;