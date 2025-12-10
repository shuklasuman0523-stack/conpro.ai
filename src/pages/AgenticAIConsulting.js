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
            <HeroVideoBackground
                className="page-hero"
                videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/8328046-uhd_3840_2160_25fps.mp4"
            >
                <div className="container">
                    <div className="service-hero-content">
                        <h1 className="service-hero-title">Strategic AI Consulting to Transform Your Enterprise</h1>
                        <p className="service-hero-subtitle">
                            We help you adopt autonomous agents, automated workflows, and next-gen AI systems that scale with your business.
                        </p>
                        <button onClick={openContact} className="btn-glow">Book a Consultation</button>
                    </div>
                </div>
            </HeroVideoBackground>

            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">What We Do</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop" alt="AI Readiness Assessments" className="service-card-image" />
                            <h3 className="card-title">AI Readiness Assessments</h3>
                            <p className="card-text">Comprehensive evaluation of your data infrastructure, processes, and capabilities to determine AI maturity.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop" alt="Agentic Automation Strategy" className="service-card-image" />
                            <h3 className="card-title">Agentic Automation Strategy</h3>
                            <p className="card-text">Designing specialized autonomous agents that can plan, execute, and adapt to complex tasks independently.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop" alt="Workflow Analysis & Optimization" className="service-card-image" />
                            <h3 className="card-title">Workflow Analysis & Optimization</h3>
                            <p className="card-text">Mapping current workflows to identify bottlenecks where AI agents can drive maximum efficiency.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop" alt="Integration with Systems" className="service-card-image" />
                            <h3 className="card-title">Integration with Systems</h3>
                            <p className="card-text">Seamlessly connecting AI agents with your existing ERP, CRM, and cloud infrastructure.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Value We Deliver</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <ul className="check-list">
                                <li>Reduced operational bottlenecks through intelligent automation</li>
                                <li>Intelligent automation of complex work</li>
                                <li>Improved decision-making speed and accuracy</li>
                                <li>End-to-end setup of robust agent frameworks</li>
                            </ul>
                        </div>
                        <div className="service-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
                                alt="Value Delivery"
                                style={{ borderRadius: '1rem', width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Why Choose Us</h2>
                    <div className="workflow-steps">
                        <div className="workflow-step">
                            <h3 className="step-title">Multi-Agent Expertise</h3>
                            <p className="card-text">Deep knowledge in coordinating complex agent ecosystems</p>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Enterprise-Grade</h3>
                            <p className="card-text">Proven architectures that are secure and scalable</p>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Fast Deployment</h3>
                            <p className="card-text">Agile methodology ensuring quick time-to-value</p>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Measurable ROI</h3>
                            <p className="card-text">Focus on metrics that matter to your bottom line</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-section">
                <div className="container">
                    <h2 className="service-section-title">Ready to Transform Your Enterprise?</h2>
                    <button onClick={openContact} className="btn-glow">Book a Consultation</button>
                </div>
            </div>
        </main>
    );
};

export default AgenticAIConsulting;
