import React, { useState } from 'react';
import { ScrollFadeSection } from '../components/ui';
import '../styles/case-studies.css';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Logistics'];

  const caseStudies = [
    {
      id: 1,
      category: 'Healthcare',
      title: 'Regional Hospital Network Reduces Prior Authorization Time by 73%',
      client: 'MidAtlantic Health System',
      challenge: 'Manual prior authorization process taking 4-7 days, leading to treatment delays and $2.1M annual losses from denied claims',
      solution: 'Implemented ConPro.AI\'s intelligent prior authorization system with predictive analytics and automated document processing',
      results: [
        'Authorization time reduced from 5.2 days to 1.4 days',
        'Approval rate increased from 78% to 94%',
        'Annual savings of $1.8M in operational costs',
        '92% reduction in staff time spent on manual reviews',
        'Patient satisfaction scores improved by 28%'
      ],
      metrics: {
        timeReduction: '73%',
        costSavings: '$1.8M',
        approvalIncrease: '16%'
      },
      image: '🏥',
      testimonial: 'ConPro.AI transformed our authorization process. What used to take a week now takes less than 2 days, and our approval rates have never been higher.',
      author: 'Dr. Jennifer Martinez, CMO'
    },
    {
      id: 2,
      category: 'Finance',
      title: 'Investment Firm Achieves 40% Faster Due Diligence with AI Document Analysis',
      client: 'Horizon Capital Partners',
      challenge: 'Due diligence process required 200+ hours per deal, creating bottlenecks and limiting deal capacity to 12 transactions annually',
      solution: 'Deployed ConPro.AI\'s intelligent document analysis platform with ML-powered risk assessment and automated data extraction',
      results: [
        'Due diligence time reduced from 210 to 125 hours per deal',
        'Deal capacity increased to 20 transactions annually',
        '99.7% accuracy in financial data extraction',
        'Risk identification improved by 35%',
        'Partner time freed up by 680 hours annually'
      ],
      metrics: {
        timeReduction: '40%',
        dealIncrease: '67%',
        accuracy: '99.7%'
      },
      image: '💼',
      testimonial: 'The AI-powered analysis doesn\'t just save time—it catches risks and opportunities our team might have missed in manual reviews.',
      author: 'Robert Chen, Managing Partner'
    },
    {
      id: 3,
      category: 'Retail',
      title: 'E-commerce Platform Increases Revenue by $4.2M with Personalized Recommendations',
      client: 'TrendFlow Fashion',
      challenge: 'Generic product recommendations resulting in 2.1% conversion rate and high cart abandonment (68%)',
      solution: 'Integrated ConPro.AI\'s real-time personalization engine with behavioral analytics and predictive modeling',
      results: [
        'Conversion rate increased to 4.8%',
        'Average order value up 32% ($87 to $115)',
        'Cart abandonment reduced to 51%',
        'Customer lifetime value increased 47%',
        'Annual revenue impact of $4.2M'
      ],
      metrics: {
        conversionIncrease: '129%',
        revenueGrowth: '$4.2M',
        abandonmentReduction: '25%'
      },
      image: '🛍️',
      testimonial: 'The personalization AI understands our customers better than our best sales associates. It\'s like having a personal shopper for every visitor.',
      author: 'Amanda Foster, VP of Digital Commerce'
    },
    {
      id: 4,
      category: 'Manufacturing',
      title: 'Automotive Supplier Cuts Quality Defects by 82% Using AI Vision Systems',
      client: 'Precision Auto Components',
      challenge: 'Manual quality inspection missing 12% of defects, resulting in $850K annual warranty claims and damaged reputation',
      solution: 'Implemented ConPro.AI\'s computer vision quality control system with real-time defect detection and predictive maintenance',
      results: [
        'Defect detection rate improved to 99.1%',
        'Warranty claims reduced by 82%',
        'Inspection speed increased 5x',
        'Annual savings of $720K',
        'Production downtime reduced 34%'
      ],
      metrics: {
        defectReduction: '82%',
        costSavings: '$720K',
        speedIncrease: '500%'
      },
      image: '🏭',
      testimonial: 'The AI vision system catches microscopic defects that even our most experienced inspectors would miss. It\'s completely transformed our quality assurance.',
      author: 'Michael Torres, Director of Quality'
    },
    {
      id: 5,
      category: 'Logistics',
      title: 'Distribution Company Optimizes Routes and Saves $1.2M in Fuel Costs',
      client: 'NorthStar Logistics',
      challenge: 'Inefficient routing leading to high fuel costs, late deliveries, and 71% driver utilization',
      solution: 'Deployed ConPro.AI\'s dynamic route optimization with real-time traffic analysis and predictive demand forecasting',
      results: [
        'Fuel costs reduced by $1.2M annually',
        'On-time delivery improved from 83% to 96%',
        'Driver utilization increased to 91%',
        'Miles driven reduced by 18%',
        'Customer satisfaction up 31%'
      ],
      metrics: {
        fuelSavings: '$1.2M',
        deliveryImprovement: '16%',
        efficiencyGain: '20%'
      },
      image: '🚚',
      testimonial: 'The AI route optimization adapts to real-time conditions in ways our old system never could. We\'re delivering faster while using less fuel.',
      author: 'Lisa Wang, COO'
    },
    {
      id: 6,
      category: 'Healthcare',
      title: 'Medical Practice Automates Patient Scheduling and Achieves 400% ROI',
      client: 'CityMed Primary Care Network',
      challenge: 'Phone-based scheduling consuming 40 staff hours weekly, 22% no-show rate, and poor appointment utilization',
      solution: 'Implemented ConPro.AI\'s intelligent scheduling system with automated reminders and predictive no-show prevention',
      results: [
        'Staff time reduced from 40 to 8 hours weekly',
        'No-show rate decreased to 7%',
        'Appointment slots filled increased from 78% to 94%',
        'Patient satisfaction increased 38%',
        '400% ROI in first year'
      ],
      metrics: {
        timeReduction: '80%',
        roi: '400%',
        noShowReduction: '68%'
      },
      image: '📅',
      testimonial: 'Our front desk team can now focus on patient care instead of playing phone tag. The AI handles scheduling better than we ever could manually.',
      author: 'Dr. Sarah Johnson, Practice Manager'
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <main className="case-studies-page">
      <ScrollFadeSection>
        <section className="page-hero case-studies-hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-badge">SUCCESS STORIES</p>
              <h1 className="section-title">Real Results from Real Businesses</h1>
              <p className="section-subtitle">
                Discover how organizations across industries have transformed their operations 
                and achieved measurable ROI with ConPro.AI solutions
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">$12.5M+</span>
                  <span className="stat-label">Total Client Savings</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Implementations</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      <ScrollFadeSection>
        <section className="case-studies-filters">
          <div className="container">
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Industries' : category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      <section className="case-studies-list">
        <div className="container">
          {filteredCaseStudies.map((study, index) => (
            <ScrollFadeSection key={study.id}>
              <div className={`case-study-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="case-study-header">
                  <span className="case-study-icon">{study.image}</span>
                  <div className="case-study-meta">
                    <span className="case-study-category">{study.category}</span>
                    <h2 className="case-study-title">{study.title}</h2>
                    <p className="case-study-client">{study.client}</p>
                  </div>
                </div>

                <div className="case-study-metrics">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="metric-card">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="case-study-content">
                  <div className="content-section">
                    <h3>The Challenge</h3>
                    <p>{study.challenge}</p>
                  </div>

                  <div className="content-section">
                    <h3>The Solution</h3>
                    <p>{study.solution}</p>
                  </div>

                  <div className="content-section">
                    <h3>Key Results</h3>
                    <ul className="results-list">
                      {study.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-study-testimonial">
                    <blockquote>"{study.testimonial}"</blockquote>
                    <cite>— {study.author}</cite>
                  </div>
                </div>

                <div className="case-study-cta">
                  <button
                    className="btn-primary"
                    onClick={() => {
                      if (typeof window.openContactModal === 'function') {
                        window.openContactModal();
                      } else {
                        window.dispatchEvent(new Event('openContactModal'));
                      }
                    }}
                  >
                    Get Similar Results
                  </button>
                </div>
              </div>
            </ScrollFadeSection>
          ))}
        </div>
      </section>

      <ScrollFadeSection>
        <section className="case-studies-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Write Your Success Story?</h2>
              <p>
                Join hundreds of forward-thinking organizations that have transformed 
                their operations with ConPro.AI
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => {
                    if (typeof window.openContactModal === 'function') {
                      window.openContactModal();
                    } else {
                      window.dispatchEvent(new Event('openContactModal'));
                    }
                  }}
                >
                  Schedule a Demo
                </button>
                <button className="btn-secondary">
                  Download Case Studies PDF
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeSection>
    </main>
  );
};

export default CaseStudies;
