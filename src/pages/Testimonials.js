import React from 'react';
import { Testimonials as TestimonialsSection } from '../components/sections';
import { HeroVideoBackground } from '../components/ui';

const Testimonials = () => {
  return (
    <div className="page">
      <HeroVideoBackground className="page-hero">
        <div className="container">
          <h1 className="section-title">Client Testimonials</h1>
          <p className="section-subtitle">
            Hear what our clients say about their experience with ConPro.AI
          </p>
        </div>
      </HeroVideoBackground>
      <TestimonialsSection />
    </div>
  );
};

export default Testimonials;