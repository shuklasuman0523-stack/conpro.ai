import React from 'react';

// ParallaxSection disabled - renders as simple container
const ParallaxSection = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ParallaxSection;