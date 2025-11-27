import React from 'react';
import { ScrollFadeSection } from '../components/ui';
import '../styles/solutions.css';

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: 'Healthcare AI Solutions',
      tagline: 'Transform Patient Care and Operational Efficiency',
      icon: '🏥',
      description: 'Comprehensive AI solutions designed specifically for healthcare providers, payers, and life sciences organizations.',
      keyBenefits: [
        'Reduce prior authorization time by up to 73%',
        'Improve approval rates to 94%+',
        'Automate clinical documentation with 99% accuracy',
        'Predict patient no-shows with 89% accuracy',
        'Streamline revenue cycle management'
      ],
      useCases: [
        {
          name: 'Prior Authorization Automation',
          description: 'Intelligent system that processes authorization requests 5x faster with higher approval rates',
          roi: '87% faster approvals, $1.8M annual savings'
        },
        {
          name: 'Clinical Documentation Assistant',
          description: 'AI-powered transcription and structuring of clinical notes from voice or text',
          roi: '3 hours saved per provider daily'
        },
        {
          name: 'Patient Scheduling Optimization',
          description: 'Smart scheduling that predicts no-shows and optimizes appointment slots',
          roi: '400% ROI, 68% reduction in no-shows'
        },
        {
          name: 'Medical Coding Automation',
          description: 'Automated ICD-10 and CPT code assignment with 99.1% accuracy',
          roi: '60% faster coding, 92% fewer errors'
        }
      ],
      stats: [
        { value: '73%', label: 'Faster Authorization' },
        { value: '$1.8M', label: 'Avg Annual Savings' },
        { value: '94%', label: 'Approval Rate' }
      ]
    },
    {
      id: 2,
      title: 'Financial Services AI',
      tagline: 'Enhance Decision-Making and Risk Management',
      icon: '💼',
      description: 'Advanced AI solutions for banks, investment firms, and insurance companies to improve accuracy, speed, and compliance.',
      keyBenefits: [
        'Accelerate due diligence by 40%',
        'Detect fraud with 99.7% accuracy',
        'Automate document processing at scale',
        'Improve credit risk assessment by 35%',
        'Ensure regulatory compliance automatically'
      ],
      useCases: [
        {
          name: 'Intelligent Due Diligence',
          description: 'AI-powered analysis of financial documents, contracts, and risk factors',
          roi: '40% faster deals, 67% capacity increase'
        },
        {
          name: 'Fraud Detection System',
          description: 'Real-time transaction monitoring with ML-based anomaly detection',
          roi: '99.7% detection rate, 85% false positive reduction'
        },
        {
          name: 'Credit Risk Assessment',
          description: 'Advanced modeling using alternative data sources for more accurate lending decisions',
          roi: '35% better risk identification, 22% approval increase'
        },
        {
          name: 'Regulatory Compliance Automation',
          description: 'Automated monitoring and reporting for KYC, AML, and regulatory requirements',
          roi: '70% compliance cost reduction'
        }
      ],
      stats: [
        { value: '40%', label: 'Faster Due Diligence' },
        { value: '99.7%', label: 'Fraud Detection' },
        { value: '$3.2M', label: 'Avg Cost Savings' }
      ]
    },
    {
      id: 3,
      title: 'Retail & E-commerce AI',
      tagline: 'Personalize Experience and Optimize Operations',
      icon: '🛍️',
      description: 'AI solutions that drive revenue growth through personalization, inventory optimization, and customer insights.',
      keyBenefits: [
        'Increase conversion rates by 129%',
        'Boost average order value by 32%',
        'Reduce cart abandonment by 25%',
        'Optimize inventory with 94% accuracy',
        'Improve customer lifetime value by 47%'
      ],
      useCases: [
        {
          name: 'Personalization Engine',
          description: 'Real-time product recommendations based on behavior, preferences, and context',
          roi: '129% conversion increase, $4.2M revenue impact'
        },
        {
          name: 'Dynamic Pricing Optimization',
          description: 'AI-driven pricing that balances demand, competition, and margins',
          roi: '18% margin improvement, 12% revenue growth'
        },
        {
          name: 'Inventory Forecasting',
          description: 'Predictive analytics for optimal stock levels across locations',
          roi: '40% inventory cost reduction, 94% in-stock rate'
        },
        {
          name: 'Customer Sentiment Analysis',
          description: 'Real-time analysis of reviews, social media, and support interactions',
          roi: '38% satisfaction improvement, 45% faster response'
        }
      ],
      stats: [
        { value: '129%', label: 'Conversion Increase' },
        { value: '$4.2M', label: 'Revenue Impact' },
        { value: '47%', label: 'LTV Growth' }
      ]
    },
    {
      id: 4,
      title: 'Manufacturing AI Solutions',
      tagline: 'Optimize Production and Quality Control',
      icon: '🏭',
      description: 'AI-powered solutions for predictive maintenance, quality assurance, and production optimization.',
      keyBenefits: [
        'Reduce defects by 82%',
        'Increase inspection speed by 500%',
        'Lower warranty claims by $720K annually',
        'Decrease downtime by 34%',
        'Improve production efficiency by 28%'
      ],
      useCases: [
        {
          name: 'Computer Vision Quality Control',
          description: 'Automated visual inspection with 99.1% defect detection accuracy',
          roi: '82% defect reduction, $720K savings'
        },
        {
          name: 'Predictive Maintenance',
          description: 'ML-based prediction of equipment failures before they occur',
          roi: '34% downtime reduction, 52% maintenance cost savings'
        },
        {
          name: 'Production Optimization',
          description: 'AI-driven scheduling and resource allocation for maximum throughput',
          roi: '28% efficiency gain, 15% capacity increase'
        },
        {
          name: 'Supply Chain Intelligence',
          description: 'Demand forecasting and supplier risk assessment',
          roi: '23% inventory reduction, 18% cost savings'
        }
      ],
      stats: [
        { value: '82%', label: 'Defect Reduction' },
        { value: '500%', label: 'Speed Increase' },
        { value: '$720K', label: 'Annual Savings' }
      ]
    },
    {
      id: 5,
      title: 'Logistics & Supply Chain AI',
      tagline: 'Streamline Operations and Reduce Costs',
      icon: '🚚',
      description: 'Intelligent solutions for route optimization, demand forecasting, and supply chain visibility.',
      keyBenefits: [
        'Save $1.2M+ in fuel costs annually',
        'Improve on-time delivery by 16%',
        'Increase vehicle utilization by 20%',
        'Reduce miles driven by 18%',
        'Enhance customer satisfaction by 31%'
      ],
      useCases: [
        {
          name: 'Dynamic Route Optimization',
          description: 'Real-time routing that adapts to traffic, weather, and delivery priorities',
          roi: '$1.2M fuel savings, 16% delivery improvement'
        },
        {
          name: 'Demand Forecasting',
          description: 'Predictive analytics for accurate capacity planning and resource allocation',
          roi: '89% forecast accuracy, 23% cost reduction'
        },
        {
          name: 'Warehouse Automation',
          description: 'AI-guided picking, packing, and inventory management',
          roi: '45% efficiency gain, 67% error reduction'
        },
        {
          name: 'Delivery Time Prediction',
          description: 'Accurate ETAs based on historical data and real-time conditions',
          roi: '31% customer satisfaction increase'
        }
      ],
      stats: [
        { value: '$1.2M', label: 'Fuel Savings' },
        { value: '20%', label: 'Efficiency Gain' },
        { value: '96%', label: 'On-Time Rate' }
      ]
    }
  ];

  return (
    <main className="solutions-page">
      <ScrollFadeSection>
        <section className="page-hero solutions-hero">
          <div className="container">
            <p className="section-badge">INDUSTRY SOLUTIONS</p>
            <h1 className="section-title">AI Solutions Tailored to Your Industry</h1>
            <p className="section-subtitle">
              Purpose-built AI solutions that address the unique challenges and opportunities 
              of your industry, delivering measurable results from day one
            </p>
          </div>
        </section>
      </ScrollFadeSection>

      <section className="solutions-list">
        {solutions.map((solution, index) => (
          <ScrollFadeSection key={solution.id}>
            <div className={`solution-section ${index % 2 === 1 ? 'alternate' : ''}`}>
              <div className="container">
                <div className="solution-content">
                  <div className="solution-header">
                    <span className="solution-icon">{solution.icon}</span>
                    <div>
                      <h2 className="solution-title">{solution.title}</h2>
                      <p className="solution-tagline">{solution.tagline}</p>
                    </div>
                  </div>

                  <p className="solution-description">{solution.description}</p>

                  <div className="solution-stats">
                    {solution.stats.map((stat, idx) => (
                      <div key={idx} className="stat-card">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="solution-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                      {solution.keyBenefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="use-cases">
                    <h3>Featured Use Cases</h3>
                    <div className="use-cases-grid">
                      {solution.useCases.map((useCase, idx) => (
                        <div key={idx} className="use-case-card">
                          <h4>{useCase.name}</h4>
                          <p>{useCase.description}</p>
                          <div className="use-case-roi">
                            <strong>ROI:</strong> {useCase.roi}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="solution-cta">
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
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeSection>
        ))}
      </section>

      <ScrollFadeSection>
        <section className="solutions-custom">
          <div className="container">
            <div className="custom-content">
              <h2>Need a Custom Solution?</h2>
              <p>
                Every business is unique. Our team can design and implement 
                AI solutions tailored specifically to your workflows, data, and objectives.
              </p>
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
                Discuss Your Needs
              </button>
            </div>
          </div>
        </section>
      </ScrollFadeSection>
    </main>
  );
};

export default Solutions;
