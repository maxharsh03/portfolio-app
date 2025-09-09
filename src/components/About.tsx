import React from 'react';
import './About.css';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`about ${darkMode ? 'about-dark' : 'about-light'}`}>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <h3 className="about-subtitle">Full Stack Developer</h3>
            <p className="about-description">
              I'm currently a senior at NC State University majoring in Computer Science with 
              a concentration in Artificial Intelligence. I have industry experience, having interned 
              at Fidelity Investments for the past 2 summers as a Software Engineer, and gaining experience
              with developing projects from the ground up. 
            </p>
            <p className="about-description">
              Outside of school and work, I still enjoy coding in my freetime. I particularly enjoy delving 
              deeper into AI/ML related projects, and always enjoy learning something new. Recently, I've been 
              experimenting with creating my own AI agents to automate tasks. Besides coding, I enjoy watching the 
              49ers, hanging out with my friends, and rock climbing.
            </p>
            <div className="about-skills">
              <h4>Technologies I work with:</h4>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">LLMs</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Tensorflow</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img src="/media/profile_pic2.png" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;