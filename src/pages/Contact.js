import React from 'react';
import { Contact as ContactSection, CompanyLogos, Stats } from '../components';
import { ScrollFadeSection } from '../components/ui';

const Contact = () => {
  return (
    <main className="contact-page">
      <ScrollFadeSection>
        <section className="page-hero">
          <div className="container">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Get in touch with our team to learn more about ConPro.AI
            </p>
          </div>
        </section>
      </ScrollFadeSection>
      <ScrollFadeSection>
        <ContactSection />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <CompanyLogos />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <Stats />
      </ScrollFadeSection>
    </main>
  );
};

export default Contact;