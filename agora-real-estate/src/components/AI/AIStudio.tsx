import React, { useState, useEffect } from 'react'
import { Sparkles, Image, Code, Brain, CheckCircle } from 'lucide-react'
import { useUser } from '../Auth/UserContext'
import CursorWorkspace from './CursorWorkspace'
import CodeGenerator from './CodeGenerator'
import PaymentInstructions from '../PaymentInstructions'

const AIStudio: React.FC = () => {
  const { user, isAuthenticated } = useUser()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [analysisHistory, setAnalysisHistory] = useState<any[]>([])
  const [showWelcome, setShowWelcome] = useState(false)

  // Check if user just started trial (show welcome message)
  useEffect(() => {
    if (isAuthenticated && user?.subscription?.status === 'trial') {
      const userCreated = localStorage.getItem('cursor_user_created')
      if (userCreated) {
        setShowWelcome(true)
        localStorage.removeItem('cursor_user_created') // Remove after showing once
        // Hide welcome after 8 seconds
        setTimeout(() => setShowWelcome(false), 8000)
      }
    }
  }, [isAuthenticated, user])

  // Get personalized welcome message based on plan type
  const getWelcomeMessage = () => {
    const planType = (user?.subscription as any)?.planType || 'Free Trial'
    
    switch (planType) {
      case 'Student':
        return {
          title: '🎓 Welcome to your Student Trial!',
          subtitle: 'You have 21 days of free access + 50% off after trial. Perfect for learning!'
        }
      case 'Web Demo':
        return {
          title: '🌐 Welcome to the Web Demo!',
          subtitle: 'Explore all web features for 21 days. Upload, analyze, and generate code!'
        }
      case 'Free Trial':
        return {
          title: '🆓 Welcome to your 3-Week Trial!',
          subtitle: 'Full access to all premium features for 21 days. Start creating!'
        }
      case 'Full Features':
        return {
          title: '🚀 Welcome to Full Features Access!',
          subtitle: 'Experience ALL premium features for 21 days. AI completion, chat, refactoring & more!'
        }
      default:
        return {
          title: '🎉 Welcome to your FREE trial!',
          subtitle: 'You can now use all AI features below. Upload images, generate code, and explore!'
        }
    }
  }

  const handleImageUpload = (file: File, source: 'file' | 'camera') => {
    console.log('Image uploaded:', file.name, 'Source:', source)
  }

  const handleImageAnalyze = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const handleAnalysisComplete = (result: any) => {
    setAnalysisHistory(prev => [result, ...prev])
  }

  const handleCodeGenerate = (prompt: string, type: string) => {
    console.log('Generating code:', prompt, 'Type:', type)
  }

  return (
    <section id="ai-studio" className="ai-studio-section">
      <div className="container">
        <div className="studio-header">
          <h2>
            <Sparkles size={32} />
            AI Studio
          </h2>
          <p>Upload images, analyze with AI, and generate code instantly</p>
        </div>

        {showWelcome && (
          <div className="welcome-banner">
            <div className="welcome-content">
              <CheckCircle size={24} />
              <div className="welcome-text">
                <h3>{getWelcomeMessage().title}</h3>
                <p>{getWelcomeMessage().subtitle}</p>
              </div>
              <button 
                onClick={() => setShowWelcome(false)}
                className="welcome-close"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="studio-content">
          <div className="ai-tools-grid">
            <div className="ai-tool cursor-ai-section">
              <div className="tool-header">
                <Brain className="tool-icon" size={32} />
                <div className="tool-info">
                  <h3>🧠 AI File Analysis</h3>
                  <p>Professional code analysis with Cursor AI - Upload files for comprehensive insights, optimization, and suggestions</p>
                </div>
              </div>
              
              <CursorWorkspace onAnalysisComplete={handleAnalysisComplete} />
            </div>

            <div className="ai-tool">
              <CodeGenerator onCodeGenerate={handleCodeGenerate} />
            </div>
          </div>

          <PaymentInstructions />

          {analysisHistory.length > 0 && (
            <div className="analysis-history">
              <h3>Analysis History</h3>
              <div className="history-grid">
                {analysisHistory.slice(0, 3).map((analysis) => (
                  <div key={analysis.id} className="history-card">
                    <img src={analysis.imageUrl} alt="Analysis" />
                    <div className="history-info">
                      <p>{analysis.analysis.description.substring(0, 100)}...</p>
                      <span>{new Date(analysis.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .ai-studio-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6rem 0;
        }

        .studio-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .studio-header h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .studio-header p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .analysis-history {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .analysis-history h3 {
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .history-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .history-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .history-card img {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
        }

        .history-info p {
          margin: 0 0 0.5rem;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .history-info span {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .ai-tools-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .ai-tool {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cursor-ai-section {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .cursor-ai-section:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        .tool-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tool-icon {
          color: rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .tool-info h3 {
          margin: 0 0 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .tool-info p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          line-height: 1.5;
        }

        .welcome-banner {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          border-radius: 16px;
          margin-bottom: 2rem;
          padding: 0;
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
          animation: slideIn 0.5s ease;
        }

        .welcome-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 2rem;
          position: relative;
        }

        .welcome-text h3 {
          margin: 0 0 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
        }

        .welcome-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
        }

        .welcome-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: background 0.2s ease;
        }

        .welcome-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 968px) {
          .ai-tools-grid {
            grid-template-columns: 1fr;
          }
          
          .welcome-content {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }
          
          .welcome-close {
            position: relative;
            top: 0;
            right: 0;
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AIStudio