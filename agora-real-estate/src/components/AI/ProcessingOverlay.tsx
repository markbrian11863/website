import React from 'react'
import { Brain, Zap } from 'lucide-react'

export const ProcessingOverlay: React.FC = () => {
  return (
    <div className="processing-overlay">
      <div className="processing-content">
        <div className="processing-icon">
          <Brain size={32} />
          <Zap size={16} className="zap-icon" />
        </div>
        <h3>AI Processing</h3>
        <p>Analyzing your code with advanced AI...</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
      
      <style jsx>{`
        .processing-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .processing-content {
          text-align: center;
          color: white;
          padding: 2rem;
          border-radius: 12px;
          background: rgba(30, 30, 30, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .processing-icon {
          position: relative;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        .processing-icon svg {
          color: #667eea;
        }
        
        .zap-icon {
          position: absolute;
          top: -4px;
          right: -4px;
          color: #f1c40f !important;
          animation: pulse 1s infinite;
        }
        
        .processing-content h3 {
          margin: 0 0 0.5rem;
          font-size: 1.25rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .processing-content p {
          margin: 0 0 1.5rem;
          opacity: 0.8;
        }
        
        .loading-bar {
          width: 200px;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          margin: 0 auto;
        }
        
        .loading-progress {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
          background-size: 200% 100%;
          animation: loading 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }
        
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}