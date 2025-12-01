import React, { useState } from 'react';
import ParallaxSection from '../components/ui/ParallaxSection';
import { HeroVideoBackground } from '../components/ui';
import emailjs from 'emailjs-com';
import '../styles/careers.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    resume: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Option A: Use EmailJS if configured
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    // If EmailJS credentials are not set, just simulate submission
    if (serviceID === 'YOUR_SERVICE_ID') {
      console.log('Careers form submitted (local):', formData);
      alert('Thank you — we received your application. We will reach out if there is a match.');
      setFormData({ name: '', email: '', position: '', resume: null, message: '' });
      setIsSubmitting(false);
      return;
    }

    // Prepare payload (note: sending files via EmailJS requires a hosted file or base64 handling)
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      position: formData.position,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((res) => {
        console.log('EmailJS success', res.status, res.text);
        alert('Application sent — thank you!');
        setFormData({ name: '', email: '', position: '', resume: null, message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error', err);
        alert('Failed to send application. Please try again later.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <main className="careers-page">
      <HeroVideoBackground className="page-hero">
        <div className="container">
          <h1 className="section-title">Careers at ConPro.AI</h1>
          <p className="section-subtitle">We're building the future of AI in enterprise — come join us.</p>
        </div>
      </HeroVideoBackground>

      <section className="careers-content container">
        <div className="careers-intro">
          <h2>Open Positions</h2>
          <p>Check our open roles and submit your application below. If you don't see a role that fits, send us your resume and we'll keep it on file.</p>
        </div>

        <div className="careers-form-wrapper">
          <form className="careers-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position Applying For</label>
              <input id="position" name="position" value={formData.position} onChange={handleChange} placeholder="e.g., Senior ML Engineer" />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume (optional)</label>
              <input id="resume" name="resume" type="file" onChange={handleChange} accept=".pdf,.doc,.docx" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Cover Note</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary contact-btn contact-btn-white" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Submit Application'}</button>
            </div>
          </form>
        </div>
      </section>
      {/* Footer copied from Home to reuse site footer */}
      <footer className="footer reveal-on-scroll">
        <div className="container">
          <div className="footer-content">
            <ParallaxSection speed={0.1} direction="up" className="footer-brand">
              <div className="footer-logo-container reveal-on-scroll">
                <span className="footer-logo">ConPro</span><span className="footer-logo-accent">.AI</span>
              </div>
              <div className="footer-social reveal-on-scroll">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </ParallaxSection>

            <div className="footer-links">
              <ParallaxSection speed={0.05} direction="up" className="footer-section">
                <h4 className="footer-title reveal-on-scroll">Company</h4>
                <ul className="footer-list">
                  <li><a href="#about" className="footer-link reveal-on-scroll" onClick={(e) => { e.preventDefault(); const el = document.getElementById('about') || document.querySelector('.about'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; } window.location.href = '/about'; }}>About us</a></li>
                  <li><a href="#contact" className="footer-link reveal-on-scroll" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openContactModal')); }}>Contact us</a></li>
                  <li><a href="/careers" className="footer-link reveal-on-scroll">Careers</a></li>
                  <li><a href="#blogs" className="footer-link reveal-on-scroll" onClick={(e) => { e.preventDefault(); const el = document.querySelector('.resources'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; } window.location.href = '/blogs'; }}>Blogs</a></li>
                </ul>
              </ParallaxSection>

              <ParallaxSection speed={0.08} direction="up" className="footer-section">
                <h4 className="footer-title reveal-on-scroll">Product</h4>
                <ul className="footer-list">
                </ul>
              </ParallaxSection>

              <ParallaxSection speed={0.12} direction="up" className="footer-section">
                <h4 className="footer-title reveal-on-scroll">Legal</h4>
                <ul className="footer-list">
                  <li><a href="/privacy" className="footer-link reveal-on-scroll">Privacy Policy</a></li>
                  <li><a href="/terms" className="footer-link reveal-on-scroll">Terms &amp; Conditions</a></li>
                </ul>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Careers;
