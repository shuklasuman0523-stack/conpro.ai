import React from 'react';
import GlitchText from '../ui/GlitchText';
import ScrollFadeElement from '../ui/ScrollFadeElement';
import aiCircleIcon from '../../assets/icons/ai-circle.svg';
import networkIcon from '../../assets/icons/network.svg';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import chatCodeIcon from '../../assets/icons/chat-code.svg';
import chatArrowIcon from '../../assets/icons/chat-arrow.svg';
import mobileLightningIcon from '../../assets/icons/mobile-lightning.svg';

const Services = () => {
  const services = [
    {
      icon: aiCircleIcon,
      title: 'Results-Driven Headlines',
      description: 'Each solution leads with quantifiable benefits that decision-makers care about – time savings, cost reductions, and revenue improvements.',
      color: 'purple'
    },
    {
      icon: networkIcon,
      title: 'Data-Backed Claims',
      description: 'The copy incorporates current market research showing that healthcare administrative costs consume up to 30% of total spending ($1 trillion annually), creating immediate relevance and urgency.',
      color: 'blue'
    },
    {
      icon: dashboardIcon,
      title: 'Pain Point Focus',
      description: 'Rather than leading with features, the copy emphasizes the costly problems your solutions solve – like the $85,000+ annual losses from manual prior authorization processes.',
      color: 'purple'
    },
    {
      icon: chatCodeIcon,
      title: 'Competitive Advantage',
      description: 'The content positions early AI adoption as a competitive necessity, highlighting that the AI healthcare market is growing at 36.83% CAGR.',
      color: 'blue'
    },
    {
      icon: chatArrowIcon,
      title: 'Social Proof Elements',
      description: 'References to market leaders and industry adoption rates to build credibility and reduce buying hesitation.',
      color: 'purple'
    },
    {
      icon: mobileLightningIcon,
      title: 'Specific ROI Metrics',
      description: 'Performance Gains:\n• Prior Authorization: 87%+ approvals, 60% faster\n• Document Processing: 33% CAGR, no manual entry\n• Scheduling: 300-500% ROI',
      color: 'blue'
    }
  ];

  return (
    <section id="services" className="services reveal-on-scroll">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <p className="section-category reveal-on-scroll">OUR SERVICES</p>
          <GlitchText 
            text="How We Can Help You"
            className="section-title help-title"
          />
          <p className="section-subtitle">
            We welcome opportunities to work alongside different teams over projects of any complexity
          </p>
        </div>
        
        <ScrollFadeElement className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card service-${service.color} reveal-on-scroll`}>
              <div className="service-header">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} className="icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </ScrollFadeElement>
        
        <div className="services-cta">
          <button className="btn btn-outline btn-large">Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Services;