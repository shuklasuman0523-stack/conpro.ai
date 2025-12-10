import React, { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#0f0f1a', color: '#fff', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title" style={{
                    marginBottom: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #7186FF 0%, #FE7587 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '3rem'
                }}>Privacy Policy</h1>

                <div className="privacy-content" style={{ maxWidth: '900px', margin: '0 auto', color: '#cbd5e1', lineHeight: '1.8' }}>

                    {/* Hero Image Card */}
                    <div className="card mb-5" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.05)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Cybersecurity and Privacy"
                            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '2rem' }}>
                            <p style={{ marginBottom: '0', fontSize: '1.1rem' }}>Last updated: December 6, 2025</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>

                        <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ fontSize: '1.5rem' }}>👋</span> 1. Introduction
                                    </h2>
                                    <p>
                                        Welcome to ConPro.AI ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                                        If you have any questions or concerns about this privacy notice or our practices with regard to your personal information,
                                        please contact us at hello@conpro.ai.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>📊</span> 2. Information We Collect
                            </h2>
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap-reverse' }}>
                                <div style={{ flex: 1 }}>
                                    <p style={{ marginBottom: '1rem' }}>
                                        We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining
                                        information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                                    </p>
                                    <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '1rem' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Name and Contact Data (Email, Phone number)</li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Credentials (Passwords, Security information)</li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Payment Data (if applicable)</li>
                                    </ul>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=500&q=80"
                                    alt="Data Collection"
                                    style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }}
                                />
                            </div>
                        </section>

                        <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>🎯</span> 3. How We Use Your Information
                            </h2>
                            <p>
                                We use personal information collected via our website for a variety of business purposes described below. We process your
                                personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a
                                contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                        </section>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                                <h2 style={{ color: '#8B5CF6', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🤝</span> 4. Sharing Information
                                </h2>
                                <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                            </section>

                            <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                                <h2 style={{ color: '#8B5CF6', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🔒</span> 5. Security
                                </h2>
                                <p>We use administrative, technical, and physical security measures to help protect your personal information.</p>
                            </section>
                        </div>

                        <section className="card" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(30, 30, 45, 0.4) 100%)', border: '1px solid rgba(139, 92, 246, 0.4)', borderRadius: '16px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Have Questions?</h2>
                                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Contact us regarding any privacy concerns.</p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                                        <span>📧</span>
                                        <a href="mailto:hello@conpro.ai" style={{ color: '#8B5CF6', textDecoration: 'none' }}>hello@conpro.ai</a>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                                        <span>🏢</span>
                                        <span>USA & India</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
