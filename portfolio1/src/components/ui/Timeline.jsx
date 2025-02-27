import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { formatDate } from '../../utils/helpers';
import './Timeline.css';

const Timeline = ({ items, type = 'experience' }) => {
  const { language } = useLanguage();
  
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem 
          key={item.id} 
          item={item} 
          index={index}
          isLeft={index % 2 === 0}
          language={language}
          type={type}
        />
      ))}
    </div>
  );
};

const TimelineItem = ({ item, index, isLeft, language, type }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  const description = type === 'experience' 
    ? (language === 'fr' ? item.description : item.descriptionEn)
    : (language === 'fr' ? item.description : item.descriptionEn);
  
  const startDate = formatDate(item.startDate, language);
  const endDate = item.endDate === 'Present' 
    ? (language === 'fr' ? 'Présent' : 'Present') 
    : formatDate(item.endDate, language);
  
  return (
    <div 
      ref={ref} 
      className={`timeline-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'is-visible' : ''}`}
      style={{ '--animation-order': index }}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-date">
        {startDate} - {endDate}
      </div>
      <div className="timeline-content">
        <h3 className="timeline-title">
          {type === 'experience' ? item.title : item.degree}
        </h3>
        <h4 className="timeline-subtitle">
          {type === 'experience' ? item.company : item.institution} • {item.location}
        </h4>
        <ul className="timeline-description">
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        {type === 'experience' && item.technologies && (
          <div className="timeline-technologies">
            {item.technologies.map((tech, i) => (
              <span key={i} className="timeline-tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;