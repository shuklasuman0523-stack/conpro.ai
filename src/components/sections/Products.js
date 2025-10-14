import React, { useEffect, useRef, useState } from "react";
import ParallaxSection from "../ui/ParallaxSection";
import ScrollFadeElement from "../ui/ScrollFadeElement";
import productImage from "../../assets/images/Screen-Shot-2022-12-06-at-13.14.38.png";

const Products = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Check if element is in viewport (entering from bottom or top)
        if (imageRect.top < viewportHeight * 0.8 && imageRect.bottom > viewportHeight * 0.2) {
          setIsVisible(true);
        } else {
          // Reset animation when element leaves viewport
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="products" className="products reveal-on-scroll">
      <div className="container">
        <div className="products-content">
          <ParallaxSection speed={0.2} direction="up" className="products-visual">
            <div 
              ref={imageRef}
              className={`product-image-container reveal-on-scroll ${isVisible ? 'slide-in-left' : ''}`}
            >
              <img 
                src={productImage} 
                alt="ConPro.AI Product Screenshot" 
                className="product-screenshot"
              />
            </div>
          </ParallaxSection>
          
          <div 
            ref={textRef}
            className={`products-text ${isVisible ? 'slide-in-right' : ''}`}
          >
            <div className="section-header">
              <ParallaxSection speed={0.3} direction="up">
                <p className="section-category reveal-on-scroll">OUR PRODUCTS</p>
              </ParallaxSection>
              <h2 className="section-title product-title reveal-on-scroll">
                ChatApplication | Prior Authorization Insight Hub
              </h2>
              <p className="section-description reveal-on-scroll">
                From intelligent conversations to streamlined healthcare workflows and data-driven insights — our AI-powered solutions transform the way businesses connect, operate, and decide.
              </p>
            </div>
            
            <ScrollFadeElement className="features-list">
              <div className="feature-item reveal-on-scroll">
                <div className="feature-check">✓</div>
                <span>Real-time, context-aware communication with ChatApplication</span>
              </div>
              <div className="feature-item reveal-on-scroll">
                <div className="feature-check">✓</div>
                <span>Faster, smarter healthcare approvals through Prior Authorization</span>
              </div>
              <div className="feature-item reveal-on-scroll">
                <div className="feature-check">✓</div>
                <span>Actionable intelligence and predictive analytics with Insight Hub</span>
              </div>
              <div className="feature-item reveal-on-scroll">
                <div className="feature-check">✓</div>
                <span>AI redefining efficiency, accuracy, and personalization</span>
              </div>
            </ScrollFadeElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
