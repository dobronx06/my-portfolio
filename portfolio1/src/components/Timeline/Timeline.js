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
      'calc(100% + 1rem)',    // First item
      'calc(100% + 1rem)',    // Second item
      'calc(100% + 1rem)',    // Third item
      'calc(100% + 1rem)',    // Fourth item
      'calc(-90%)'    // Fifth item
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
      icon: "🔔",
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
      description: "Client requested design modifications for the landing page. Changes include updating the color scheme and reimagining the hero section."
    },
    {
      icon: "📦",
      title: "New order #1832412",
      date: "21 DEC 11 PM",
      description: "Customer placed a bulk order for premium subscription packages. Order includes extended support and priority access."
    },
    {
      icon: "💰",
      title: "Payment completed for order #4395133",
      date: "20 DEC 2:20 AM",
      description: "Successfully processed payment for enterprise-level subscription. Transaction verified and completed."
    },
    {
      icon: "📱",
      title: "Mobile app update v2.0",
      date: "19 DEC 4:45 PM",
      description: "Released major mobile app update with new user interface and improved performance metrics."
    },
    {
      icon: "✨",
      title: "Feature launch: Analytics",
      date: "18 DEC 9:30 AM",
      description: "Launched new analytics dashboard with real-time data visualization capabilities."
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
      {/* Add extra padding at the bottom to ensure scrolling works for last items */}
      <div className="h-96"></div>
    </div>
  );
};

export default Timeline;