import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Robert Smith</div>
        <div>
          <a href="#about" className="px-3 transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110">About</a>
          <a href="#portfolio" className="px-3 transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110">Portfolio</a>
          <a href="#contact" className="px-3 transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110">Contact</a>
          <a href="#cv" className="px-3 transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110">CV</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
