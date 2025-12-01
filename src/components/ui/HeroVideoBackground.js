import React from 'react';
import './HeroVideoBackground.css';

const HeroVideoBackground = ({ children, className = '', overlay = true, videoSrc = "https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/8328046-uhd_3840_2160_25fps.mp4" }) => {
  return (
    <section className={`hero-video-section ${className}`}>
      {/* Video Background */}
      <video 
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={(e) => {
          console.error('Video failed to load:', e.target.src);
          e.target.style.display = 'none';
        }}
        onLoadedData={() => console.log('Video loaded successfully:', videoSrc)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      {overlay && <div className="hero-video-overlay"></div>}
      
      {/* Content */}
      <div className="hero-video-content">
        {children}
      </div>
    </section>
  );
};

export default HeroVideoBackground;