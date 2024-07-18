import React from 'react';

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-grid-pattern text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Curriculum Vitae📑</h2>
        <div className="flex flex-col items-center">
          <a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-105">
            <img src="/images/cv-img.png" alt="CV Preview" className="mb-4 w-full max-w-xs rounded shadow-lg hover:shadow-2xl" />
          </a>
          <p className="text-lg leading-relaxed text-center max-w-xl">
            Feel free to read or download my CV as a PDF here!
          </p>
          <a href="/assets/CV.pdf" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg transition-colors duration-300 hover:bg-blue-700" target="_blank" rel="noopener noreferrer">
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default CV;
