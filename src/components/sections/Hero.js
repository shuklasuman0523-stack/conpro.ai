import React, { useEffect, useRef } from 'react';
import heroAbstractFlow from '../../assets/images/hero-abstract-flow.png';
import '../../styles/hero-new.css';

const Hero = () => {
  // Custom event to open contact modal in Header
  const openContactModal = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };
  const rootRef = useRef(null);

  useEffect(() => {
    // set initial value
    document.documentElement.style.setProperty('--scrollY', window.scrollY + 'px');
    
    const heroElement = rootRef.current;
    
    const onScroll = () => {
      // Update existing scroll var for parallax layers
      document.documentElement.style.setProperty('--scrollY', window.scrollY + 'px');
      
      if (!heroElement) return;
      
    // Calculate hero vanish progress based on scroll
    const scrollY = window.scrollY;
    const heroHeight = heroElement.offsetHeight;
    
    // Start fading immediately as user scrolls (0% of hero height)
    const fadeStartThreshold = heroHeight * 0.0;
    const fadeEndThreshold = heroHeight * 0.4;      let progress = 0;
      if (scrollY > fadeStartThreshold) {
        progress = Math.min(1, (scrollY - fadeStartThreshold) / (fadeEndThreshold - fadeStartThreshold));
      }
      
    // Set CSS variables for visual effects only (no position changes)
    // Apply fade effect only
    heroElement.style.setProperty('--hero-opacity', (1 - progress * 0.7).toString()); // Fade to 30% instead of 0
    // Keep position fixed - no translateY
    heroElement.style.setProperty('--hero-translateY', '0px');
    // Keep scale fixed - no scale change
    heroElement.style.setProperty('--hero-scale', '1');
    
    // Apply blur effect on scroll for visual interest while keeping position
    heroElement.style.setProperty('--hero-blur', `${progress * 3}px`);
    
    // Fade out the background as well
    heroElement.style.setProperty('--hero-bg-opacity', (1 - progress * 0.5).toString()); // Fade to 50% instead of 0
      
      // Add class when nearly vanished
      if (progress > 0.95) {
        heroElement.classList.add('hero-vanished');
      } else {
        heroElement.classList.remove('hero-vanished');
      }
    };
    
    // Initialize
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <section 
      id="home" 
      className="hero-tailwind"
      style={{
        backgroundImage: `url(${heroAbstractFlow})`,
      }}
      ref={rootRef}
    >
      {/* Decorative parallax layers removed per request */}
      {/* Content container */}
      <div className="hero-container">
        <div className="hero-grid">
          {/* Text content */}
          <div className="hero-text-section">
            {/* Heading */}
            <h1 className="hero-heading">
              <span className="hero-heading-white">
                Unlock AI-Powered Insights to Drive<br />
              </span>
              {' '}
              <span className="hero-heading-gradient">
                Business Decisions Today
              </span>
            </h1>
            
            {/* Paragraph */}
            <p className="hero-paragraph">
              I've created comprehensive marketing-ready website copy that positions your healthcare AI solutions as 
              essential business transformations rather than just technology implementations. The content leverages 
              compelling statistics and ROI metrics to create urgency while addressing the real pain points healthcare 
              organizations face daily.
            </p>
            
            {/* Buttons */}
            <div className="hero-buttons">
              <button className="hero-btn" onClick={openContactModal}>
                Book a Demo
              </button>
              <button className="hero-btn" onClick={openContactModal}>
                GenAI Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Trust statement */}
        <div className="hero-trust">
          <p className="hero-trust-text">
            TRUSTED BY COMPANIES IN 100+ COUNTRIES AROUND THE GLOBE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;