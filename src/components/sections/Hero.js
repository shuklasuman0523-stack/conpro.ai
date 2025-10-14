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
      
      // Apply fade effect only to heading with will-change for performance
      const opacity = 1 - progress * 0.8; // Fade to 20% opacity
      const blur = progress * 6; // Blur up to 6px
      
      headingElement.style.willChange = 'opacity, filter, transform';
      headingElement.style.opacity = opacity.toString();
      headingElement.style.filter = `blur(${blur}px)`;
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
        const lineBlur = lineProgress * 6;
        
        line.style.willChange = 'opacity, filter, transform';
        line.style.opacity = lineOpacity.toString();
        line.style.filter = `blur(${lineBlur}px)`;
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
      const buttonsBlur = buttonsProgress * 6;
      
      buttonsElement.style.willChange = 'opacity, filter, transform';
      buttonsElement.style.opacity = buttonsOpacity.toString();
      buttonsElement.style.filter = `blur(${buttonsBlur}px)`;
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
      const trustBlur = trustProgress * 6;
      
      trustElement.style.willChange = 'opacity, filter, transform';
      trustElement.style.opacity = trustOpacity.toString();
      trustElement.style.filter = `blur(${trustBlur}px)`;
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
                Unlock AI-Powered Insights to Drive<br />
              </span>
              {' '}
              <span className="hero-heading-gradient">
                Business Decisions Today
              </span>
            </h1>
            
            {/* Paragraph */}
            <p className="hero-paragraph" ref={paragraphRef}>
              <span ref={el => paragraphLinesRef.current[0] = el} style={{ display: 'block', transition: 'none' }}>
                I've created comprehensive marketing-ready website copy that positions your healthcare AI solutions as
              </span>
              <span ref={el => paragraphLinesRef.current[1] = el} style={{ display: 'block', transition: 'none' }}>
                essential business transformations rather than just technology implementations. The content leverages
              </span>
              <span ref={el => paragraphLinesRef.current[2] = el} style={{ display: 'block', transition: 'none' }}>
                compelling statistics and ROI metrics to create urgency while addressing the real pain points healthcare
              </span>
              <span ref={el => paragraphLinesRef.current[3] = el} style={{ display: 'block', transition: 'none' }}>
                organizations face daily.
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
            TRUSTED BY COMPANIES IN 100+ COUNTRIES AROUND THE GLOBE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;