import React, { useState } from 'react';
import ProjectModal from './projectModal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Define project data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Brief description of Project 1.',
      image: '/images/py.jpg',
      technologies: ['React', 'Node.js', 'Express'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Brief description of Project 2.',
      image: '/images/py.jpg',
      technologies: ['React', 'Node.js', 'Express'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Brief description of Project 3.',
      image: '/images/py.jpg',
      technologies: ['React', 'Node.js', 'Express'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project3',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-grid-pattern text-white">      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center">My Work⭐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="mb-4 rounded"/>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <button
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-red-800"
                onClick={() => openModal(project)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
