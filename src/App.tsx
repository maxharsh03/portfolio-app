import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <section id="home" className={`hero ${darkMode ? 'hero-dark' : 'hero-light'}`}>
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="name-highlight">Max Harshberger</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                I create beautiful, responsive web applications with modern technologies. 
                Passionate about clean code, user experience, and bringing ideas to life.
              </p>
              <div className="hero-buttons">
                <button 
                  className="hero-btn primary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
                <button 
                  className="hero-btn secondary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-placeholder">
                <img src="../media/profile_pic.jpeg"></img>
              </div>
            </div>
          </div>
        </section>

        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <footer className={`footer ${darkMode ? 'footer-dark' : 'footer-light'}`}>
        <div className="footer-container">
          <p>&copy; 2025 Max Harshberger. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
