import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      image: '👩‍💼',
      description: 'PhD in AI from MIT, former Google AI researcher'
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO & Co-Founder',
      image: '👨‍💻',
      description: 'Expert in ML systems, ex-Tesla Autopilot team'
    },
    {
      name: 'Maya Patel',
      role: 'Head of AI Research',
      image: '👩‍🔬',
      description: 'Published researcher in neural networks and deep learning'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '$12.5M+', label: 'Client Savings' },
    { number: '98%', label: 'Retention Rate' },
    { number: '250+', label: 'AI Experts' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About ConPro.AI</h2>
            <p className="about-description">
              Founded in 2020 by Dr. Sarah Chen and Alex Rodriguez, ConPro.AI was born from a simple yet powerful vision: 
              to bridge the gap between cutting-edge AI technology and practical business application. Today, we're a 
              global leader in enterprise AI solutions, serving 500+ organizations across healthcare, finance, retail, 
              manufacturing, and logistics.
            </p>
            <p className="about-description">
              Our platform delivers measurable results—reducing operational costs by 40-60%, accelerating critical processes 
              by up to 73%, and generating an average ROI of 300-500%. We believe AI should augment human intelligence, 
              not replace it, which is why our solutions are designed to empower your team with intelligent automation 
              while keeping humans in control of strategic decisions.
            </p>
            <p className="about-description">
              With offices in San Francisco, New York, London, and Singapore, we combine world-class AI research with 
              deep industry expertise to solve real business problems. Our 98% client retention rate speaks to our 
              commitment to delivering lasting value, not just impressive technology.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="ai-network">
              <div className="network-node main-node">
                <div className="node-pulse"></div>
                AI
              </div>
              <div className="network-node node-1">ML</div>
              <div className="network-node node-2">Data</div>
              <div className="network-node node-3">Auto</div>
              <div className="network-node node-4">Pred</div>
              <div className="connection con-1"></div>
              <div className="connection con-2"></div>
              <div className="connection con-3"></div>
              <div className="connection con-4"></div>
            </div>
          </div>
        </div>
        
        <div className="team-section">
          <h3 className="team-title">Meet Our Leadership Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">{member.image}</div>
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mission-section">
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              To democratize artificial intelligence by creating solutions powerful enough for Fortune 500 companies, 
              yet accessible enough for mid-market businesses. We're accelerating human progress by making AI practical, 
              ethical, and profitable—empowering every organization to compete in an AI-driven world while maintaining 
              the human touch that makes businesses unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;