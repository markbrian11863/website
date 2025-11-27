import React from 'react'
import { Download, Sparkles, Code, Zap, Users, Star } from 'lucide-react'

interface HeroProps {
  onStartTrial?: () => void
}

const Hero: React.FC<HeroProps> = ({ onStartTrial }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              The AI-First
              <span className="highlight"> Code Editor</span>
            </h1>
            <p className="hero-subtitle">
              Built for productivity with AI that understands your code. Write, edit, and debug 
              faster than ever with Cursor's intelligent assistance and powerful features.
            </p>
            
            <div className="offer-banner">
              <span className="offer-icon">🎉</span>
              <span className="offer-text">
                <strong>FREE for 3 Weeks!</strong> Then from $1/month worldwide • M-Pesa Paybill: 200999
              </span>
            </div>
            
            <div className="download-section">
              <button 
                className="btn btn-primary download-btn"
                onClick={() => {
                  console.log('🎯 Start Free Month - Taking you inside the app!')
                  
                  // Create a guest user for immediate access
                  const guestUser = {
                    id: 'guest-' + Date.now(),
                    name: 'Mark Brian',
                    email: 'guest@cursor-app.com',
                    avatar: '/mark-brian-profile.png',
                    plan: 'free' as const,
                    subscription: {
                      status: 'trial' as const,
                      nextBilling: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                      amount: 'Free Trial (21 days)'
                    }
                  }
                  
                  // Save user and redirect to app
                  localStorage.setItem('cursor_user', JSON.stringify(guestUser))
                  localStorage.setItem('cursor_user_created', 'true') // Flag for welcome message
                  console.log('✅ Guest trial account created - redirecting to app...')
                  
                  // Navigate to the AI Studio where they can use features
                  window.location.href = '#ai-studio'
                  
                  // Scroll to AI Studio section
                  setTimeout(() => {
                    const aiStudioSection = document.getElementById('ai-studio')
                    if (aiStudioSection) {
                      aiStudioSection.scrollIntoView({ behavior: 'smooth' })
                      console.log('🎯 Welcome to the AI Studio! Start using features now.')
                    }
                  }, 500)
                  
                  // Trigger page refresh to activate authenticated state
                  setTimeout(() => {
                    window.location.reload()
                  }, 1000)
                }}
                style={{ cursor: 'pointer' }}
              >
                <Download size={20} />
                Start Free Month
              </button>
              <button 
                className="btn btn-secondary demo-btn"
                onClick={() => {
                  console.log('🎯 Try Web Version - Taking you inside the app!')
                  
                  // Create demo user for web features
                  const demoUser = {
                    id: 'demo-' + Date.now(),
                    name: 'Mark Brian',
                    email: 'demo@cursor-app.com',
                    avatar: '/mark-brian-profile.png',
                    plan: 'free' as const,
                    subscription: {
                      status: 'trial' as const,
                      nextBilling: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                      amount: 'Free Web Demo (21 days)',
                      planType: 'Web Demo'
                    }
                  }
                  
                  // Save user and redirect to app
                  localStorage.setItem('cursor_user', JSON.stringify(demoUser))
                  localStorage.setItem('cursor_user_created', 'true')
                  console.log('✅ Demo account created - redirecting to app...')
                  
                  // Navigate to AI Studio
                  window.location.href = '#ai-studio'
                  
                  // Scroll to AI Studio section
                  setTimeout(() => {
                    const aiStudioSection = document.getElementById('ai-studio')
                    if (aiStudioSection) {
                      aiStudioSection.scrollIntoView({ behavior: 'smooth' })
                      console.log('🎯 Welcome to the Web Demo! Try all features now.')
                    }
                  }, 500)
                  
                  // Refresh to activate authenticated state
                  setTimeout(() => {
                    window.location.reload()
                  }, 1000)
                }}
                style={{ cursor: 'pointer' }}
              >
                <Sparkles size={20} />
                Try Web Version
              </button>
            </div>
            
            <div className="payment-info">
              <span className="payment-text">💳 Visa/Mastercard • 🌍 PayPal • 📱 Mobile Money • ₿ Crypto • 🏦 Bank Transfer</span>
            </div>
            
            <div className="ai-features">
              <div className="feature-tag">
                <Code size={16} />
                <span>AI Code Completion</span>
              </div>
              <div className="feature-tag">
                <Zap size={16} />
                <span>Smart Refactoring</span>
              </div>
              <div className="feature-tag">
                <Sparkles size={16} />
                <span>Natural Language Editing</span>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="stat-icon">
                  <Users size={24} />
                </div>
                <div className="stat-content">
                  <h3>1M+</h3>
                  <p>Active Developers</p>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Star size={24} />
                </div>
                <div className="stat-content">
                  <h3>4.9/5</h3>
                  <p>User Rating</p>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Zap size={24} />
                </div>
                <div className="stat-content">
                  <h3>50%</h3>
                  <p>Faster Coding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-bg"></div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-top: 80px;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .highlight {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .download-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .download-btn, .demo-btn {
          gap: 8px;
          padding: 16px 32px;
          font-weight: 600;
          border-radius: 12px;
        }

        .ai-features {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .offer-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          padding: 12px 20px;
          border-radius: 50px;
          margin-bottom: 2rem;
          color: white;
          font-size: 1rem;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
          animation: pulse 2s infinite;
        }

        .offer-icon {
          font-size: 1.25rem;
        }

        .offer-text strong {
          font-weight: 700;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .payment-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .payment-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 25px;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          background: rgba(255, 255, 255, 0.2);
          padding: 12px;
          border-radius: 50%;
        }

        .stat-content h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }

        .stat-content p {
          opacity: 0.8;
          margin: 0;
        }

        .hero-image {
          position: absolute;
          top: 0;
          right: -20%;
          width: 60%;
          height: 100%;
          z-index: 1;
        }

        .hero-bg {
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80') center/cover;
          opacity: 0.3;
          border-radius: 20px 0 0 20px;
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 70px;
            min-height: 90vh;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .download-section {
            flex-direction: column;
            margin-bottom: 2rem;
          }

          .download-btn, .demo-btn {
            width: 100%;
            min-height: 50px;
          }

          .stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-image {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 60px;
            min-height: 85vh;
          }

          .hero-title {
            font-size: 2rem;
            line-height: 1.1;
          }

          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .search-input {
            padding: 0 12px;
          }

          .search-field {
            font-size: 16px; /* Prevent zoom on iOS */
          }

          .stat {
            justify-content: center;
            text-align: center;
          }

          .stat-content h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero