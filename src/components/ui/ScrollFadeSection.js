import React from 'react';

// ScrollFadeSection disabled - renders as simple container
const ScrollFadeSection = ({ children, className = '' }) => {
          
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ScrollFadeSection;
