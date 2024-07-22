
import './index.css';

// src/App.js
import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import CV from './components/CV';
import Socials from './components/Socials'; // Import the Socials component
import About from './components/About'


function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <CV />
        <Portfolio />
        <Socials /> {/* Include the Socials component */}

      </main>
      <Footer />
    </div>
  );
}

export default App;

