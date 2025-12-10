import React from 'react';

const Stats = () => {
  return (
    <section className="stats dark-bg">
      <div className="container">
        <div className="stats-content">
          <div className="stats-text">
            <h2 className="stats-title">Why Work With Us?</h2>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Years of applied experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Implemented projects<br />worldwide</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Scalable team of AI engineers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;