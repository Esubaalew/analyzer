import React from 'react';
import '../styles/FeatureCard.css';

const FeatureCard = ({ feature, description, imageSrc }) => {
  return (
    <div className="feature-card">
      <img src={imageSrc} alt={feature} className="feature-image" />
      <h3>{feature}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
