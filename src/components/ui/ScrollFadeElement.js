import React, { useEffect, useRef } from 'react';

/**
 * ScrollFadeElement Component
 * Applies fade and blur effect to individual child elements as they scroll past
 * Each child element fades independently based on its own scroll position
 */
const ScrollFadeElement = ({ children, className = '', fadeIntensity = 0.7, blurIntensity = 2 }) => {
  const containerRef = useRef(null);
  const childRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all child elements
    const childElements = Array.from(container.children);
    childRefs.current = childElements;

    let rafId = null;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const viewportCenter = scrollY + viewportHeight / 2;

          childElements.forEach((child) => {
            const rect = child.getBoundingClientRect();
            const elementTop = scrollY + rect.top;
            const elementCenter = elementTop + rect.height / 2;
            const elementBottom = elementTop + rect.height;

            // Calculate if element is in viewport
            const isInViewport = elementTop < scrollY + viewportHeight && elementBottom > scrollY;

            if (isInViewport) {
              // Calculate fade based on how far element has scrolled past viewport center
              const distanceFromCenter = elementCenter - viewportCenter;
              const fadeThreshold = viewportHeight * 0.3; // Start fading when element is 30% away from center
              
              let progress = 0;
              if (distanceFromCenter < 0) {
                // Element is above viewport center (scrolled past)
                progress = Math.min(1, Math.abs(distanceFromCenter) / fadeThreshold);
              }

              // Apply fade and blur effect to individual element
              const opacity = 1 - (progress * fadeIntensity);
              const blur = progress * blurIntensity;

              child.style.opacity = opacity.toString();
              child.style.filter = `blur(${blur}px)`;
              child.style.transition = 'opacity 0.3s ease-out, filter 0.3s ease-out';
            } else {
              // Reset when element enters viewport from bottom
              if (elementTop > scrollY + viewportHeight) {
                child.style.opacity = '1';
                child.style.filter = 'blur(0px)';
              }
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initialize
    onScroll();

    // Add listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [fadeIntensity, blurIntensity]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollFadeElement;
