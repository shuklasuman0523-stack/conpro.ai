import React, { useEffect } from 'react';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#0f0f1a', color: '#fff', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title" style={{
                    marginBottom: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #7186FF 0%, #FE7587 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '3rem'
                }}>Terms & Conditions</h1>

                <div className="terms-content" style={{ maxWidth: '900px', margin: '0 auto', color: '#cbd5e1', lineHeight: '1.8' }}>

                    {/* Hero Image Card */}
                    <div className="card mb-5" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.05)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Legal Agreement"
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
                                        <span style={{ fontSize: '1.5rem' }}>⚖️</span> 1. Agreement to Terms
                                    </h2>
                                    <p>
                                        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ConPro.AI ("we," "us," or "our"), concerning your access to and use of the ConPro.AI website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                                    </p>
                                    <p>
                                        You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>🧠</span> 2. Intellectual Property Rights
                            </h2>
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap-reverse' }}>
                                <div style={{ flex: 1 }}>
                                    <p style={{ marginBottom: '1rem' }}>
                                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                                    </p>
                                    <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '1rem' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Content is accepted "AS IS" for your information.</li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>✅ No part of the Site may be copied or reproduced.</li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>✅ Strictly for personal, non-commercial use.</li>
                                    </ul>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=500&q=80"
                                    alt="Intellectual Property"
                                    style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }}
                                />
                            </div>
                        </section>

                        <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>👤</span> 3. User Representations
                            </h2>
                            <p>
                                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise.
                            </p>
                        </section>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                                <h2 style={{ color: '#8B5CF6', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🚫</span> 4. Prohibited Activities
                                </h2>
                                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                            </section>

                            <section className="card" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px' }}>
                                <h2 style={{ color: '#8B5CF6', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>⚠️</span> 5. Limitation of Liability
                                </h2>
                                <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.</p>
                            </section>
                        </div>

                        <section className="card" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(30, 30, 45, 0.4) 100%)', border: '1px solid rgba(139, 92, 246, 0.4)', borderRadius: '16px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Have Questions?</h2>
                                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Contact us regarding our Terms & Conditions.</p>
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

export default Terms;
