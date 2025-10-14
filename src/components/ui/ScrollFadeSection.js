import React, { useEffect, useRef } from 'react';

const ScrollFadeSection = ({ children, className = '' }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // Cache section height and position
    let cachedSectionHeight = sectionElement.offsetHeight;
    let cachedSectionTop = sectionElement.offsetTop;
    
    let rafId = null;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          
          // Calculate when section enters viewport
          const sectionTop = cachedSectionTop;
          const sectionBottom = sectionTop + cachedSectionHeight;
          const viewportBottom = scrollY + viewportHeight;
          
          // Section is in viewport when:
          // - Section top is above viewport bottom AND
          // - Section bottom is below viewport top
          const isInViewport = sectionTop < viewportBottom && sectionBottom > scrollY;
          
          if (isInViewport) {
            // Calculate how much of section is scrolled past viewport top
            const scrolledPast = scrollY - sectionTop;
            const fadeStart = 0; // Start fading immediately when scrolling past
            const fadeEnd = cachedSectionHeight * 0.6; // Complete fade at 60% of section height
            
            let progress = 0;
            if (scrolledPast > fadeStart) {
              progress = Math.min(1, (scrolledPast - fadeStart) / (fadeEnd - fadeStart));
            }
            
            // Apply fade effect
            sectionElement.style.setProperty('--section-opacity', (1 - progress * 0.7).toString()); // Fade to 30%
            sectionElement.style.setProperty('--section-blur', `${progress * 2}px`); // Subtle blur
          } else {
            // Reset when out of viewport
            sectionElement.style.setProperty('--section-opacity', '1');
            sectionElement.style.setProperty('--section-blur', '0px');
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Handle resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cachedSectionHeight = sectionElement.offsetHeight;
        cachedSectionTop = sectionElement.offsetTop;
        onScroll();
      }, 150);
    };

    // Initialize
    onScroll();

    // Add listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`scroll-fade-section ${className}`}
      style={{
        '--section-opacity': 1,
        '--section-blur': '0px',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeSection;
