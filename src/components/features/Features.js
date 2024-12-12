import React from 'react';
import FeatureSection from './FeatureSection';
import { Link } from 'react-router-dom';

const Features = () => {
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfl7mo5Idg9TSRjHGPJTfhxtYXGrQ4eLkoAoswa2-SeRtPpzg/viewform?usp=sf_link'; // Replace with your actual Google Form link
  return (
    <main>
      <section className="features">
        <div className="container">
          <h2>Features That Set Us Apart</h2>
          <FeatureSection
            title="Real-Time Vulnerability Detection"
            description="Severity AI scans your code as you type, offering instant, actionable advice to fix vulnerabilities before they become a risk. Our AI learns from the latest threats, keeping your code ahead of potential exploits."
          />
          <FeatureSection
            title="Seamless IDE Integration"
            description="Our plugin integrates smoothly with popular IDEs, enhancing your workflow without interruptions. Get up and running in minutes and experience a natural extension of your development environment."
          />
          <FeatureSection
            title="Enterprise-Ready Solutions"
            description="For organizations with stringent security requirements, we offer customizable solutions, including the option for on-premise LLM deployment. Tailor the solution to your needs and maintain full control over your data."
          />
        </div>
        <div className="cta-section">
          <div className="container">
            <p>Ready to experience the future of code security?</p>
            <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="cta-button">
              Get Early Access Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;