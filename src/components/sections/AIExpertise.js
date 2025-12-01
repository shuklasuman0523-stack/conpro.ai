import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParallaxSection from '../ui/ParallaxSection';

import aiNetworkDiagram from '../../assets/images/ai-chatbot-diagram.png';

const AIExpertise = () => {
  const navigate = useNavigate();
  return (
    <section className="ai-expertise reveal-on-scroll dark-bg">
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
          <div className="expertise-text">
            <div className="section-header">
              <ParallaxSection speed={0.3} direction="up">
                <p className="section-category desktop-only reveal-on-scroll">OUR AI EXPERTISE</p>
              </ParallaxSection>
              <h2 className="section-title ai-expertise-title reveal-on-scroll">
                customer service interactions<br />
                were responded to by chatbots
              </h2>
              <p className="section-description reveal-on-scroll">
                Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus. Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.
              </p>
              <button
                className="btn btn-outline btn-large learn-more-btn reveal-on-scroll"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('.resources');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    return;
                  }
                  // fallback to blog route
                  navigate('/blogs');
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;