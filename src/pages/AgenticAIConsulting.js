import React, { useEffect } from 'react';
import { HeroVideoBackground } from '../components/ui';
import '../styles/services-pages.css';

const AgenticAIConsulting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openContact = () => {
        if (typeof window.openContactModal === 'function') {
            window.openContactModal();
        } else {
            window.dispatchEvent(new Event('openContactModal'));
        }
    };

    return (
        <main className="service-page">
            {/* Hero Section */}
            <HeroVideoBackground
                className="page-hero"
                videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/8328046-uhd_3840_2160_25fps.mp4"
            >
                <div className="container">
                    <div className="service-hero-content">
                        <h1 className="service-hero-title">Unlock the Future of Work With Agentic AI</h1>
                        <p className="service-hero-subtitle">
                            Transform your business using autonomous AI systems designed to plan, reason, and execute tasks intelligently.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                            <button onClick={openContact} className="btn-glow">Book a Consultation</button>
                            <button className="btn-glow" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.2)' }}>
                                Explore Use-Cases
                            </button>
                        </div>
                    </div>
                </div>
            </HeroVideoBackground>

            {/* What We Offer */}
            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">What We Offer</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <h3 className="card-title">📌 AI Readiness Assessment</h3>
                            <p className="card-text">Evaluate your workflows, data systems, and automation potential to spot high-impact AI agent opportunities.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 Strategy & Roadmap</h3>
                            <p className="card-text">Clear, actionable adoption plan designed around your goals, budget, and long-term vision.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 Agent Architecture Design</h3>
                            <p className="card-text">Custom designs for workflow agents, customer service agents, sales agents, research agents, and more.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 Implementation Guidance</h3>
                            <p className="card-text">Tech stack recommendations + step-by-step support to integrate autonomous agents efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Showcase Section */}
            <section className="service-section" style={{ padding: '0 0 5rem 0' }}>
                <div className="container">
                    <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                            alt="Architecture diagram of autonomous agents"
                            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            background: 'rgba(15, 23, 42, 0.9)',
                            padding: '1.5rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <p style={{ textAlign: 'center', color: '#94a3b8', margin: 0, fontSize: '1.1rem' }}>
                                "Blueprints crafted for reliability, scalability, and real-world performance."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Agentic AI Matters */}
            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Why Agentic AI Matters</h2>
                    <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">⚡</div>
                            <h3 className="card-title">Speed & Efficiency</h3>
                            <p className="card-text">Automate multi-step workflows and decision-making.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">💼</div>
                            <h3 className="card-title">Lower Operational Load</h3>
                            <p className="card-text">Reduce repetitive tasks and boost productivity across departments.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">📊</div>
                            <h3 className="card-title">Data-Driven Action</h3>
                            <p className="card-text">Agents analyze, plan, and execute without manual input.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">🚀</div>
                            <h3 className="card-title">Competitive Advantage</h3>
                            <p className="card-text">Adopt AI-native systems ahead of your competitors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Who We Serve</h2>
                    <div style={{
                        display: 'flex',
                        gap: '4rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        background: 'var(--surface-card)',
                        borderRadius: '1rem',
                        padding: '2rem',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                                alt="Business team using laptops"
                                style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <ul className="check-list" style={{ fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <li>Startups exploring automation</li>
                                <li>Growing businesses building AI capabilities</li>
                                <li>Enterprises scaling intelligent systems</li>
                                <li>Product teams building AI-native applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Our Approach</h2>
                    <div className="workflow-steps">
                        <div className="workflow-step">
                            <span className="step-number">01</span>
                            <h3 className="step-title">Understand</h3>
                            <p className="card-text">Deep dive into your business needs</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">02</span>
                            <h3 className="step-title">Design</h3>
                            <p className="card-text">Agent architecture & workflow mapping</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">03</span>
                            <h3 className="step-title">Validate</h3>
                            <p className="card-text">Build prototypes & POCs</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">04</span>
                            <h3 className="step-title">Scale</h3>
                            <p className="card-text">Deploy enterprise-ready agentic systems</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prototype Showcase */}
            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Prototype Showcase</h2>
                    <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                        We help you build and validate before scaling.
                    </p>
                    <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80" alt="AI workflow demo" className="service-card-image" />
                            <h3 className="card-title">AI Workflow Demo</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=500&q=80" alt="Agent conversation sample" className="service-card-image" />
                            <h3 className="card-title">Agent Conversation Sample</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=500&q=80" alt="System architecture preview" className="service-card-image" />
                            <h3 className="card-title">System Architecture Preview</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <div className="cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=200&q=80"
                            alt="Team"
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '2rem',
                                border: '3px solid var(--accent-purple)'
                            }}
                        />
                        <h2 className="service-section-title" style={{ marginBottom: '1.5rem' }}>Let’s Build Your Autonomous Future</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                            Whether you're just starting or scaling advanced systems, we help you unlock the full power of agentic AI for your enterprise.
                        </p>
                        <button onClick={openContact} className="btn-glow">Book a Consultation</button>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>👉 Ready to explore? Let’s talk.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AgenticAIConsulting;
