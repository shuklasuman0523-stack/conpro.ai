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
            {/* Hero Section */}
            <HeroVideoBackground
                className="page-hero"
                videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/855411-hd_1920_1080_25fps.mp4"
            >
                <div className="container">
                    <div className="service-hero-content">
                        <h1 className="service-hero-title">Build AI Products That Scale With Your Vision</h1>
                        <p className="service-hero-subtitle">
                            From architecture to deployment, we develop reliable, secure, and production-ready AI solutions tailored to your business needs.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                            <button onClick={openContact} className="btn-glow">Start Your Project</button>
                            <button className="btn-glow" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.2)' }}>
                                View Capabilities
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
                            <h3 className="card-title">📌 Full-Stack AI Development</h3>
                            <p className="card-text">Custom AI systems built using modern LLMs, machine learning pipelines, APIs, and cloud infrastructure.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 System Architecture & Design</h3>
                            <p className="card-text">Blueprints and technical foundations for scalable, secure, high-performance AI applications.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 Integrations & Automation</h3>
                            <p className="card-text">Seamless integration with databases, CRMs, ERPs, IoT devices, and enterprise systems.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 Deployment & Maintenance</h3>
                            <p className="card-text">CI/CD setup, monitoring, optimization, post-deployment support, and continuous improvements.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Tech Showcase */}
            <section className="service-section" style={{ padding: '0 0 5rem 0' }}>
                <div className="container">
                    <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                            alt="Cloud architecture diagram"
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
                                "Robust engineering that powers the next generation of intelligent products."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Our Development Services Stand Out */}
            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Why Our Development Services Stand Out</h2>
                    <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">⚙️</div>
                            <h3 className="card-title">High Scalability</h3>
                            <p className="card-text">Systems designed to handle real-world load and fast-growing user bases.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">🔐</div>
                            <h3 className="card-title">Enterprise-Grade Security</h3>
                            <p className="card-text">Secure coding, encrypted pipelines, and compliance-friendly deployment.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">⚡</div>
                            <h3 className="card-title">Lightning Performance</h3>
                            <p className="card-text">Optimized models, efficient APIs, and fast response times.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">🛠️</div>
                            <h3 className="card-title">Future-Proof Architecture</h3>
                            <p className="card-text">Modular, upgrade-ready structures that adapt as your product evolves.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Who This Is For</h2>
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
                                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                                alt="Developers writing code"
                                style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <ul className="check-list" style={{ fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <li>Startups building their MVP</li>
                                <li>Enterprises modernizing systems</li>
                                <li>AI product teams needing engineering support</li>
                                <li>Founders scaling prototypes into production</li>
                                <li>Businesses integrating AI into existing platforms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Development Process */}
            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Our Development Process</h2>
                    <div className="workflow-steps">
                        <div className="workflow-step">
                            <span className="step-number">01</span>
                            <h3 className="step-title">Plan</h3>
                            <p className="card-text">Requirement analysis, architecture design</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">02</span>
                            <h3 className="step-title">Build</h3>
                            <p className="card-text">Full-stack development, model integration</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">03</span>
                            <h3 className="step-title">Test</h3>
                            <p className="card-text">QA, load testing, security checks</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">04</span>
                            <h3 className="step-title">Deploy</h3>
                            <p className="card-text">Cloud deployment, monitoring</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">05</span>
                            <h3 className="step-title">Scale</h3>
                            <p className="card-text">Ongoing optimization, support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Showcase */}
            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Project Showcase</h2>
                    <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                        Engineered to perform. Designed to scale.
                    </p>
                    <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=500&q=80" alt="App interfaces" className="service-card-image" />
                            <h3 className="card-title">App Interfaces</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.WPiO40WS9yi8SibxajBE1gHaEO?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Backend architecture" className="service-card-image" />
                            <h3 className="card-title">Backend Architecture</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80" alt="Performance dashboards" className="service-card-image" />
                            <h3 className="card-title">Performance Dashboards</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <div className="cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&h=200&q=80"
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
                        <h2 className="service-section-title" style={{ marginBottom: '1.5rem' }}>Let’s Build Your AI Product Together</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                            Whether you're launching your first AI solution or scaling a mature product, our expert engineering team turns your vision into a secure, production-ready reality.
                        </p>
                        <button onClick={openContact} className="btn-glow">Start Your Project</button>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>👉 Ready to build? Let’s collaborate.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDevelopment;
