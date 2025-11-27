import React, { useState } from 'react'
import { Zap, Users, GitBranch, Settings, Brain, Eye } from 'lucide-react'
import TeamWorkspace from './Collaboration/TeamWorkspace'
import EnhancedCodeCompletion from './AI/EnhancedCodeCompletion'
import LargeProjectManager from './ProjectManagement/LargeProjectManager'
import CursorIgnoreEditor from './ProjectManagement/CursorIgnoreEditor'
import CodeReviewRefine from './AI/CodeReviewRefine'

const AdvancedFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('collaboration')

  const features = [
    {
      id: 'collaboration',
      name: 'Team Collaboration',
      icon: <Users size={20} />,
      description: 'Real-time collaboration tools'
    },
    {
      id: 'ai-completion',
      name: 'Enhanced AI',
      icon: <Brain size={20} />,
      description: 'Advanced AI code completion'
    },
    {
      id: 'project-management',
      name: 'Project Manager',
      icon: <GitBranch size={20} />,
      description: 'Large project handling'
    },
    {
      id: 'cursor-ignore',
      name: '.cursorignore',
      icon: <Settings size={20} />,
      description: 'File exclusion management'
    },
    {
      id: 'code-review',
      name: 'Code Review',
      icon: <Eye size={20} />,
      description: 'Review and refine code'
    }
  ]

  return (
    <section id="advanced-features" className="advanced-features-section">
      <div className="container">
        <div className="features-header">
          <h2>
            <Zap size={32} />
            Advanced Developer Features
          </h2>
          <p>Professional tools for serious developers and teams</p>
        </div>

        <div className="features-navigation">
          {features.map(feature => (
            <button
              key={feature.id}
              className={`feature-nav-btn ${activeFeature === feature.id ? 'active' : ''}`}
              onClick={() => setActiveFeature(feature.id)}
            >
              {feature.icon}
              <div className="nav-content">
                <span className="nav-title">{feature.name}</span>
                <span className="nav-desc">{feature.description}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="feature-content">
          {activeFeature === 'collaboration' && <TeamWorkspace />}
          {activeFeature === 'ai-completion' && <EnhancedCodeCompletion />}
          {activeFeature === 'project-management' && <LargeProjectManager />}
          {activeFeature === 'cursor-ignore' && <CursorIgnoreEditor />}
          {activeFeature === 'code-review' && <CodeReviewRefine />}
        </div>
      </div>

      <style jsx>{`
        .advanced-features-section {
          background: #f8fafc;
          padding: 6rem 0;
        }

        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .features-header h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 1rem;
        }

        .features-header p {
          font-size: 1.25rem;
          color: #718096;
        }

        .features-navigation {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .feature-nav-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .feature-nav-btn:hover {
          border-color: #ff6b6b;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.1);
        }

        .feature-nav-btn.active {
          border-color: #ff6b6b;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 167, 38, 0.1) 100%);
        }

        .nav-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-title {
          font-weight: 600;
          color: #1a365d;
        }

        .nav-desc {
          font-size: 0.875rem;
          color: #718096;
        }

        .feature-content {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 768px) {
          .features-navigation {
            grid-template-columns: 1fr;
          }

          .features-header h2 {
            font-size: 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AdvancedFeatures