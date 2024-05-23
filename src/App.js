
import './App.css';
// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';


function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <CV />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

