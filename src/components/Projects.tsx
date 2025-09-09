import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "MatchNet",
      description: "A fullstack application containing actionable betting insights on Men's ATP matches. Contains predictions, live bookmaker odds, and expected values for matches, along with updated player stats and live time match scores.",
      technologies: ["React", "FastAPI", "Python", "Tensorflow", "Pandas", "Docker", "AWS (EC2, S3)", "MongoDB", "Playwright"],
      liveUrl: "https://www.matchnet.uk",
      githubUrl: "https://github.com/maxharsh03/MatchNet"
    },
    {
      id: 2,
      title: "Jarvis",
      description: "Created a fully voice operated AI assistant that understands natural language, executes terminal commands, scrapes the web, summarizes content, and reads results aloud. ",
      technologies: ["Python", "PostgreSQL", "Chroma", "Langchain", "Ollama"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/maxharsh03/Jarvis"
    },
    {
      id: 3,
      title: "Backtesting Framework",
      description: "Built a modular backtesting framework with 30+ risk-adjusted performance metrics and benchmark comparisons. Built visualizations for portfolio performance, signal triggers, and regime-specific risk analysis using Plotly.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Statsmodels", "Plotly", "Multiprocessing", "Yahoo Finance API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/maxharsh03/backtesting-app"
    }
  ];

  return (
    <section id="projects" className={`projects ${darkMode ? 'projects-dark' : 'projects-light'}`}>
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            Here are some of the websites and applications I've built
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-top">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-bottom">
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link live-link"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link github-link"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;