import React, { useState, useEffect } from 'react';
import ParallaxSection from '../ui/ParallaxSection';
import ScrollFadeElement from '../ui/ScrollFadeElement';

const Testimonials = () => {
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('forward'); // 'forward' or 'reverse'
  
  const testimonials = [
    {
      id: 1,
      name: "Cameron Williamson",
      role: "Web Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
      gradient: "linear-gradient(135deg, #8B5CF6, #3B82F6)"
    },
    {
      id: 2,
      name: "Esther Howard",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisl interdum ac. Eu congue quis egestas donec lectus",
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)"
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.",
      gradient: "linear-gradient(135deg, #06B6D4, #10B981)"
    }
  ];

  // Auto-rotate cards every 2 seconds
  useEffect(() => {
    if (isPaused) return; // Don't rotate if paused

    const interval = setInterval(() => {
      setAnimationDirection('forward');
      setIsAnimating(true);
      
      // Wait for animation to complete before updating rotation
      setTimeout(() => {
        setRotation((prev) => (prev + 1) % testimonials.length);
        // Remove animating class immediately after rotation update
        setIsAnimating(false);
      }, 800); // Match animation duration exactly
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  // Manual navigation functions
  const handleNext = () => {
    if (isAnimating) return;
    setAnimationDirection('forward');
    setIsAnimating(true);
    
    setTimeout(() => {
      setRotation((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setAnimationDirection('reverse');
    setIsAnimating(true);
    
    setTimeout(() => {
      setRotation((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 800);
  };

  // Pause/resume on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Get rotated testimonials array
  const getRotatedTestimonials = () => {
    const rotated = [...testimonials];
    for (let i = 0; i < rotation; i++) {
      rotated.push(rotated.shift());
    }
    return rotated;
  };

  const rotatedTestimonials = getRotatedTestimonials();

  // Duplicate testimonials for seamless infinite loop
  const displayTestimonials = [...rotatedTestimonials, ...rotatedTestimonials];

  return (
    <section id="testimonials" className="testimonials reveal-on-scroll">
      <div className="container">
        <ParallaxSection speed={0.25} direction="up" className="section-header reveal-on-scroll">
          <h2 className="section-title testimonials-title reveal-on-scroll">What our clients say</h2>
          <p className="section-subtitle reveal-on-scroll">
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien.
          </p>
        </ParallaxSection>
        
        <div className="testimonials-container">
          <ScrollFadeElement className={`testimonials-grid ${isAnimating ? (animationDirection === 'reverse' ? 'animating-reverse' : 'animating') : ''}`}>
            {displayTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card reveal-on-scroll"
                style={{ 
                  '--gradient': testimonial.gradient,
                  '--card-index': index
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <div className="client-info">
                      <div className="client-avatar">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="client-details">
                        <h4 className="client-name">{testimonial.name}</h4>
                        <p className="client-role">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="quote-icon" style={{ transform: 'rotate(180deg) scaleX(-1)' }}>
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M20 28C20 31.3137 17.3137 34 14 34C10.6863 34 8 31.3137 8 28C8 24.6863 10.6863 22 14 22C14.5 22 15 22.1 15.5 22.2C15.8 19.9 14.2 18 12 18H10C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14H12C16.4 14 20 17.6 20 22V28Z" fill="currentColor"/>
                        <path d="M40 28C40 31.3137 37.3137 34 34 34C30.6863 34 28 31.3137 28 28C28 24.6863 30.6863 22 34 22C34.5 22 35 22.1 35.5 22.2C35.8 19.9 34.2 18 32 18H30C28.9 18 28 17.1 28 16C28 14.9 28.9 14 30 14H32C36.4 14 40 17.6 40 22V28Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>{testimonial.quote}</p>
                  </div>
                </div>
                <div className="card-background"></div>
              </div>
            ))}
          </ScrollFadeElement>
          
          {/* Navigation Arrows */}
          <div className="testimonials-navigation">
            <button 
              className="nav-button prev" 
              onClick={handlePrev}
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="nav-button next" 
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;