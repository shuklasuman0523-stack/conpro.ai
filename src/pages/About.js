import React from 'react';
import { About as AboutSection, Stats, AIExpertise, Testimonials } from '../components';
import { HeroVideoBackground } from '../components/ui';

const About = () => {
  return (
    <main className="about-page">

      <HeroVideoBackground className="page-hero">
        <div className="container">
          <h1 className="section-title">Pioneering the Future of AI</h1>
          <p className="section-subtitle">
            Transforming industries with intelligent, scalable, and ethical artificial intelligence solutions
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
