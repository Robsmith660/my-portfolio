import React from 'react';

const Socials = () => {
  return (
    <section id="cv" className="py-20 bg-grid-pattern text-white">
      <div className="socials">
        <a href="https://github.com/robsmith660" target="_blank" rel="noopener noreferrer">
          <img src="/images/git.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/rob-smith-4752801b3" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </section>
  );
};

export default Socials;
