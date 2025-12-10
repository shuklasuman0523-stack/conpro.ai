import React, { useEffect } from 'react';
import { HeroVideoBackground } from '../components/ui';
import '../styles/services-pages.css';

const ProductStrategy = () => {
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
                videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/6153734-uhd_4096_2160_25fps.mp4"
            >
                <div className="container">
                    <div className="service-hero-content">
                        <h1 className="service-hero-title">Strategize, Execute, and Scale Your AI Product Vision</h1>
                        <p className="service-hero-subtitle">
                            We transform ideas into well-planned, user-centric AI products with clear roadmaps and measurable outcomes.
                        </p>
                        <button onClick={openContact} className="btn-glow">Start Your Product Strategy</button>
                    </div>
                </div>
            </HeroVideoBackground>

            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">How We Help</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop" alt="Market & User Research" className="service-card-image" />
                            <h3 className="card-title">Market & User Research</h3>
                            <p className="card-text">Deep dive into user needs and market gaps to ensure your AI solution solves real problems.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop" alt="Feasibility Evaluation" className="service-card-image" />
                            <h3 className="card-title">Feasibility Evaluation</h3>
                            <p className="card-text">Technical assessment of AI capabilities required vs. available resources and data.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&auto=format&fit=crop" alt="End-to-End Roadmap" className="service-card-image" />
                            <h3 className="card-title">End-to-End Roadmap</h3>
                            <p className="card-text">Comprehensive planning from MVP to full-scale deployment with clear milestones.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop" alt="Product Leadership" className="service-card-image" />
                            <h3 className="card-title">Product Leadership</h3>
                            <p className="card-text">Cross-functional guidance aligning engineering, design, and business goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Our Strategy Framework</h2>
                    <div className="workflow-steps">
                        <div className="workflow-step">
                            <h3 className="step-title">Define</h3>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Validate</h3>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Build</h3>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Launch</h3>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Optimize</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Benefits</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop" alt="Clear Direction" className="service-card-image" />
                            <h3 className="card-title">Clear Direction</h3>
                            <p className="card-text">Unified vision that keeps the entire team aligned.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop" alt="Faster Time to Market" className="service-card-image" />
                            <h3 className="card-title">Faster Time to Market</h3>
                            <p className="card-text">Streamlined execution removing unnecessary delays.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop" alt="Optimized Cycles" className="service-card-image" />
                            <h3 className="card-title">Optimized Cycles</h3>
                            <p className="card-text">Efficient development sprints focused on high-value features.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop" alt="Better Collaboration" className="service-card-image" />
                            <h3 className="card-title">Better Collaboration</h3>
                            <p className="card-text">Bridging the gap between technical teams and stakeholders.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-section">
                <div className="container">
                    <h2 className="service-section-title">Ready to Build Something Great?</h2>
                    <button onClick={openContact} className="btn-glow">Start Your Product Strategy</button>
                </div>
            </div>
        </main>
    );
};

export default ProductStrategy;
