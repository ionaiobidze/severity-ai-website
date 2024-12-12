import React from 'react';

const FeatureSection = ({ title, description, visual }) => {
  return (
    <div className="feature-section">
      <h3>{title}</h3>
      <p>{description}</p>
      {visual}
    </div>
  );
};

export default FeatureSection;