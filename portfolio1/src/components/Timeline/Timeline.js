import './Timeline.css';
import { useEffect, useRef } from 'react';

const TimelineItem = ({ icon, title, date, description, index, isLast }) => {
  const itemRef = useRef(null);
  const descriptionRef = useRef(null);

  const getDescriptionStyle = (index) => {
    const positionsTop = [
      '10%',    // First item
      '35%',    // Second item
      '60%',    // Third item
      '85%',    // Fourth item
      '89%'    // Fifth item
    ];
    
    const positionsLeft = [
      'calc(50% + 1rem)',    // First item
      'calc(-70%)',    // Second item
      'calc(50% + 1rem)',    // Third item
      'calc(50% + 1rem)',    // Fourth item
      'calc(-60%)'    // Fifth item
    ];

    return {
      top: positionsTop[index] || '50%',
      left: positionsLeft[index] || '0',
      transform: 'translateX(-20px)'
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!descriptionRef.current) return;

      const rect = descriptionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementTop = rect.top + scrollPosition;
      const viewportHeight = window.innerHeight;
      // Adjusted trigger point to start earlier
      const startPosition = elementTop - (viewportHeight * 0.75);
      
      const translation = Math.max(0, Math.min(100, (scrollPosition - startPosition) / 5));
      
      if (scrollPosition > startPosition) {
        descriptionRef.current.style.transform = `translateX(${translation}px)`;
        descriptionRef.current.style.opacity = Math.min(1, translation / 30);
      } else {
        descriptionRef.current.style.transform = 'translateX(-20px)';
        descriptionRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="timeline-item" ref={itemRef}>
        {!isLast && <div className="timeline-connector"></div>}
        <div className="timeline-content">
          <div className="timeline-icon">
            {icon}
          </div>
          <div className="timeline-header">
            <h6>{title}</h6>
            <small>{date}</small>
          </div>
        </div>
      </div>
      <p 
        ref={descriptionRef}
        className="timeline-description text-sm text-gray-300 opacity-0 transition-all duration-300 ease-out"
        style={getDescriptionStyle(index)}
      >
        {description}
      </p>
    </div>
  );
};

export const Timeline = () => {
  const timelineItems = [
    {
      icon: "🏫​",
      title: "Last year of high school",
      date: "September 2022 to June 2023",
      description: "I obtained my Baccalaureate with honours in 2023. I was a student at the Lycée Notre-Dame de Bonsecours in Perpignan, France."
    },
    {
      icon: "💻",
      title: "First year of university, Epitech",
      date: "September 2023 to June 2024",
      description: "I did my first year at Epitech Montpellier, a computer science school in Montpellier, France. I learned the basics of programming and the C language throughout a variety of advanced projects."
    },
    {
      icon: "🏢",
      title: "First Internship",
      date: "July 2024 to December 2024",
      description: "I had my first internship at elloha, a company specializing in travel technology solutions. I worked on various projects, gaining practical experience in software development. I worked in C# for backend integration and in html/css for front-end integration, i am now comfortable in both."
    },
    {
      icon: "💻",
      title: "Second year of university, Epitech",
      date: "January 2025 to now",
      description: "I started my second year at Epitech Montpellier, after overseeing python, C, C# and html/css. Now looking into C++"
    },
    {
      icon: "❔",
      title: "NOW",
      date: "Waiting for you !",
      description: "Currently learning react, this website show you what i can do yet 😉. I am also interested in IA models, IA agents, cryptocurrencies, and everything that is our future !"
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-title">
        Recent Activity
      </div>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            title={item.title}
            date={item.date}
            description={item.description}
            index={index}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default Timeline;