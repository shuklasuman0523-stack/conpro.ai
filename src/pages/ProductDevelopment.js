import React, { useEffect } from 'react';
import { HeroVideoBackground } from '../components/ui';
import '../styles/services-pages.css';

const ProductDevelopment = () => {
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
                videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/855411-hd_1920_1080_25fps.mp4"
            >
                <div className="container">
                    <div className="service-hero-content">
                        <h1 className="service-hero-title">Build Intelligent Products with Reliable Engineering</h1>
                        <p className="service-hero-subtitle">
                            From prototypes to production systems, we deliver robust AI solutions built for real-world scale.
                        </p>
                        <button onClick={openContact} className="btn-glow">Build Your AI Product</button>
                    </div>
                </div>
            </HeroVideoBackground>

            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">What We Build</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop" alt="AI-Powered Apps" className="service-card-image" />
                            <h3 className="card-title">AI-Powered Apps</h3>
                            <p className="card-text">Web and mobile applications integrated with cutting-edge AI capabilities.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&auto=format&fit=crop" alt="Multi-Agent Systems" className="service-card-image" />
                            <h3 className="card-title">Multi-Agent Systems</h3>
                            <p className="card-text">Complex ecosystems where autonomous agents collaborate to solve problems.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1558494949-ef5260237f1f?w=500&auto=format&fit=crop" alt="Data Pipelines" className="service-card-image" />
                            <h3 className="card-title">Data Pipelines</h3>
                            <p className="card-text">Robust infrastructure for data collection, processing, and ML model training.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop" alt="Enterprise Solutions" className="service-card-image" />
                            <h3 className="card-title">Enterprise Solutions</h3>
                            <p className="card-text">Secure, scalable internal tools tailored for large organizations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Engineering Principles</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop" alt="Scalability" className="service-card-image" />
                            <h3 className="card-title">Scalability</h3>
                            <p className="card-text">Architectures designed to grow seamlessly with your user base.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop" alt="Security" className="service-card-image" />
                            <h3 className="card-title">Security</h3>
                            <p className="card-text">Enterprise-grade security standards and data protection measures.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop" alt="Performance" className="service-card-image" />
                            <h3 className="card-title">Performance</h3>
                            <p className="card-text">Optimized code and resources for lightning-fast response times.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop" alt="Maintainability" className="service-card-image" />
                            <h3 className="card-title">Maintainability</h3>
                            <p className="card-text">Clean, documented code that is easy to update and extend.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Development Workflow</h2>
                    <div className="workflow-steps">
                        <div className="workflow-step">
                            <h3 className="step-title">Architecture Design</h3>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Agile Development</h3>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">QA & Testing</h3>
                        </div>
                        <div className="workflow-step">
                            <h3 className="step-title">Launch & Support</h3>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-section">
                <div className="container">
                    <h2 className="service-section-title">Ready to Engineer the Future?</h2>
                    <button onClick={openContact} className="btn-glow">Build Your AI Product</button>
                </div>
            </div>
        </main>
    );
};

export default ProductDevelopment;
