import React from 'react';
import { Testimonials as TestimonialsSection } from '../components/sections';
import { ScrollFadeSection } from '../components/ui';

const Testimonials = () => {
  return (
    <div className="page">
      <ScrollFadeSection>
        <div className="page-hero">
          <h1 className="section-title">Client Testimonials</h1>
          <p className="section-subtitle">
            Hear what our clients say about their experience with ConPro.AI
          </p>
        </div>
      </ScrollFadeSection>
      <ScrollFadeSection>
        <TestimonialsSection />
      </ScrollFadeSection>
    </div>
  );
};

export default Testimonials;