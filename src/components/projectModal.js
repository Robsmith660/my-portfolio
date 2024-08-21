import React from 'react';
import htmlIcon from '../assets/icons/html.png';
import tailwindcssIcon from '../assets/icons/tailwindcss.png';
import jsIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import javaIcon from '../assets/icons/java.png';
import nodeIcon from '../assets/icons/node.png';
import expressIcon from '../assets/icons/express.png';
import pythonIcon from '../assets/icons/python.png';
import sqlIcon from '../assets/icons/sql.png';
import sqliteIcon from '../assets/icons/sqlite.png';
import gitIcon from '../assets/icons/git1.png';
import dockerIcon from '../assets/icons/docker.png';
import tensorflowIcon from '../assets/icons/tensorflow.png';
import sklearnIcon from '../assets/icons/sklearn.png';
import pandasIcon from '../assets/icons/pandas.png';
import numpyIcon from '../assets/icons/numpy.png';
import axiosIcon from '../assets/icons/axios.png';
import postmanIcon from '../assets/icons/postman.png';
import chartjsIcon from '../assets/icons/chartjs.png';
import bcryptIcon from '../assets/icons/bcrypt.png';
import jwtIcon from '../assets/icons/jwt.png';
import githubIcon from '../assets/icons/githublogo.png';
import mongodbicon from '../assets/icons/mongodb.png';


const techIcons = {
  HTML: htmlIcon,
  TailwindCSS: tailwindcssIcon,
  JavaScript: jsIcon,
  React: reactIcon,
  Java: javaIcon,
  'Node.js': nodeIcon,
  Express: expressIcon,
  Python: pythonIcon,
  SQL: sqlIcon,
  SQLite: sqliteIcon,
  Git: gitIcon,
  Docker: dockerIcon,
  TensorFlow: tensorflowIcon,
  'Scikit-learn': sklearnIcon,
  Pandas: pandasIcon,
  NumPy: numpyIcon,
  Axios: axiosIcon,
  Postman: postmanIcon,
  'Chart.js': chartjsIcon,  // Make sure this key matches the one in the array
  JWT: jwtIcon,         // Make sure this key matches the one in the array
  'bcrypt.js': bcryptIcon,   // Make sure this key matches the one in the array
  GitHub: githubIcon,
  MongoDB: mongodbicon,
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-x-hidden overflow-y-auto outline-none">
      <div className="relative w-full max-w-3xl mx-auto my-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out overflow-y-auto max-h-screen">
        <div className="absolute top-0 right-0 p-2 z-50">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
            aria-label="Close modal"
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
        <div className="p-6 space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">{project.title}</h2>
          
          {project.videoUrl ? (
            <video 
              src={project.videoUrl} 
              controls 
              className="mb-4 w-full h-64 object-cover rounded"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover rounded mb-4"
            />
          )}
          
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Technologies Used</h3>
            <div className="flex flex-wrap justify-center">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="text-gray-900 flex items-center border-2 border-gray-300 rounded-lg p-2 m-2 transition duration-300 transform hover:bg-gray-200 hover:text-gray-900 hover:scale-105"
                >
                  <img src={techIcons[tech]} alt={tech} className="w-6 h-6 mr-2" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Links</h3>
            <div className="flex space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:from-red-600 hover:to-yellow-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          <button
            className="w-full mt-6 py-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg transition-colors duration-300 hover:from-red-600 hover:to-yellow-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

