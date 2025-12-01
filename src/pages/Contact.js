import React from 'react';
import { Contact as ContactSection, CompanyLogos, Stats } from '../components';
import { SlideInLeft } from '../components/ui';

const Contact = () => {
  return (
    <main className="contact-page">
      <SlideInLeft>
        <ContactSection />
      </SlideInLeft>
      <SlideInLeft delay={200}>
        <CompanyLogos />
      </SlideInLeft>
      <SlideInLeft delay={400}>
        <Stats />
      </SlideInLeft>
    </main>
  );
};

export default Contact;