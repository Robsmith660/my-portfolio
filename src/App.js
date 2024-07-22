
import './index.css';

// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About'
import Skills from './components/Skills'; // Import the Socials component

import Portfolio from './components/Portfolio';
import Socials from './components/Socials'; // Import the Socials component
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Socials /> {/* Include the Socials component */}

      </main>
      <Footer />
    </div>
  );
}

export default App;

