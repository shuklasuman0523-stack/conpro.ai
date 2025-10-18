import React from 'react';
import { About as AboutSection, Stats, AIExpertise, Testimonials } from '../components';
import { ScrollFadeSection } from '../components/ui';

const About = () => {
  return (
    <main className="about-page">
      <ScrollFadeSection>
        <section className="page-hero">
          <div className="container">
            <h1 className="section-title">About ConPro.AI</h1>
            <p className="section-subtitle">
              Leading the future of construction with innovative AI solutions
            </p>
          </div>
        </section>
      </ScrollFadeSection>
      <ScrollFadeSection>
        <AboutSection />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <Stats />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <AIExpertise />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <Testimonials />
      </ScrollFadeSection>
    </main>
  );
};

export default About;