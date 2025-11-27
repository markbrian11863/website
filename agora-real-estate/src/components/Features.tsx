import React from 'react'
import { Brain, Code2, Zap, MessageSquare, GitBranch, Palette, Terminal, Sparkles } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <Brain size={40} />,
      title: 'AI Code Completion',
      description: 'Intelligent autocomplete that understands your entire codebase and suggests context-aware completions.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'AI-Powered'
    },
    {
      id: 2,
      icon: <MessageSquare size={40} />,
      title: 'Chat with AI',
      description: 'Ask questions about your code, get explanations, and receive programming help in natural language.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Interactive'
    },
    {
      id: 3,
      icon: <Code2 size={40} />,
      title: 'Smart Refactoring',
      description: 'Automatically refactor and optimize your code while maintaining functionality and improving readability.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Smart'
    },
    {
      id: 4,
      icon: <GitBranch size={40} />,
      title: 'Git Integration',
      description: 'Seamless Git workflow with AI-powered commit messages and intelligent merge conflict resolution.',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Integrated'
    },
    {
      id: 5,
      icon: <Terminal size={40} />,
      title: 'Integrated Terminal',
      description: 'Built-in terminal with AI assistance for command suggestions and error debugging.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Terminal'
    },
    {
      id: 6,
      icon: <Palette size={40} />,
      title: 'Custom Themes',
      description: 'Beautiful themes and customizable interface to match your coding style and preferences.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Customizable'
    }
  ]

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">Powerful AI Features</h2>
        <p className="section-subtitle">
          Experience the future of coding with AI-powered tools that understand your intent and help you code faster
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
                <div className="feature-badge">{feature.badge}</div>
                <div className="feature-overlay">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                </div>
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <button className="feature-link">
                  Learn More <Sparkles size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <button 
            className="btn btn-primary"
            onClick={() => {
              console.log('🎯 Try All Features Free - Taking you inside the app!')
              
              // Create full-access trial account
              const fullAccessUser = {
                id: 'full-access-' + Date.now(),
                name: 'Mark Brian',
                email: 'fullaccess@cursor-app.com',
                avatar: '/mark-brian-profile.png',
                plan: 'free' as const,
                subscription: {
                  status: 'trial' as const,
                  nextBilling: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                  amount: 'Full Features Trial (21 days)',
                  planType: 'Full Features'
                }
              }
              
              // Save user and redirect to app
              localStorage.setItem('cursor_user', JSON.stringify(fullAccessUser))
              localStorage.setItem('cursor_user_created', 'true')
              console.log('✅ Full features trial account created - redirecting to app...')
              
              // Navigate to AI Studio
              window.location.href = '#ai-studio'
              
              // Scroll to AI Studio section
              setTimeout(() => {
                const aiStudioSection = document.getElementById('ai-studio')
                if (aiStudioSection) {
                  aiStudioSection.scrollIntoView({ behavior: 'smooth' })
                  console.log('🎯 Welcome to full features access! Try everything now.')
                }
              }, 500)
              
              // Refresh to activate authenticated state
              setTimeout(() => {
                window.location.reload()
              }, 1000)
            }}
            style={{ cursor: 'pointer' }}
          >
            Try All Features Free
          </button>
        </div>
      </div>

      <style jsx>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .feature-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-image img {
          transform: scale(1.05);
        }

        .feature-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .feature-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(255, 107, 107, 0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover .feature-overlay {
          opacity: 1;
        }

        .feature-icon {
          color: white;
          transform: scale(1.2);
        }

        .feature-content {
          padding: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #1a365d;
        }

        .feature-description {
          color: #718096;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feature-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #ff6b6b;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .feature-link:hover {
          color: #ff5252;
        }

        .features-cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-image {
            height: 180px;
          }

          .feature-content {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Features