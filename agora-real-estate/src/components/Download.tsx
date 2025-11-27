import React from 'react'
import { Download as DownloadIcon, Apple, Monitor, Smartphone, Github } from 'lucide-react'

const Download: React.FC = () => {
  const platforms = [
    {
      name: 'Windows',
      icon: <Monitor size={32} />,
      description: 'Windows 10, 11',
      size: '145 MB',
      link: '#download-windows'
    },
    {
      name: 'macOS',
      icon: <Apple size={32} />,
      description: 'macOS 10.15+',
      size: '156 MB',
      link: '#download-mac'
    },
    {
      name: 'Linux',
      icon: <Monitor size={32} />,
      description: 'Ubuntu, Debian, etc.',
      size: '142 MB',
      link: '#download-linux'
    }
  ]

  return (
    <section id="download" className="download-section">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2>Download Cursor AI</h2>
            <p className="download-subtitle">
              Get started with the AI-first code editor. Available on all major platforms 
              with seamless synchronization across devices.
            </p>
            
            <div className="download-stats">
              <div className="stat">
                <h3>1M+</h3>
                <p>Downloads</p>
              </div>
              <div className="stat">
                <h3>4.9★</h3>
                <p>Rating</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Languages</p>
              </div>
            </div>

            <div className="download-features">
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Free forever plan available</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Install in under 2 minutes</span>
              </div>
            </div>
          </div>

          <div className="download-platforms">
            <h3>Choose Your Platform</h3>
            <div className="platforms-grid">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  className="platform-card"
                >
                  <div className="platform-icon">
                    {platform.icon}
                  </div>
                  <div className="platform-info">
                    <h4>{platform.name}</h4>
                    <p>{platform.description}</p>
                    <span className="platform-size">{platform.size}</span>
                  </div>
                  <div className="download-arrow">
                    <DownloadIcon size={20} />
                  </div>
                </a>
              ))}
            </div>

            <div className="alternative-download">
              <p>Or try the web version</p>
              <button className="btn btn-secondary web-version-btn">
                Launch Web Editor
              </button>
            </div>

            <div className="github-link">
              <a href="#github" className="github-btn">
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="trust-indicators">
          <p>Trusted by developers at</p>
          <div className="companies">
            <div className="company">Google</div>
            <div className="company">Microsoft</div>
            <div className="company">Meta</div>
            <div className="company">Netflix</div>
            <div className="company">Spotify</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .download-section {
          background: #f8fafc;
          padding: 5rem 0;
        }

        .download-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .download-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 1.5rem;
        }

        .download-subtitle {
          font-size: 1.25rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .download-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ff6b6b;
          margin: 0;
        }

        .stat p {
          color: #718096;
          margin: 0;
          font-size: 0.875rem;
        }

        .download-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4a5568;
        }

        .checkmark {
          background: #48bb78;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }

        .download-platforms h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .platforms-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .platform-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .platform-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          color: inherit;
        }

        .platform-icon {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .platform-info {
          flex: 1;
        }

        .platform-info h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: #1a365d;
        }

        .platform-info p {
          color: #718096;
          margin: 0 0 0.25rem;
        }

        .platform-size {
          color: #a0aec0;
          font-size: 0.875rem;
        }

        .download-arrow {
          color: #ff6b6b;
        }

        .alternative-download {
          text-align: center;
          padding: 1.5rem;
          border: 2px dashed #e2e8f0;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .alternative-download p {
          color: #718096;
          margin-bottom: 1rem;
        }

        .web-version-btn {
          padding: 12px 24px;
        }

        .github-link {
          text-align: center;
        }

        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .github-btn:hover {
          color: #ff6b6b;
        }

        .trust-indicators {
          text-align: center;
          border-top: 1px solid #e2e8f0;
          padding-top: 3rem;
        }

        .trust-indicators p {
          color: #718096;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .companies {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .company {
          font-weight: 600;
          color: #a0aec0;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .download-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .download-text h2 {
            font-size: 2rem;
          }

          .download-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .companies {
            gap: 1.5rem;
          }

          .company {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Download