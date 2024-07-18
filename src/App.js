
import './App.css';
// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';
import Socials from './components/Socials'; // Import the Socials component



function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <CV />
        <Portfolio />
        <Contact />
        <Socials /> {/* Include the Socials component */}

      </main>
      <Footer />
    </div>
  );
}

export default App;

