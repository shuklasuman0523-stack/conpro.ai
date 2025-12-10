import React, { useState } from 'react';
import { HeroVideoBackground } from '../components/ui';
import { VideoUpload } from '../components';
import '../styles/blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'AI Trends', 'Industry Insights', 'Product Updates', 'Best Practices', 'Case Studies'];

  const blogPosts = [
    {
      id: 1,
      category: 'AI Trends',
      title: 'The Future of AI in Healthcare: 5 Predictions for 2026',
      excerpt: 'As AI technology continues to evolve at breakneck speed, healthcare organizations must prepare for transformative changes. Explore the key trends that will reshape medical practice and patient care.',
      author: 'Dr. Sarah Chen',
      date: 'November 20, 2025',
      readTime: '8 min read',
      image: '🏥',
      tags: ['Healthcare', 'AI', 'Future Trends']
    },
    {
      id: 2,
      category: 'Best Practices',
      title: 'ROI-Driven AI Implementation: A Step-by-Step Guide',
      excerpt: 'Learn how to measure and maximize return on investment from your AI initiatives. This comprehensive guide covers everything from baseline metrics to long-term value tracking.',
      author: 'Michael Torres',
      date: 'November 15, 2025',
      readTime: '12 min read',
      image: '📊',
      tags: ['ROI', 'Implementation', 'Strategy']
    },
    {
      id: 3,
      category: 'Industry Insights',
      title: 'How AI is Revolutionizing Supply Chain Management in 2025',
      excerpt: 'Supply chain disruptions have cost businesses billions. Discover how AI-powered predictive analytics and automated decision-making are creating more resilient operations.',
      author: 'Lisa Wang',
      date: 'November 10, 2025',
      readTime: '10 min read',
      image: '🚚',
      tags: ['Supply Chain', 'Logistics', 'Automation']
    },
    {
      id: 4,
      category: 'Product Updates',
      title: 'Introducing ConPro.AI 3.0: Enhanced Predictive Capabilities',
      excerpt: 'Our latest release brings significant improvements to prediction accuracy, processing speed, and integration capabilities. See what\'s new and how it benefits your operations.',
      author: 'Alex Rodriguez',
      date: 'November 5, 2025',
      readTime: '6 min read',
      image: '🚀',
      tags: ['Product Update', 'Features', 'Technology']
    },
    {
      id: 5,
      category: 'AI Trends',
      title: 'Generative AI vs. Predictive AI: Choosing the Right Tool',
      excerpt: 'Not all AI is created equal. Understanding the difference between generative and predictive AI is crucial for selecting the right solution for your business needs.',
      author: 'Maya Patel',
      date: 'October 28, 2025',
      readTime: '7 min read',
      image: '🤖',
      tags: ['AI Types', 'Education', 'Decision Making']
    },
    {
      id: 6,
      category: 'Case Studies',
      title: 'How a Mid-Sized Hospital Saved $1.8M with AI Automation',
      excerpt: 'A detailed look at how MidAtlantic Health System transformed their prior authorization process and achieved remarkable cost savings in just 8 months.',
      author: 'Jennifer Martinez',
      date: 'October 22, 2025',
      readTime: '11 min read',
      image: '💡',
      tags: ['Healthcare', 'Success Story', 'ROI']
    },
    {
      id: 7,
      category: 'Best Practices',
      title: 'Data Privacy in AI: Essential Compliance Strategies',
      excerpt: 'With increasing regulatory scrutiny on AI systems, understanding data privacy requirements is critical. Learn how to maintain compliance while leveraging AI capabilities.',
      author: 'Robert Chen',
      date: 'October 15, 2025',
      readTime: '9 min read',
      image: '🔒',
      tags: ['Privacy', 'Compliance', 'Security']
    },
    {
      id: 8,
      category: 'Industry Insights',
      title: 'The $1 Trillion Opportunity: AI in Financial Services',
      excerpt: 'Financial institutions are sitting on a goldmine of untapped efficiency. Explore how AI is unlocking unprecedented value in banking, investment, and insurance.',
      author: 'Amanda Foster',
      date: 'October 8, 2025',
      readTime: '10 min read',
      image: '💰',
      tags: ['Finance', 'Banking', 'Investment']
    },
    {
      id: 9,
      category: 'AI Trends',
      title: 'Edge AI: Processing Intelligence Where It Matters Most',
      excerpt: 'Cloud-based AI isn\'t always the answer. Learn when and why edge computing with AI capabilities delivers superior results for time-sensitive applications.',
      author: 'Dr. Sarah Chen',
      date: 'October 1, 2025',
      readTime: '8 min read',
      image: '⚡',
      tags: ['Edge Computing', 'Real-time AI', 'Technology']
    },
    {
      id: 10,
      category: 'Best Practices',
      title: 'Building AI-Ready Teams: Skills Your Organization Needs',
      excerpt: 'Technology is only half the equation. Discover the key skills, roles, and cultural changes needed to successfully deploy and maintain AI systems.',
      author: 'Michael Torres',
      date: 'September 24, 2025',
      readTime: '11 min read',
      image: '👥',
      tags: ['Team Building', 'Skills', 'Culture']
    },
    {
      id: 11,
      category: 'Product Updates',
      title: 'New Integration: Seamless Connection with Salesforce',
      excerpt: 'ConPro.AI now integrates directly with Salesforce, bringing powerful AI insights into your CRM workflow. Set up takes just minutes.',
      author: 'Alex Rodriguez',
      date: 'September 17, 2025',
      readTime: '5 min read',
      image: '🔗',
      tags: ['Integration', 'Salesforce', 'CRM']
    },
    {
      id: 12,
      category: 'Industry Insights',
      title: 'Retail\'s AI Revolution: Personalization at Scale',
      excerpt: 'Generic shopping experiences are dead. Learn how leading retailers are using AI to deliver individualized experiences to millions of customers simultaneously.',
      author: 'Lisa Wang',
      date: 'September 10, 2025',
      readTime: '9 min read',
      image: '🛍️',
      tags: ['Retail', 'Personalization', 'E-commerce']
    }
  ];

  const featuredPost = blogPosts[0];
  const filteredPosts = selectedCategory === 'all'
    ? blogPosts.slice(1)
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="blog-page">
      <div>
        <HeroVideoBackground
          className="page-hero blog-hero"
          videoSrc="https://bitbet33-images-apne1.s3.ap-northeast-1.amazonaws.com/4828605-uhd_4096_2160_25fps.mp4"
        >
          <div className="container">
            <p className="section-badge">USE CASES & UPDATES</p>
            <h1 className="section-title">Use Cases & Insights</h1>
            <p className="section-subtitle">
              Real-world applications, expert perspectives, and practical strategies
              for digital transformation
            </p>
          </div>
        </HeroVideoBackground>
      </div>

      <div>
        <VideoUpload />
      </div>

      <div>
        <section className="featured-post">
          <div className="container">
            <div className="featured-card">
              <div className="featured-badge">Featured Article</div>
              <div className="featured-content">
                <div className="featured-meta">
                  <span className="post-category">{featuredPost.category}</span>
                  <span className="post-date">{featuredPost.date}</span>
                </div>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-footer">
                  <div className="author-info">
                    <span className="author-icon">{featuredPost.image}</span>
                    <div>
                      <span className="author-name">{featuredPost.author}</span>
                      <span className="read-time">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="btn-primary">Read Article</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="blog-filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-grid">
        <div className="container">
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <div key={post.id}>
                <article className="blog-card">
                  <div className="blog-card-header">
                    <span className="post-icon">{post.image}</span>
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="author-info">
                      <span className="author-name">{post.author}</span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <div className="post-tags">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button className="read-more-link">Read More →</button>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <section className="blog-newsletter">
          <div className="container">
            <div className="newsletter-content">
              <h2>Stay Informed</h2>
              <p>
                Get the latest AI insights, industry trends, and ConPro.AI updates
                delivered to your inbox weekly
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button className="btn-primary">Subscribe</button>
              </div>
              <p className="newsletter-privacy">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Blog;
