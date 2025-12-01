import React, { useEffect, useRef, useState } from 'react';
import './SlideInLeft.css';

const SlideInLeft = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`slide-in-left ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default SlideInLeft;