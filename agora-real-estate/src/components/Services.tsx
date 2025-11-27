import React from 'react'
import { Zap, Code, Brain, Users, Sparkles, Shield } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain size={32} />,
      title: 'AI Code Assistant',
      description: 'Advanced AI that understands your code and provides intelligent suggestions and completions.'
    },
    {
      icon: <Code size={32} />,
      title: 'Multi-Language Support',
      description: 'Support for 40+ programming languages with syntax highlighting and intelligent features.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Optimized performance for large codebases with instant file search and navigation.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Smart Debugging',
      description: 'AI-powered debugging with automatic error detection and intelligent fix suggestions.'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Collaboration',
      description: 'Real-time collaboration features with shared workspaces and live editing capabilities.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with local processing and encrypted data transmission.'
    }
  ]

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Why Choose Cursor</h2>
        <p className="section-subtitle">
          Advanced AI-powered features that revolutionize the way you write and edit code
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-link">Learn More →</button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: #f8fafc;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #ff6b6b;
        }

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1);
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a365d;
        }

        .service-description {
          color: #718096;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-link {
          background: none;
          border: none;
          color: #ff6b6b;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #ff5252;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Services