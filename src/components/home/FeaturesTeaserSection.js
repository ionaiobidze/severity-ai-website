import React from 'react';

const FeaturesTeaserSection = () => {
  return (
    <section className="features-teaser">
      <div className="container">
        <h2>Discover the Future of Code Security</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-bolt feature-icon"></i>
            <h3>Real-Time Analysis</h3>
            <p>Instantly detect vulnerabilities as you write code, preventing security issues before they arise.</p>
          </div>
          <div className="feature">
            <i className="fas fa-shield-alt feature-icon"></i>
            <h3>Advanced Enterprise Solutions</h3>
            <p>Tailored security solutions with on-premise deployment options for large-scale organizations.</p>
          </div>
          <div className="feature">
            <i className="fas fa-code feature-icon"></i>
            <h3>Seamless Integration</h3>
            <p>Effortlessly integrates with your favorite IDEs, enhancing your development workflow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTeaserSection;