import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'FertiStock',
      description:
        'Fertilizer Inventory Management is a systematic approach to tracking, controlling, and managing the stock of fertilizers within an agricultural supply chain, warehouse, or retail environment.',
      imageUrl: '/icons/ferti.png'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        PROJECTS
      </h2>
      <p className="section-subtitle">
        A few samples of my recent work, built with modern technologies and optimized for performance.
      </p>

      <div className="project-cards">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-icon"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
