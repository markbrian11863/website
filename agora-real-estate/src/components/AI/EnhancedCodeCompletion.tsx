import React, { useState } from 'react'
import { Brain, Zap, AtSign, FileText, Settings } from 'lucide-react'

interface AIModel {
  id: string
  name: string
  description: string
  capabilities: string[]
  speed: 'fast' | 'medium' | 'slow'
  quality: 'high' | 'medium' | 'basic'
}

const EnhancedCodeCompletion: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('gpt-4')
  const [atCommand, setAtCommand] = useState('')
  const [showModelSettings, setShowModelSettings] = useState(false)

  const aiModels: AIModel[] = [
    {
      id: 'gpt-4',
      name: 'GPT-4 Turbo',
      description: 'Most advanced model with superior code understanding',
      capabilities: ['Complex reasoning', 'Large context', 'Multi-language'],
      speed: 'medium',
      quality: 'high'
    },
    {
      id: 'claude-3',
      name: 'Claude 3 Sonnet',
      description: 'Excellent for code analysis and refactoring',
      capabilities: ['Code review', 'Documentation', 'Bug fixing'],
      speed: 'fast',
      quality: 'high'
    },
    {
      id: 'codex',
      name: 'GitHub Copilot',
      description: 'Specialized for code generation and completion',
      capabilities: ['Code completion', 'Function generation', 'Comments'],
      speed: 'fast',
      quality: 'medium'
    },
    {
      id: 'local',
      name: 'Local Model',
      description: 'Privacy-focused local inference',
      capabilities: ['Offline', 'Private', 'Fast'],
      speed: 'fast',
      quality: 'basic'
    }
  ]

  const atCommands = [
    { command: '@explain', description: 'Explain selected code' },
    { command: '@refactor', description: 'Refactor and improve code' },
    { command: '@test', description: 'Generate unit tests' },
    { command: '@docs', description: 'Generate documentation' },
    { command: '@fix', description: 'Fix bugs in code' },
    { command: '@optimize', description: 'Optimize performance' },
    { command: '@convert', description: 'Convert to different language' },
    { command: '@review', description: 'Code review and suggestions' }
  ]

  return (
    <div className="enhanced-completion">
      <div className="completion-header">
        <h3>
          <Brain size={24} />
          Enhanced AI Code Completion
        </h3>
        <button 
          className="settings-btn"
          onClick={() => setShowModelSettings(!showModelSettings)}
        >
          <Settings size={20} />
          Model Settings
        </button>
      </div>

      {showModelSettings && (
        <div className="model-settings">
          <h4>AI Model Selection</h4>
          <div className="models-grid">
            {aiModels.map(model => (
              <div 
                key={model.id} 
                className={`model-card ${selectedModel === model.id ? 'selected' : ''}`}
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="model-header">
                  <h5>{model.name}</h5>
                  <div className="model-badges">
                    <span className={`badge speed-${model.speed}`}>
                      {model.speed}
                    </span>
                    <span className={`badge quality-${model.quality}`}>
                      {model.quality}
                    </span>
                  </div>
                </div>
                <p>{model.description}</p>
                <div className="capabilities">
                  {model.capabilities.map((cap, index) => (
                    <span key={index} className="capability-tag">{cap}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="at-commands-section">
        <h4>
          <AtSign size={20} />
          @ Command System
        </h4>
        <p>Use @ commands to quickly access AI-powered code assistance</p>
        
        <div className="command-input">
          <input
            type="text"
            placeholder="Type @ to see available commands..."
            value={atCommand}
            onChange={(e) => setAtCommand(e.target.value)}
            className="command-field"
          />
        </div>

        <div className="commands-grid">
          {atCommands.map((cmd, index) => (
            <div 
              key={index} 
              className="command-card"
              onClick={() => setAtCommand(cmd.command)}
            >
              <div className="command-name">{cmd.command}</div>
              <div className="command-desc">{cmd.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="completion-features">
        <h4>AI Completion Features</h4>
        <div className="features-grid">
          <div className="feature-item">
            <Zap size={24} />
            <h5>Intelligent Suggestions</h5>
            <p>Context-aware code completions based on your project</p>
          </div>
          
          <div className="feature-item">
            <FileText size={24} />
            <h5>Multi-file Context</h5>
            <p>AI understands relationships across your entire codebase</p>
          </div>
          
          <div className="feature-item">
            <Brain size={24} />
            <h5>Code Understanding</h5>
            <p>Deep semantic analysis for accurate suggestions</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .enhanced-completion {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .completion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .completion-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .settings-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #e2e8f0;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .settings-btn:hover {
          background: #cbd5e0;
        }

        .model-settings {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .model-settings h4 {
          color: #1a365d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .model-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .model-card:hover {
          border-color: #ff6b6b;
        }

        .model-card.selected {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .model-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .model-header h5 {
          margin: 0;
          color: #1a365d;
          font-weight: 600;
        }

        .model-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge {
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .speed-fast { background: #c6f6d5; color: #276749; }
        .speed-medium { background: #fed7aa; color: #c05621; }
        .speed-slow { background: #fecaca; color: #dc2626; }
        .quality-high { background: #dbeafe; color: #1e40af; }
        .quality-medium { background: #e0e7ff; color: #5b21b6; }
        .quality-basic { background: #f3f4f6; color: #374151; }

        .model-card p {
          color: #718096;
          margin: 0.5rem 0;
          font-size: 0.875rem;
        }

        .capabilities {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }

        .capability-tag {
          background: #e2e8f0;
          color: #2d3748;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .at-commands-section {
          margin-bottom: 2rem;
        }

        .at-commands-section h4 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .at-commands-section p {
          color: #718096;
          margin-bottom: 1.5rem;
        }

        .command-input {
          margin-bottom: 1.5rem;
        }

        .command-field {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Courier New', monospace;
          transition: border-color 0.3s ease;
        }

        .command-field:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .commands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .command-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .command-card:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .command-name {
          font-family: 'Courier New', monospace;
          font-weight: 600;
          color: #ff6b6b;
          margin-bottom: 0.25rem;
        }

        .command-desc {
          font-size: 0.875rem;
          color: #718096;
        }

        .completion-features h4 {
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .feature-item {
          text-align: center;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
        }

        .feature-item svg {
          color: #ff6b6b;
          margin-bottom: 1rem;
        }

        .feature-item h5 {
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .feature-item p {
          color: #718096;
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .completion-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .models-grid {
            grid-template-columns: 1fr;
          }

          .commands-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default EnhancedCodeCompletion