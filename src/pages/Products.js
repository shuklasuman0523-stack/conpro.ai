import React from 'react';
import { Products as ProductsSection, Features, AIExpertise, Stats } from '../components';
import { ScrollFadeSection } from '../components/ui';

const Products = () => {
  return (
    <main className="products-page">
      <ScrollFadeSection>
        <section className="page-hero">
          <div className="container">
            <h1 className="section-title">Our Products</h1>
            <p className="section-subtitle">
              Advanced AI solutions for modern construction challenges
            </p>
          </div>
        </section>
      </ScrollFadeSection>
      <ScrollFadeSection>
        <ProductsSection />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <Features />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <AIExpertise />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <Stats />
      </ScrollFadeSection>
    </main>
  );
};

export default Products;