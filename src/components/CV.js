import React from 'react';
import pdf from '../assets/CV.pdf'; // Correct path to import the PDF

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-grid-pattern text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Curriculum Vitae📑</h2>
        <div className="flex flex-col items-center">
          {/* Plain Image without hover or link */}
          <img src="/images/cv-img.png" alt="CV Preview" className="mb-4 w-full max-w-xs rounded" />
          <p className="text-lg leading-relaxed text-center max-w-xl">
            Feel free to read or download my CV as a PDF here!
          </p>
          <a href={pdf} className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg transition-colors duration-300 hover:bg-red-800" target="_blank" rel="noopener noreferrer">
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default CV;
