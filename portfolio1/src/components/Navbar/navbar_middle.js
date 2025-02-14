import React from 'react';
import './navbar_middle.css';
import { useLocation } from 'react-router-dom';


const NavbarMiddle = () => {
  const { pathname } = useLocation();
  const path = pathname;

  const Page = {
    HOME: '/',
    ABOUT: '/my-portfolio/about',
    RESUME: '/my-portfolio/resume',
    SERVICES: '/my-portfolio/services',
    CONTACT: '/my-portfolio/contact'
  };
   
  let currentPage = path === Page.HOME ? 'HOME' : path === Page.ABOUT ? 'ABOUT' : path === Page.RESUME ? 'RESUME' : path === Page.SERVICES ? 'SERVICES' : 'CONTACT';

  let navItems = [
    { name: 'HOME', path: Page.HOME, isCurrent: currentPage === 'HOME' },
    { name: 'ABOUT', path: Page.ABOUT, isCurrent: currentPage === 'ABOUT' },
    { name: 'RESUME', path: Page.RESUME, isCurrent: currentPage === 'RESUME' },
    { name: 'SERVICES', path: Page.SERVICES, isCurrent: currentPage === 'SERVICES' },
    { name: 'CONTACT', path: Page.CONTACT, isCurrent: currentPage === 'CONTACT' }
  ];

  let currentIndex = navItems.findIndex(item => item.isCurrent);
  if (currentPage !== 'RESUME')
    navItems[currentIndex] = navItems.splice(2, 1, navItems[currentIndex])[0];

  const visibleNavItems = navItems

  return (
    <nav className="navbar_middle">
      <div className="nav_middle-content">
        {visibleNavItems.map((item) => (
          <React.Fragment key={item.name}>
            {item.isCurrent ? (
              <span className="title">{item.name}</span>
            ) : (
              <a href={item.path} className="nav_middle-item">{item.name}</a>
            )}
            <span className="separator"> </span>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default NavbarMiddle;