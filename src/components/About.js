import React from 'react';
import pdf from '../assets/CV.pdf'; // Correct path to import the PDF

const About = () => {
  return (
    <section id="about" className="py-20 bg-grid-pattern text-white mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Text Content */}
        <div className="w-full md:w-2/3 max-w-3xl mx-auto mt-4 md:mt-0 md:mr-8">
          <div className="bg-slate-600 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-white">About Rob🙋‍♂️</h2>
            <p className="text-lg leading-relaxed mb-6 text-white">
              I am a passionate and dedicated Computer Science graduate with a keen interest in leveraging technology to solve real-world problems. Over the course of my four-year degree, I have honed my skills through coursework, projects, and hands-on experience, developing a solid foundation in software development, data structures, and algorithms.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-white">
              My journey in technology has been fueled by a curiosity to explore emerging trends and a commitment to continuous learning. Proficient in a variety of programming languages and frameworks, I thrive in dynamic environments where I can collaborate with like-minded individuals to innovate and create impactful solutions.
            </p>
            <p className="text-lg leading-relaxed text-white">
              As I embark on the next phase of my career, I am eager to apply my knowledge and skills to contribute meaningfully to projects that make a difference. I am driven by a desire to make a positive impact, and I am excited about the possibilities that lie ahead.
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href={pdf} className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white transition-colors duration-300 hover:from-red-700 hover:to-red-900 text-center" target="_blank" rel="noopener noreferrer">
              Download CV (PDF)
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-center" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img src="/images/headshot.jpeg" alt="Profile" className="rounded-full border-8 border-white shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default About;
