import React, { useEffect, useState } from 'react';

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}) => {
  const [scrollEffect, setScrollEffect] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for visual effects
      const scrollY = window.scrollY;
      const effectValue = scrollY * (direction === 'up' ? -speed : speed) * 0.001; // Reduced multiplier
      setScrollEffect(effectValue);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div 
      className={`relative ${className}`}
      style={{
        // NO position changes - only visual effects
        transform: 'translateY(0px)', // Keep in place
        opacity: Math.max(0.5, 1 - Math.abs(scrollEffect)), // Subtle fade effect
        transition: 'opacity 0.1s ease-out',
        willChange: 'opacity',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;