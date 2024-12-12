import React from 'react';

const HeroSection = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfl7mo5Idg9TSRjHGPJTfhxtYXGrQ4eLkoAoswa2-SeRtPpzg/viewform?usp=sf_link";

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Secure Your Code with the Power of AI</h1>
          <p>Experience cutting-edge vulnerability detection and seamless IDE integration for unparalleled software security.</p>
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="cta-button">
            <span className="cta-text">Get Early Access Now</span>
            <span className="cta-icon">
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
        <div className="hero-image">
          {/*  */}
          <img src={`${process.env.PUBLIC_URL}/images/brain.gif`} alt="AI Security" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;