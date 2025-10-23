import React from 'react';
import ParallaxSection from '../ui/ParallaxSection';
import ScrollFadeElement from '../ui/ScrollFadeElement';
import aiNetworkDiagram from '../../assets/images/ai-chatbot-diagram.png';

const AIExpertise = () => {
  return (
    <section className="ai-expertise reveal-on-scroll">
      <div className="container">
        {/* Mobile heading above image */}
        <div className="mobile-ai-expertise-heading">
          <ParallaxSection speed={0.3} direction="up">
            <p className="section-category reveal-on-scroll">OUR AI EXPERTISE</p>
          </ParallaxSection>
        </div>
        <div className="expertise-content">
          <ParallaxSection speed={0.2} direction="up" className="ai-diagram">
            {/* Replace with your AI network diagram image */}
            <div className="ai-network-image reveal-on-scroll">
              <img 
                src={aiNetworkDiagram} 
                alt="AI Network Diagram" 
                className="network-diagram"
              />
            </div>
          </ParallaxSection>
          <ScrollFadeElement className="expertise-text">
            <div className="section-header">
              <ParallaxSection speed={0.3} direction="up">
                <p className="section-category desktop-only reveal-on-scroll">OUR AI EXPERTISE</p>
              </ParallaxSection>
              <h2 className="section-title ai-expertise-title reveal-on-scroll">
                Customer service interactions<br />
                were responded to by chatbots
              </h2>
              <p className="section-description reveal-on-scroll">
              Agentic AI chatbots intelligently handle patient inquiries, appointment scheduling, and routine follow-ups with natural, context-aware communication.
              They go beyond scripted replies — understanding intent, adapting to medical terminology, and autonomously taking actions such as confirming visits or escalating urgent cases to staff.
              This ensures faster response times, reduced administrative load, and a more personalized patient experience.
              </p>
              <button className="btn btn-outline btn-large learn-more-btn reveal-on-scroll" onClick={() => {
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}>
                Learn More
              </button>
            </div>
          </ScrollFadeElement>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;