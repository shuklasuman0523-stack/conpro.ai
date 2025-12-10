import React, { useState } from 'react';

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const teamMembers = [
    {
      name: 'Ashish',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
      description: 'Visionary leader with 18+ years of experience driving AI innovation and enterprise transformation.'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Co-Founder & Chief Scientist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
      description: 'PhD in AI from MIT, specializing in Agentic AI and neural systems.'
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format',
      description: 'Expert in scalable ML infrastructure and product engineering.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '$12.5M+', label: 'Client Savings' },
    { number: '98%', label: 'Retention Rate' },
    { number: '250+', label: 'AI Experts' }
  ];

  return (
    <section id="about" className="about dark-bg">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p className="about-description">
              With over 18 years of applied experience, ConPro.AI establishes itself as a pioneer in the industry.
              We bridge the gap between cutting-edge Agentic AI technology and practical business application. Today, we're a
              global leader in enterprise AI solutions, serving organizations worldwide across healthcare, finance, retail,
              manufacturing, and logistics.
            </p>
            <p className="about-description">
              Our platform delivers measurable results—reducing operational costs by 40-60%, accelerating critical processes
              by up to 73%, and generating an average ROI of 300-500%. We believe AI should augment human intelligence,
              not replace it, which is why our solutions are designed to empower your team with intelligent automation
              while keeping humans in control of strategic decisions.
            </p>
            <p className="about-description">
              With strategic offices in the USA and India, we combine world-class AI research with
              deep industry expertise to solve real business problems. Our client retention rate speaks to our
              commitment to delivering lasting value, not just impressive technology.
            </p>

            
          </div>

          <div className="about-visual">
            <div className="ai-network">
              <svg className="connection-svg" viewBox="0 0 400 400">
                <line x1="200" y1="200" x2="60" y2="60" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.3" />
                <line x1="200" y1="200" x2="340" y2="60" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.3" />
                <line x1="200" y1="200" x2="60" y2="340" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.3" />
                <line x1="200" y1="200" x2="340" y2="340" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.3" />
              </svg>

              <div className="central-bot">
                <div className="bot-icon">
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>AI</span>
                </div>
              </div>

              <div className="ai-node top-left">
                <div className="node-circle" style={{ background: 'rgba(30,30,45,0.8)', border: '1px solid #8B5CF6' }}>
                  <span style={{ color: '#94A3B8', fontWeight: '600' }}>ML</span>
                </div>
              </div>
              <div className="ai-node top-right">
                <div className="node-circle" style={{ background: 'rgba(30,30,45,0.8)', border: '1px solid #8B5CF6' }}>
                  <span style={{ color: '#94A3B8', fontWeight: '600' }}>Data</span>
                </div>
              </div>
              <div className="ai-node bottom-left">
                <div className="node-circle" style={{ background: 'rgba(30,30,45,0.8)', border: '1px solid #8B5CF6' }}>
                  <span style={{ color: '#94A3B8', fontWeight: '600' }}>Auto</span>
                </div>
              </div>
              <div className="ai-node bottom-right">
                <div className="node-circle" style={{ background: 'rgba(30,30,45,0.8)', border: '1px solid #8B5CF6' }}>
                  <span style={{ color: '#94A3B8', fontWeight: '600' }}>Pred</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Meet Our Leadership Team</h3>
          <div className="team-slider-container">
            <button
              className="slider-btn prev-btn"
              onClick={() => {
                const newIndex = activeSlide === 0 ? teamMembers.length - 1 : activeSlide - 1;
                setActiveSlide(newIndex);
              }}
            >
              ←
            </button>

            <div className="team-slider">
              <div
                className="team-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-slide">
                    <div className="team-card">
                      <div className="member-avatar">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <h4 className="member-name">{member.name}</h4>
                      <p className="member-role">{member.role}</p>
                      <p className="member-description">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="slider-btn next-btn"
              onClick={() => {
                const newIndex = activeSlide === teamMembers.length - 1 ? 0 : activeSlide + 1;
                setActiveSlide(newIndex);
              }}
            >
              →
            </button>
          </div>

          <div className="slider-dots">
            {teamMembers.map((_, index) => (
              <span
                key={index}
                className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="mission-section" style={{ marginTop: '5rem' }}>
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              To democratize Agentic AI by creating solutions powerful enough for Fortune 500 companies,
              yet accessible enough for mid-market businesses. We're accelerating human progress by making AI practical,
              autonomous, and profitable—empowering every organization to compete in an AI-driven world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;