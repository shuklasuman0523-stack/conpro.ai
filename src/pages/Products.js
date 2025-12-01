import React from 'react';
import { Products as ProductsSection, Features, AIExpertise, Stats } from '../components';
import { HeroVideoBackground } from '../components/ui';

const Products = () => {
  return (
    <main className="products-page">
      <div>
        <HeroVideoBackground 
          className="page-hero"
          videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/855411-hd_1920_1080_25fps.mp4"
        >
          <div className="container">
            <h1 className="section-title">Our Products</h1>
            <p className="section-subtitle">
              Advanced AI solutions for modern construction challenges
            </p>
          </div>
        </HeroVideoBackground>
      </div>
      <div>
        <ProductsSection />
      </div>
      <div>
        <div className="dark-bg">
          <Features />
        </div>
      </div>
      <div>
        <div className="dark-bg">
          <AIExpertise />
        </div>
      </div>
      <div>
        <div className="dark-bg">
          <Stats />
        </div>
      </div>
    </main>
  );
};

export default Products;