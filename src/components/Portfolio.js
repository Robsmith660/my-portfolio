import React, { useState } from 'react';
import ProjectModal from './projectModal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Define project data
  const projects = [
    {
      id: 1,
      title: 'IOT Temp/Humidity Monitor',
      description: 'Developed a comprehensive full-stack IoT system to monitor and visualize real-time temperature and humidity data. The project integrates frontend and backend technologies to provide an interactive user experience.',
      image: '/images/IOT-Temp-Humidity.png',
      videoUrl: '/videos/temp-hum-demo.mp4', // Add the video URL here
      technologies: ['React', 'Chart.js', 'Axios', 'HTML', 'TailwindCSS', 'Node.js', 'Express', 'JWT', 'bcrypt.js', 'SQLite', 'Git', 'GitHub', 'Docker', 'Postman'],
      githubUrl: 'https://github.com/Robsmith660/iot-temp-humidity-monitor',
      category: 'web'
    },
    {
      id: 2,
      title: 'Machine Learning Project',
      description: 'Implemented a machine learning model to predict outcomes based on data analysis and feature engineering.',
      image: '/images/machinelearning.png',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      githubUrl: 'https://github.com/Robsmith660/machine-learning-project',
      category: 'ml'
    },
    {
      id: 3,
      title: 'Flight Booking System',
      description: 'A full-stack web application to manage flight bookings, passengers, and flight details. The project includes a frontend for user interaction and a backend for handling database operations.',
      image: '/images/travel-sys.png',  // Make sure this image exists in your project
      videoUrl: '/videos/travel-sys-demo.mp4', // Add the video URL here

      technologies: ['React', 'Node.js', 'Express', 'MongoDB', , 'Axios','TailwindCSS', 'Git', 'GitHub','Postman'],
      githubUrl: 'https://github.com/Robsmith660/flight-booking-system',
      category: 'web'
    },
  ];

  // Filter projects based on the selected category
  const filteredProjects = projects.filter(project => filter === 'all' || project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-grid-pattern text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center">My Work⭐</h2>
        
        {/* Filter Section */}
        <div className="text-center mb-8">
          <p className="text-lg mb-4">Select a category to filter projects:</p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${filter === 'web' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
              onClick={() => setFilter('web')}
            >
              Web Apps
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${filter === 'ml' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
              onClick={() => setFilter('ml')}
            >
              Machine Learning
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col"
            >
              <img src={project.image} alt={project.title} className="mb-4 rounded w-full h-auto object-contain" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <button
                className="mt-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:from-red-600 hover:to-yellow-600"
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
