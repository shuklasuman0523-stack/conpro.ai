import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactModal } from '../ui';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Add background when scrolled for better visibility
      setIsScrolled(currentScrollY > 50);
    };

    const handleOpenContactModal = () => setIsContactModalOpen(true);

    // Expose a global function as a fallback for components that cannot
    // reliably dispatch/listen to custom events in some environments.
    // Components can call `window.openContactModal()` directly.
    window.openContactModal = handleOpenContactModal;

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('openContactModal', handleOpenContactModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openContactModal', handleOpenContactModal);
      // Clean up the global function when header unmounts
      try { delete window.openContactModal; } catch (e) { window.openContactModal = undefined; }
    };
  }, []);

  // Lock scroll on mobile when nav is open
  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 768) {
      document.body.classList.add('nav-locked');
    } else {
      document.body.classList.remove('nav-locked');
    }
    return () => {
      document.body.classList.remove('nav-locked');
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        {/* Hide logo when mobile nav is open */}
        {!isMenuOpen && (
          <div className="nav-brand">
            <Link to="/" className="logo">ConPro<span className="logo-accent">.AI</span></Link>
          </div>
        )}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {/* Cross (close) button, only visible when nav is open */}
          {isMenuOpen && (
            <button
              className="menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{
                position: 'absolute',
                top: 8,
                right: 10,
                zIndex: 10001,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="5" x2="17" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="17" y1="5" x2="5" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/solutions" className={`nav-link ${isActive('/solutions') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Solutions</Link></li>
            <li><Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li><Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/case-studies" className={`nav-link ${isActive('/case-studies') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Case Studies</Link></li>
            <li><Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/company" className={`nav-link ${isActive('/company') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Company</Link></li>
          </ul>
          <div className="nav-contact-btn-wrapper">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                // Use requestAnimationFrame for smoother transition
                requestAnimationFrame(() => {
                  setTimeout(() => setIsContactModalOpen(true), 80);
                });
              }}
              className="btn btn-primary contact-btn header-contact-btn contact-btn-white"
            >
              Contact US
            </button>
          </div>
        </nav>

        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
        
        {/* Hamburger menu button (hidden when open) */}
        {!isMenuOpen && (
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
