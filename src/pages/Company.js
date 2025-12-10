import React from 'react';
import { HeroVideoBackground } from '../components/ui';
import '../styles/company.css';

const Company = () => {
  const timeline = [



    {
      year: '2020',
      title: 'Foundation',
      description: 'ConPro.AI founded by Ashish and Dr. Sarah Chen, leveraging over 18 years of applied AI experience to democratize intelligent solutions.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured partnership with MidAtlantic Health System, delivering $1.8M in annual savings through AI-powered prior authorization.'
    },
    {
      year: '2023',
      title: 'Market Expansion',
      description: 'Expanded into financial services and retail sectors. Crossed 200 enterprise clients milestone.'
    },
    {
      year: '2024',
      title: 'Global Presence',
      description: 'Opened offices in London and Singapore. Launched AI solutions in 12 additional industries.'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Surpassed 500 clients, $12.5M+ in total client savings. Named "AI Innovator of the Year" by TechCrunch.'
    }
  ];

  const leadership = [
    {
      name: 'Ashish',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'Visionary leader with 18+ years of experience driving AI innovation and enterprise transformation.',
      linkedin: '#'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Co-Founder & Chief Scientist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'PhD in Artificial Intelligence from MIT. Former lead researcher at Google AI, where she pioneered neural network architectures for healthcare applications.',
      linkedin: '#'
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'Expert in machine learning systems and autonomous technology. Previously led engineering at Tesla Autopilot team. MS in Computer Science from Stanford University.',
      linkedin: '#'
    },
    {
      name: 'Maya Patel',
      role: 'Head of AI Research',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'PhD in Deep Learning from Carnegie Mellon. Renowned researcher in neural networks and reinforcement learning. Former principal scientist at Amazon AI.',
      linkedin: '#'
    },
    {
      name: 'Michael Torres',
      role: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'MBA from Harvard Business School. 15+ years scaling enterprise software companies. Previously COO at DataRobot, growing revenue from $50M to $300M.',
      linkedin: '#'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'MD from Johns Hopkins, board-certified in Internal Medicine. Former Chief Innovation Officer at Kaiser Permanente, leading digital health transformation.',
      linkedin: '#'
    },
    {
      name: 'Robert Chen',
      role: 'VP of Product',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format',
      bio: 'Former Director of Product at Salesforce Einstein AI. Led product teams that delivered AI solutions serving 50M+ users. BS in Computer Science from UC Berkeley.',
      linkedin: '#'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Customer-First Innovation',
      description: 'Every product decision starts with understanding and solving real customer problems. We measure success by the value we deliver, not the technology we deploy.'
    },
    {
      icon: '🔬',
      title: 'Scientific Rigor',
      description: 'Our solutions are built on peer-reviewed research and validated through rigorous testing. We never compromise on accuracy or reliability.'
    },
    {
      icon: '🤝',
      title: 'Ethical AI',
      description: 'We believe AI should augment human intelligence, not replace it. Transparency, fairness, and privacy are non-negotiable in every solution we build.'
    },
    {
      icon: '🌱',
      title: 'Continuous Learning',
      description: 'The AI field evolves rapidly. We invest heavily in research, training, and staying at the cutting edge of technology and best practices.'
    },
    {
      icon: '💪',
      title: 'Operational Excellence',
      description: 'World-class technology requires world-class execution. We obsess over details, from implementation to support to continuous improvement.'
    },
    {
      icon: '🌍',
      title: 'Inclusive Impact',
      description: 'AI benefits should be accessible to all. We work with organizations of every size and actively contribute to open-source AI communities.'
    }
  ];

  const awards = [
    { year: '2025', award: 'AI Innovator of the Year - TechCrunch Disrupt' },
    { year: '2025', award: 'Best Healthcare AI Solution - HIMSS Innovation Award' },
    { year: '2024', award: 'Top 50 AI Companies - Forbes AI 50' },
    { year: '2024', award: 'Gartner Cool Vendor in AI for Business' },
    { year: '2023', award: 'Breakthrough Product of the Year - AI World Series' },
    { year: '2023', award: 'Best Enterprise AI Platform - VentureBeat AI Excellence' }
  ];

  const offices = [
    {
      city: 'USA',
      type: 'Global Headquarters',
      address: 'San Francisco, CA',
      employees: '100+'
    },
    {
      city: 'India',
      type: 'Innovation Hub',
      address: 'Bangalore, India',
      employees: '150+'
    }
  ];

  return (
    <main className="company-page">
      <div>
        <HeroVideoBackground
          className="page-hero company-hero"
          videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/6153734-uhd_4096_2160_25fps.mp4"
        >
          <div className="container">
            <p className="section-badge">ABOUT CONPRO.AI</p>
            <h1 className="section-title">Building the Future of Intelligent Business</h1>
            <p className="section-subtitle">
              We're on a mission to make advanced AI accessible, reliable, and transformative
              for organizations worldwide
            </p>
          </div>
        </HeroVideoBackground>
      </div>

      <div>
        <section className="company-mission">
          <div className="container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-statement">
                To democratize artificial intelligence by creating solutions that are powerful
                enough for the Fortune 500, yet accessible enough for mid-market businesses—empowering
                every organization to make better decisions, work more efficiently, and unlock
                new possibilities for innovation.
              </p>
              <div className="mission-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Enterprise Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">$12.5M+</span>
                  <span className="stat-label">Client Savings Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Retention Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Team Members</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="company-story">
          <div className="container">
            <h2>Our Story</h2>
            <p className="story-intro">
              ConPro.AI was born from a simple observation: while AI technology was advancing
              rapidly, most businesses couldn't effectively leverage it. Complex implementations,
              astronomical costs, and lack of domain expertise created a massive gap between
              AI's potential and its practical application.
            </p>
            <p className="story-intro">
              Our founder Ashish, along with Dr. Sarah Chen, saw an opportunity to bridge this gap.
              With over 18 years of experience in AI and enterprise transformation, they assembled a
              world-class team to build solutions that are practical, accessible, and results-driven.
            </p>
          </div>
        </section>
      </div>

      <div>
        <section className="company-timeline">
          <div className="container">
            <h2>Our Journey</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="company-values">
          <div className="container">
            <h2>Our Values</h2>
            <p className="section-intro">
              These principles guide every decision we make, from product development to customer support
            </p>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="company-leadership">
          <div className="container">
            <h2>Leadership Team</h2>
            <p className="section-intro">
              World-class expertise in AI, engineering, and business operations
            </p>
            <div className="leadership-grid">
              {leadership.map((leader, index) => (
                <div key={index} className="leader-card">
                  <span className="leader-image">
                    <img src={leader.image} alt={leader.name} />
                  </span>
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="company-awards">
          <div className="container">
            <h2>Recognition & Awards</h2>
            <div className="awards-list">
              {awards.map((award, index) => (
                <div key={index} className="award-item">
                  <span className="award-year">{award.year}</span>
                  <span className="award-name">{award.award}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="company-offices">
          <div className="container">
            <h2>Global Presence</h2>
            <div className="offices-grid">
              {offices.map((office, index) => (
                <div key={index} className="office-card">
                  <h3>{office.city}</h3>
                  <p className="office-type">{office.type}</p>
                  <p className="office-address">{office.address}</p>
                  <p className="office-employees">{office.employees} team members</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="company-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Join Us on This Journey</h2>
              <p>
                Whether you're looking to transform your business with AI or want to be part of
                building the future, we'd love to hear from you.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => {
                    if (typeof window.openContactModal === 'function') {
                      window.openContactModal();
                    } else {
                      window.dispatchEvent(new Event('openContactModal'));
                    }
                  }}
                >
                  Get Started
                </button>
                <button className="btn-secondary">
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Company;
