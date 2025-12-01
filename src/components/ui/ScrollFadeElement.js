import React from 'react';

/**
 * ScrollFadeElement Component - DISABLED
 * Now renders as simple container without scroll effects
 */
const ScrollFadeElement = ({ children, className = '' }) => {

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ScrollFadeElement;
