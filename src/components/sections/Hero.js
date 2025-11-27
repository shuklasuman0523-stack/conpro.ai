import React, { useEffect, useRef } from 'react';
import heroAbstractFlow from '../../assets/images/hero-abstract-flow.png';
import '../../styles/hero-new.css';

const Hero = () => {
  // Custom event to open contact modal in Header
  const openContactModal = () => {
    const event = new Event('openContactModal');
    window.dispatchEvent(event);
  };
  const rootRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const paragraphLinesRef = useRef([]);
  const buttonsRef = useRef(null);
  const trustRef = useRef(null);

  useEffect(() => {
    // set initial value
    document.documentElement.style.setProperty('--scrollY', window.scrollY + 'px');
    
    const heroElement = rootRef.current;
    const headingElement = headingRef.current;
    const paragraphElement = paragraphRef.current;
    const buttonsElement = buttonsRef.current;
    const trustElement = trustRef.current;
    
    const onScroll = () => {
      // Update existing scroll var for parallax layers
      document.documentElement.style.setProperty('--scrollY', window.scrollY + 'px');
      
      if (!heroElement || !headingElement || !paragraphElement || !buttonsElement || !trustElement) return;
      
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Get paragraph position for heading fade
      const paragraphRect = paragraphElement.getBoundingClientRect();
      const paragraphTop = paragraphRect.top;
      
      // Start fading heading when paragraph reaches 20% from top of viewport
      // Complete fade when paragraph reaches the very top (0px from top)
      const fadeStartPosition = viewportHeight * 0.2; // Start when paragraph is at 20% from top
      const fadeEndPosition = 0; // Complete when paragraph is at top
      
      let progress = 0;
      if (paragraphTop < fadeStartPosition) {
        progress = Math.min(1, (fadeStartPosition - paragraphTop) / (fadeStartPosition - fadeEndPosition));
      }
      
  // Apply fade effect only to heading (blur removed)
  const opacity = 1 - progress * 0.8; // Fade to 20% opacity
      
  headingElement.style.willChange = 'opacity, transform';
  headingElement.style.opacity = opacity.toString();
  headingElement.style.transform = `translateY(${progress * -30}px)`; // Move up as it fades
      
      // Fade paragraph lines individually
      paragraphLinesRef.current.forEach((line) => {
        if (!line) return;
        
        const lineRect = line.getBoundingClientRect();
        const lineTop = lineRect.top;
        
        let lineProgress = 0;
        const lineFadeStart = viewportHeight * 0.15;
        const lineFadeEnd = 0;
        
        if (lineTop < lineFadeStart) {
          lineProgress = Math.min(1, (lineFadeStart - lineTop) / (lineFadeStart - lineFadeEnd));
        }
        
  const lineOpacity = 1 - lineProgress * 0.8;
        
  line.style.willChange = 'opacity, transform';
  line.style.opacity = lineOpacity.toString();
  line.style.transform = `translateY(${lineProgress * -30}px)`;
      });
      
      // Fade buttons when they reach the top
      const buttonsRect = buttonsElement.getBoundingClientRect();
      const buttonsTop = buttonsRect.top;
      
      let buttonsProgress = 0;
      const buttonsFadeStart = viewportHeight * 0.15;
      const buttonsFadeEnd = 0;
      
      if (buttonsTop < buttonsFadeStart) {
        buttonsProgress = Math.min(1, (buttonsFadeStart - buttonsTop) / (buttonsFadeStart - buttonsFadeEnd));
      }
      
  const buttonsOpacity = 1 - buttonsProgress * 0.8;
      
  buttonsElement.style.willChange = 'opacity, transform';
  buttonsElement.style.opacity = buttonsOpacity.toString();
  buttonsElement.style.transform = `translateY(${buttonsProgress * -30}px)`;
      
      // Get trust text position for its fade
      const trustRect = trustElement.getBoundingClientRect();
      const trustTop = trustRect.top;
      
      // Start fading trust text when it reaches 15% from top
      // Complete fade when it reaches the very top
      const trustFadeStart = viewportHeight * 0.15;
      const trustFadeEnd = 0;
      
      let trustProgress = 0;
      if (trustTop < trustFadeStart) {
        trustProgress = Math.min(1, (trustFadeStart - trustTop) / (trustFadeStart - trustFadeEnd));
      }
      
      // Apply fade effect to trust text
  const trustOpacity = 1 - trustProgress * 0.8;
      
  trustElement.style.willChange = 'opacity, transform';
  trustElement.style.opacity = trustOpacity.toString();
  trustElement.style.transform = `translateY(${trustProgress * -30}px)`;
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
            <h1 className="hero-heading" ref={headingRef}>
              <span className="hero-heading-white">
                Transform Your Business with<br />
              </span>
              {' '}
              <span className="hero-heading-gradient">
                Enterprise-Grade AI Solutions
              </span>
            </h1>
            
            {/* Paragraph */}
            <p className="hero-paragraph" ref={paragraphRef}>
              <span ref={el => paragraphLinesRef.current[0] = el} style={{ display: 'block', transition: 'none' }}>
                ConPro.AI delivers intelligent automation that reduces costs by 40-60%, accelerates processes
              </span>
              <span ref={el => paragraphLinesRef.current[1] = el} style={{ display: 'block', transition: 'none' }}>
                by up to 73%, and drives measurable ROI within months. Our solutions are trusted by 500+ enterprises
              </span>
              <span ref={el => paragraphLinesRef.current[2] = el} style={{ display: 'block', transition: 'none' }}>
                across healthcare, finance, retail, and manufacturing—delivering $12.5M+ in proven client savings
              </span>
              <span ref={el => paragraphLinesRef.current[3] = el} style={{ display: 'block', transition: 'none' }}>
                through AI-powered automation and predictive intelligence.
              </span>
            </p>
            
            {/* Buttons */}
            <div className="hero-buttons" ref={buttonsRef}>
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
        <div className="hero-trust" ref={trustRef}>
          <p className="hero-trust-text">
            TRUSTED BY 500+ ENTERPRISES • $12.5M+ CLIENT SAVINGS • 98% RETENTION RATE • GLOBAL AI LEADER
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;