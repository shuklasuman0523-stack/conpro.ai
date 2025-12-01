import React from 'react';
import heroAbstractFlow from '../../assets/images/hero-abstract-flow.png';
import '../../styles/hero-new.css';

const Hero = () => {
  // Custom event to open contact modal in Header
  const openContactModal = () => {
    const event = new Event('openContactModal');
    window.dispatchEvent(event);
  };

  // Scroll effects disabled - no refs or useEffect needed
  return (
    <section 
      id="home" 
      className="hero-tailwind"
    >
      {/* Video Background */}
      <video 
        className="hero-video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/8328046-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      {/* Video Overlay */}
      <div className="hero-video-overlay"></div>
      {/* Content container */}
      <div className="hero-container">
        <div className="hero-grid">
          {/* Text content */}
          <div className="hero-text-section">
            {/* Heading */}
            <h1 className="hero-heading">
              <span className="hero-heading-white">
                Transform Your Business with<br />
              </span>
              {' '}
              <span className="hero-heading-gradient">
                Enterprise-Grade AI Solutions
              </span>
            </h1>
            
            {/* Paragraph */}
            <p className="hero-paragraph">
              <span style={{ display: 'block' }}>
                ConPro.AI delivers intelligent automation that reduces costs by 40-60%, accelerates processes
              </span>
              <span style={{ display: 'block' }}>
                by up to 73%, and drives measurable ROI within months. Our solutions are trusted by 500+ enterprises
              </span>
              <span style={{ display: 'block' }}>
                across healthcare, finance, retail, and manufacturing—delivering $12.5M+ in proven client savings
              </span>
              <span style={{ display: 'block' }}>
                through AI-powered automation and predictive intelligence.
              </span>
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
            TRUSTED BY 500+ ENTERPRISES • $12.5M+ CLIENT SAVINGS • 98% RETENTION RATE • GLOBAL AI LEADER
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;