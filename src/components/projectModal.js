import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 overflow-x-hidden overflow-y-auto outline-none">
      <div className="relative max-w-lg mx-auto my-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
        <div className="absolute top-0 right-0 p-2">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.technologies.map((tech) => (
                <li key={tech} className="text-gray-700">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <div className="flex space-x-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
