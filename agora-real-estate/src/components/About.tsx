import React from 'react'
import { Award, Users, TrendingUp, Clock } from 'lucide-react'

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award size={24} />,
      number: '15+',
      label: 'Years Experience'
    },
    {
      icon: <Users size={24} />,
      number: '5000+',
      label: 'Happy Clients'
    },
    {
      icon: <TrendingUp size={24} />,
      number: '$2B+',
      label: 'Properties Sold'
    },
    {
      icon: <Clock size={24} />,
      number: '24/7',
      label: 'Customer Support'
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title text-left">About Mark Brian Real Estate</h2>
            <p className="about-description">
              With over 15 years of experience in the real estate industry, Mark Brian Real Estate 
              has established itself as a trusted partner for buyers, sellers, and investors. 
              Our commitment to excellence and personalized service has helped thousands of 
              families find their dream homes.
            </p>
            <p className="about-description">
              We leverage cutting-edge technology, market expertise, and a deep understanding 
              of local communities to provide unparalleled real estate solutions. Our team of 
              dedicated professionals is passionate about making your property journey smooth 
              and successful.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <h4>Expert Guidance</h4>
                <p>Our certified agents provide professional advice at every step</p>
              </div>
              <div className="feature-item">
                <h4>Market Knowledge</h4>
                <p>Deep insights into local markets and pricing trends</p>
              </div>
              <div className="feature-item">
                <h4>Technology Driven</h4>
                <p>Advanced tools and platforms for seamless transactions</p>
              </div>
            </div>

            <button className="btn btn-primary">Learn More About Us</button>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80" 
              alt="Modern office building"
            />
            <div className="image-overlay">
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement">
                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement-content">
                      <div className="achievement-number">{achievement.number}</div>
                      <div className="achievement-label">{achievement.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .text-left {
          text-align: left;
          margin-bottom: 2rem;
        }

        .about-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 2rem;
        }

        .about-features {
          margin: 2rem 0;
        }

        .feature-item {
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 3px solid #ff6b6b;
        }

        .feature-item h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }

        .feature-item p {
          color: #718096;
          margin: 0;
        }

        .about-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 500px;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.8) 0%, rgba(78, 205, 196, 0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          width: 100%;
        }

        .achievement {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          color: white;
        }

        .achievement-icon {
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .achievement-number {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .achievement-label {
          font-size: 0.875rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-image {
            height: 300px;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .achievement {
            padding: 1rem;
          }

          .achievement-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About