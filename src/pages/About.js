import React from 'react';
import { About as AboutSection, Stats, AIExpertise, Testimonials } from '../components';
import { HeroVideoBackground } from '../components/ui';

const About = () => {
  return (
    <main className="about-page">
      
        <HeroVideoBackground className="page-hero">
          <div className="container">
            <h1 className="section-title">About ConPro.AI</h1>
            <p className="section-subtitle">
              Leading the future of construction with innovative AI solutions
            </p>
          </div>
        </HeroVideoBackground>
      
      
        <AboutSection />
      
      
        <div className="dark-bg">
          <Stats />
        </div>
      
      
        <div className="dark-bg">
          <AIExpertise />
        </div>
      
      
        <div className="dark-bg">
          <Testimonials />
        </div>
      
    </main>
  );
};

export default About;
