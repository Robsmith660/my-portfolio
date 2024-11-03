import React from 'react';
import nameImage from '../assets/robert-smith-high-resolution-logo-transparent.png'; // Adjust the path as needed

const Header = () => {
  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold tracking-wide hover:text-red-500 transition duration-300">
          <img src={nameImage} alt="Robert Smith Logo" className="h-8" /> {/* Adjust the height as needed */}
        </div>
        <div className="flex-grow flex flex-wrap justify-center mt-4 md:mt-0">
          <a href="#about" className="px-3 py-2 transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110">About</a>
          <a href="#skills" className="px-3 py-2 transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110">Skills</a>
          <a href="#portfolio" className="px-3 py-2 transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110">Portfolio</a>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <a href="https://github.com/robsmith660" target="_blank" rel="noopener noreferrer" className="flex items-center border-2 border-white rounded-lg p-2 m-2 transition duration-300 transform hover:bg-white hover:text-black hover:scale-105">
            <img src="/images/git.png" alt="GitHub" className="w-6 h-6 mr-2" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

