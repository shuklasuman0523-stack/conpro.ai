import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/case-study-detail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    episodeNumber: '',
    videoFile: null
  });

  const caseStudies = {
    1: {
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
      testimonial: 'ConPro.AI transformed our authorization process. What used to take a week now takes less than 2 days, and our approval rates have never been higher.',
      author: 'Dr. Jennifer Martinez, CMO'
    },
    2: {
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
      testimonial: 'The AI document analysis caught risks that our team missed. We\'re completing deals faster and with more confidence.',
      author: 'David Chen, Managing Partner'
    },
    3: {
      id: 3,
      category: 'Retail',
      title: 'E-Commerce Platform Increases Conversion by 34% Through Personalization',
      client: 'StyleBrands Inc',
      challenge: 'Generic product recommendations leading to 58% cart abandonment and underutilized inventory',
      solution: 'Deployed ConPro.AI\'s personalization engine with real-time behavior analysis and dynamic recommendation algorithms',
      results: [
        'Conversion rate increased from 2.1% to 2.8%',
        'Average order value increased by 28%',
        'Cart abandonment reduced from 58% to 38%',
        'Customer retention improved by 31%',
        'Inventory turnover increased by 41%'
      ],
      metrics: {
        conversionIncrease: '34%',
        aovIncrease: '28%',
        inventoryTurover: '41%'
      },
      testimonial: 'The personalization AI understands our customers better than we do. Every visitor now sees exactly what they want to buy.',
      author: 'Amanda Foster, VP of Digital'
    },
    4: {
      id: 4,
      category: 'Manufacturing',
      title: 'Advanced Manufacturing Facility Reduces Defects by 89% Using AI Vision',
      client: 'TechParts Global',
      challenge: 'Manual quality inspection missing 12% of defects, resulting in costly recalls and customer returns',
      solution: 'Implemented ConPro.AI\'s computer vision system for real-time defect detection with 99.2% accuracy',
      results: [
        'Defect escape rate reduced from 12% to 1.3%',
        'Quality inspection throughput increased by 3x',
        'Returns and warranty costs decreased by $2.3M annually',
        'Production line downtime reduced by 67%',
        'Customer satisfaction scores improved to 9.4/10'
      ],
      metrics: {
        defectReduction: '89%',
        accuracy: '99.2%',
        costSavings: '$2.3M'
      },
      testimonial: 'The AI vision system catches microscopic defects that even our most experienced inspectors would miss. It\'s completely transformed our quality assurance.',
      author: 'Michael Torres, Director of Quality'
    },
    5: {
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
      testimonial: 'The AI route optimization adapts to real-time conditions in ways our old system never could. We\'re delivering faster while using less fuel.',
      author: 'Lisa Wang, COO'
    },
    6: {
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
      testimonial: 'Our front desk team can now focus on patient care instead of playing phone tag. The AI handles scheduling better than we ever could manually.',
      author: 'Dr. Sarah Johnson, Practice Manager'
    }
  };

  const caseStudy = caseStudies[id];

  if (!caseStudy) {
    return <div className="error-page">Case study not found</div>;
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      videoFile: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.videoFile && formData.title && formData.episodeNumber) {
      const newVideo = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        episodeNumber: formData.episodeNumber,
        fileName: formData.videoFile.name,
        uploadDate: new Date().toLocaleDateString(),
        url: URL.createObjectURL(formData.videoFile)
      };
      setVideos([newVideo, ...videos]);
      setEpisodes([...episodes, { number: formData.episodeNumber, title: formData.title }]);
      setFormData({ title: '', description: '', episodeNumber: '', videoFile: null });
      setShowUploadModal(false);
    }
  };

  const handleDeleteVideo = (videoId) => {
    setVideos(videos.filter(v => v.id !== videoId));
  };

  return (
    <div className="case-study-detail-page">
      {/* Header */}
      <header className="case-study-header">
        <button className="back-button" onClick={() => navigate('/case-studies')}>
          ← Back to Case Studies
        </button>
        <div className="header-content">
          <span className="category-badge">{caseStudy.category}</span>
          <h1>{caseStudy.title}</h1>
          <p className="client-name">{caseStudy.client}</p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className="tabs-navigation">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          Videos & Episodes
        </button>
        <button 
          className={`tab-button ${activeTab === 'metrics' ? 'active' : ''}`}
          onClick={() => setActiveTab('metrics')}
        >
          Metrics
        </button>
      </nav>

      {/* Main Content */}
      <main className="case-study-content">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className="overview-section">
            <div className="content-grid">
              <div className="content-column">
                <div className="content-block">
                  <h2>Challenge</h2>
                  <p>{caseStudy.challenge}</p>
                </div>

                <div className="content-block">
                  <h2>Solution</h2>
                  <p>{caseStudy.solution}</p>
                </div>

                <div className="content-block">
                  <h2>Results</h2>
                  <ul className="results-list">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="testimonial-block">
                <div className="testimonial-card">
                  <p className="testimonial-text">"{caseStudy.testimonial}"</p>
                  <p className="testimonial-author">— {caseStudy.author}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <section className="videos-section">
            <div className="videos-header">
              <h2>Recent Episodes</h2>
              <button 
                className="upload-button"
                onClick={() => setShowUploadModal(true)}
              >
                + Upload Video
              </button>
            </div>

            {videos.length === 0 ? (
              <div className="empty-state">
                <p>No videos uploaded yet</p>
                <button 
                  className="primary-button"
                  onClick={() => setShowUploadModal(true)}
                >
                  Upload Your First Video
                </button>
              </div>
            ) : (
              <div className="videos-grid">
                {videos.map(video => (
                  <div key={video.id} className="video-card">
                    <div className="video-thumbnail">
                      <video controls>
                        <source src={video.url} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video-info">
                      <h3>Episode {video.episodeNumber}</h3>
                      <p className="video-title">{video.title}</p>
                      <p className="video-description">{video.description}</p>
                      <p className="upload-date">Uploaded: {video.uploadDate}</p>
                      <button 
                        className="delete-button"
                        onClick={() => handleDeleteVideo(video.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {episodes.length > 0 && (
              <div className="episodes-list">
                <h3>All Episodes</h3>
                <ul>
                  {episodes.map((ep, idx) => (
                    <li key={idx}>Episode {ep.number}: {ep.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <section className="metrics-section">
            <h2>Key Metrics</h2>
            <div className="metrics-grid">
              {Object.entries(caseStudy.metrics).map(([key, value]) => (
                <div key={key} className="metric-card">
                  <div className="metric-value">{value}</div>
                  <div className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setShowUploadModal(false)}
            >
              ×
            </button>
            <h2>Upload Video Episode</h2>
            <form onSubmit={handleSubmit} className="upload-form">
              <div className="form-group">
                <label htmlFor="episode-number">Episode Number *</label>
                <input
                  id="episode-number"
                  type="number"
                  value={formData.episodeNumber}
                  onChange={(e) => setFormData({...formData, episodeNumber: e.target.value})}
                  placeholder="e.g., 1"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="video-title">Title *</label>
                <input
                  id="video-title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Episode title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="video-description">Description</label>
                <textarea
                  id="video-description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Episode description"
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label htmlFor="video-file">Video File *</label>
                <input
                  id="video-file"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  required
                />
                {formData.videoFile && (
                  <p className="file-name">{formData.videoFile.name}</p>
                )}
              </div>

              <div className="form-actions">
                <button 
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowUploadModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Upload Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyDetail;
