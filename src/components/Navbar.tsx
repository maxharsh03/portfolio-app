import React from 'react';
import './Navbar.css';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2></h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="dark-mode-toggle">
          <button
            className={`toggle-btn ${darkMode ? 'toggle-dark' : 'toggle-light'}`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;