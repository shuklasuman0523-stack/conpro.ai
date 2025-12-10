import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const offerings = [
    {
      title: "Agentic AI Consulting",
      description: "Strategic guidance to unlock the power of autonomous AI agents for your enterprise.",
      link: "/agentic-ai-consulting",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop"
    },
    {
      title: "Product Strategy & Management",
      description: "Comprehensive roadmapping and management services to ensure your AI products deliver real value.",
      link: "/product-strategy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
    },
    {
      title: "Product Development Services",
      description: "End-to-end engineering of scalable, secure, and high-performance AI solutions.",
      link: "/product-development",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="products section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="section-category">OUR OFFERINGS</p>
          <h2 className="section-title">Agentic AI & Product Services</h2>
          <p className="section-subtitle">
            Transforming ideas into intelligent realities with our specialized suite of services.
          </p>
        </div>

        <div className="services-grid">
          {offerings.map((offering, index) => (
            <div key={index} className="service-card text-center p-4">
              <div className="service-image-container mb-4" style={{ height: '150px', overflow: 'hidden', borderRadius: '8px' }}>
                <img src={offering.image} alt={offering.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="service-title h4 mb-3">{offering.title}</h3>
              <p className="service-description mb-4 text-muted">
                {offering.description}
              </p>
              <Link to={offering.link} className="btn-primary mt-3 d-inline-block">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
