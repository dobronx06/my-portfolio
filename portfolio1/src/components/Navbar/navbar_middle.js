import React from 'react';
import './navbar_middle.css';

const NavbarMiddle = () => {
  return (
    <nav class="navbar_middle">
        <div class="nav_middle-content">
            <a href="#" class="nav_middle-item">ABOUT</a>
            <span class="separator">  </span>
            <a href="/contact" class="nav_middle-item">CONTACT</a>
            <span class="separator">  </span>
            <span class="title">WORK</span>
            <span class="separator">  </span>
            <a href="#" class="nav_middle-item">BLOG</a>
            <span class="separator">  </span>
            <a href="#" class="nav_middle-item">SERVICES</a>
        </div>
    </nav>
  );
};

export default NavbarMiddle;