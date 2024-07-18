import React from 'react';
import gitIcon from '../images/git.png';
import linkedinIcon from '../images/linkedin.png';

const Socials = () => {
    return (
        <section id="cv" className="py-20 bg-grid-pattern text-white">      

        <div className="socials">
            <a href="https://github.com/robsmith660" target="_blank" rel="noopener noreferrer">
                <img src={gitIcon} alt="GitHub" className="social-icon"/>
            </a>
            <a href="https://linkedin.com/in/rob-smith-4752001b3" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon"/>
            </a>
        </div>
        </section>

    );
};

export default Socials;
