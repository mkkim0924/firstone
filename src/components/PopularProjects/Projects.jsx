import React from 'react';
import Card from '../../UI/Card/Card';

import './projects.scss';

const Projects = () => {
  return (
    <div className="popular-projects">
      <h2>Popular projects in your area</h2>
      <div className="project-cards-container">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((project) => (
          <Card key={project} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
