import React from 'react';
import './Header.css'; // Add custom styles if needed

const Header = () => (
  <header id="navbar">
    <nav>
      <div className="logo">
        <h1>Portfolio</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
