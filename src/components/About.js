import React from 'react';
import pdf from '../assets/CV.pdf'; // Correct path to import the PDF

const About = () => {
  return (
    <section id="about" className="py-20 bg-grid-pattern text-white mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Text Content */}
        <div className="w-full md:w-2/3 max-w-3xl mx-auto mt-4 md:mt-0 md:mr-8 mb-8 md:mb-0">
          <div className="bg-slate-600 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform">
            <h2 className="text-4xl font-extrabold mb-6 text-white">Hi, I am Rob🙋‍♂️</h2>
            <h3 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">I am a Full Stack Developer</h3>

            <p className="text-lg leading-relaxed mb-6 text-white">
              - **Computer Science graduate** with a focus on full stack development.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-white">
              - **Hands-on experience** in IoT, data analysis, and machine learning.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-white">
              - **Developed AR-based training tools** during an internship at Medtronic to boost team productivity.
            </p>
            <p className="text-lg leading-relaxed text-white">
              - Passionate about **solving real-world problems** through tech and always eager to learn more.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={pdf} className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white transition-colors duration-300 hover:from-red-700 hover:to-red-900 text-center" target="_blank" rel="noopener noreferrer">
              Download CV (PDF)
            </a>
            <a href="https://www.linkedin.com/in/rob-smith-4752001b3/" className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white transition-colors duration-300 hover:from-red-700 hover:to-red-900 text-center" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center md:ml-8">
          <img src="/images/headshot.jpeg" alt="Profile" className="rounded-full border-8 border-white shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default About;
