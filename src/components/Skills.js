import React from 'react';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
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

const skillsData = {
  frontend: [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React.js', icon: reactIcon },
  ],
  backend: [
    { name: 'Java', icon: javaIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Express.js', icon: expressIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'SQL', icon: sqlIcon },
    { name: 'SQLite', icon: sqliteIcon },
  ],
  others: [
    { name: 'Git', icon: gitIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'TensorFlow', icon: tensorflowIcon },
    { name: 'Scikit-learn', icon: sklearnIcon },
    { name: 'Pandas', icon: pandasIcon },
    { name: 'NumPy', icon: numpyIcon },
    { name: 'Axios', icon: axiosIcon },
    { name: 'Postman', icon: postmanIcon },
  ],
};

const Skills = () => {
  return (
    
    <section id="skills" className="py-20 bg-grid-pattern text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h3 className="text-3xl font-extrabold mb-4 text-center text-white">Skills🚀</h3>
        <p className="text-center text-lg mb-8 text-white">Here are some of the technical skills I have acquired over the years:</p>
        {/* Frontend Skills */}
        <div className="w-full md:w-2/3 max-w-3xl mx-auto mb-8">
          <div className="bg-slate-700 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform">
            <h4 className="text-2xl font-bold mb-2 text-white text-center">Frontend</h4>
            <p className="text-center text-sm mb-4 text-white">Skills for building the client-side of web applications.</p>
            <div className="flex flex-wrap justify-center">
              {skillsData.frontend.map(skill => (
                <div key={skill.name} className="flex items-center border-2 border-white rounded-lg p-2 m-2 transition duration-300 transform hover:bg-white hover:text-slate-700 hover:scale-105">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Backend Skills */}
        <div className="w-full md:w-2/3 max-w-3xl mx-auto mb-8">
          <div className="bg-slate-700 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform">
            <h4 className="text-2xl font-bold mb-2 text-white text-center">Backend</h4>
            <p className="text-center text-sm mb-4 text-white">Skills for building the server-side of web applications.</p>
            <div className="flex flex-wrap justify-center">
              {skillsData.backend.map(skill => (
                <div key={skill.name} className="flex items-center border-2 border-white rounded-lg p-2 m-2 transition duration-300 transform hover:bg-white hover:text-slate-700 hover:scale-105">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Other Skills */}
        <div className="w-full md:w-2/3 max-w-3xl mx-auto mb-8">
          <div className="bg-slate-700 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform">
            <h4 className="text-2xl font-bold mb-2 text-white text-center">Others</h4>
            <p className="text-center text-sm mb-4 text-white">Additional tools and technologies I am proficient in.</p>
            <div className="flex flex-wrap justify-center">
              {skillsData.others.map(skill => (
                <div key={skill.name} className="flex items-center border-2 border-white rounded-lg p-2 m-2 transition duration-300 transform hover:bg-white hover:text-slate-700 hover:scale-105">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
