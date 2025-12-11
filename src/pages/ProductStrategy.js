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
            {/* Hero Section */}
            <HeroVideoBackground
                className="page-hero"
                videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/6153734-uhd_4096_2160_25fps.mp4"
            >
                <div className="container">
                    <div className="service-hero-content">
                        <h1 className="service-hero-title">Build AI Products That Actually Make an Impact</h1>
                        <p className="service-hero-subtitle">
                            From idea to execution, we help teams plan, design, and manage AI products that solve real problems and scale efficiently.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                            <button onClick={openContact} className="btn-glow">Book Strategy Session</button>
                            <button className="btn-glow" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.2)' }}>
                                See Our Process
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
                            <h3 className="card-title">📌 Product Vision & Strategy</h3>
                            <p className="card-text">Turn raw ideas into clear product direction aligned with user needs and market demand.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 Roadmapping & Prioritization</h3>
                            <p className="card-text">Structured short-term & long-term roadmaps that outline features, impact, and timelines.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 End-to-End Product Management</h3>
                            <p className="card-text">Sprint planning, requirement gathering, cross-team coordination, and progress tracking.</p>
                        </div>
                        <div className="service-card">
                            <h3 className="card-title">📌 AI Feature Integration</h3>
                            <p className="card-text">Identify and integrate AI capabilities that enhance user experience and solve meaningful problems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Strategy Showcase */}
            <section className="service-section" style={{ padding: '0 0 5rem 0' }}>
                <div className="container">
                    <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
                            alt="Product Roadmap"
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
                                "Clarity-driven plans to guide your AI product from concept to launch."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Product Strategy Matters */}
            <section className="service-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="service-section-title">Why Product Strategy Matters</h2>
                    <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">🎯</div>
                            <h3 className="card-title">Clear Direction</h3>
                            <p className="card-text">Avoid random features and build what users truly need.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">🚀</div>
                            <h3 className="card-title">Faster Execution</h3>
                            <p className="card-text">Structured planning that speeds up development cycles.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">📈</div>
                            <h3 className="card-title">Better Business Outcomes</h3>
                            <p className="card-text">Every feature maps to market demand and revenue opportunities.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div className="card-icon">🧩</div>
                            <h3 className="card-title">Aligned Teams</h3>
                            <p className="card-text">Bring engineering, design, and business teams onto one shared path.</p>
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
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                                alt="Team discussing roadmap"
                                style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <ul className="check-list" style={{ fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <li>AI startups refining their product</li>
                                <li>Enterprises launching new AI initiatives</li>
                                <li>Founders validating product-market fit</li>
                                <li>Teams struggling with planning or execution</li>
                                <li>Businesses building their first AI-powered solution</li>
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
                            <h3 className="step-title">Discover</h3>
                            <p className="card-text">Market research, user insights, use-case exploration</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">02</span>
                            <h3 className="step-title">Define</h3>
                            <p className="card-text">Product vision, success metrics, and roadmap</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">03</span>
                            <h3 className="step-title">Build</h3>
                            <p className="card-text">Feature planning, specs, sprint execution</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">04</span>
                            <h3 className="step-title">Iterate</h3>
                            <p className="card-text">Feedback loops, analytics, and continuous optimization</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study / Prototype Showcase */}
            <section className="service-section">
                <div className="container">
                    <h2 className="service-section-title">Case Study / Prototype Showcase</h2>
                    <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                        We help you build smarter and faster with structured product frameworks.
                    </p>
                    <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80" alt="Sample roadmap" className="service-card-image" />
                            <h3 className="card-title">Sample Roadmap</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=500&q=80" alt="UI wireframes" className="service-card-image" />
                            <h3 className="card-title">UI Wireframes</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80" alt="Sprint planning boards" className="service-card-image" />
                            <h3 className="card-title">Sprint Planning Boards</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <div className="cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80"
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
                        <h2 className="service-section-title" style={{ marginBottom: '1.5rem' }}>Let’s Build a Winning AI Product</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                            Turn your AI product idea into a market-ready, scalable, and high-impact solution with expert strategy and management.
                        </p>
                        <button onClick={openContact} className="btn-glow">Book Strategy Session</button>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>👉 Ready to start? Let’s talk.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductStrategy;
