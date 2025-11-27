import React, { useState } from 'react'
import { FileText, Save, RefreshCw, Plus, X, Eye } from 'lucide-react'

const CursorIgnoreEditor: React.FC = () => {
  const [ignoreContent, setIgnoreContent] = useState(`# Dependencies
node_modules/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
/dist/
/build/
*.tgz
*.tar.gz

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Large files
*.zip
*.rar
*.7z
*.tar
*.iso

# AI ignore patterns
*.min.js
*.min.css
/coverage/
/.nyc_output/`)

  const [commonPatterns] = useState([
    { pattern: 'node_modules/', description: 'NPM dependencies' },
    { pattern: '*.log', description: 'Log files' },
    { pattern: '.env*', description: 'Environment files' },
    { pattern: '/dist/', description: 'Build output' },
    { pattern: '*.min.js', description: 'Minified JavaScript' },
    { pattern: '*.min.css', description: 'Minified CSS' },
    { pattern: '.git/', description: 'Git repository' },
    { pattern: 'coverage/', description: 'Test coverage' },
    { pattern: '*.zip', description: 'Archive files' },
    { pattern: '.vscode/', description: 'VS Code settings' }
  ])

  const [stats] = useState({
    totalPatterns: 23,
    excludedFiles: 1456,
    savedSpace: '234 MB',
    performanceGain: '67%'
  })

  const addPattern = (pattern: string) => {
    setIgnoreContent(prev => `${prev}\n${pattern}`)
  }

  const saveIgnoreFile = () => {
    // In a real implementation, this would save to the file system
    console.log('Saving .cursorignore file:', ignoreContent)
    alert('.cursorignore file saved successfully!')
  }

  const resetToDefaults = () => {
    setIgnoreContent(`# Default Cursor AI ignore patterns
node_modules/
.git/
dist/
build/
*.log
.env*`)
  }

  return (
    <div className="cursor-ignore-editor">
      <div className="editor-header">
        <h3>
          <FileText size={24} />
          .cursorignore Editor
        </h3>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={resetToDefaults}>
            <RefreshCw size={16} />
            Reset
          </button>
          <button className="btn btn-primary" onClick={saveIgnoreFile}>
            <Save size={16} />
            Save
          </button>
        </div>
      </div>

      <div className="editor-stats">
        <div className="stats-grid">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="stat-item">
              <span className="stat-label">
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </span>
              <span className="stat-value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="editor-content">
        <div className="editor-section">
          <h4>Edit .cursorignore</h4>
          <textarea
            value={ignoreContent}
            onChange={(e) => setIgnoreContent(e.target.value)}
            className="ignore-textarea"
            placeholder="Add patterns to ignore files and folders..."
          />
        </div>

        <div className="patterns-section">
          <h4>Common Patterns</h4>
          <div className="patterns-grid">
            {commonPatterns.map((item, index) => (
              <div key={index} className="pattern-card">
                <div className="pattern-info">
                  <code className="pattern-text">{item.pattern}</code>
                  <span className="pattern-desc">{item.description}</span>
                </div>
                <button
                  className="add-pattern-btn"
                  onClick={() => addPattern(item.pattern)}
                >
                  <Plus size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="preview-section">
        <h4>
          <Eye size={20} />
          Preview Impact
        </h4>
        <div className="impact-grid">
          <div className="impact-card positive">
            <h5>Will be ignored</h5>
            <ul>
              <li>node_modules/ (1,234 files)</li>
              <li>*.log (45 files)</li>
              <li>.env files (8 files)</li>
              <li>dist/ (156 files)</li>
            </ul>
          </div>
          <div className="impact-card neutral">
            <h5>Will be included</h5>
            <ul>
              <li>src/ (89 files)</li>
              <li>public/ (12 files)</li>
              <li>*.tsx, *.ts (67 files)</li>
              <li>package.json (1 file)</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cursor-ignore-editor {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .editor-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .editor-stats {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-label {
          display: block;
          color: #718096;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          text-transform: capitalize;
        }

        .stat-value {
          display: block;
          color: #1a365d;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .editor-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .editor-section h4,
        .patterns-section h4 {
          color: #1a365d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .ignore-textarea {
          width: 100%;
          height: 300px;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          resize: vertical;
        }

        .ignore-textarea:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .patterns-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pattern-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .pattern-card:hover {
          border-color: #ff6b6b;
        }

        .pattern-info {
          flex: 1;
        }

        .pattern-text {
          display: block;
          font-family: 'Courier New', monospace;
          font-weight: 600;
          color: #ff6b6b;
          margin-bottom: 0.25rem;
        }

        .pattern-desc {
          font-size: 0.875rem;
          color: #718096;
        }

        .add-pattern-btn {
          background: #e2e8f0;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-pattern-btn:hover {
          background: #ff6b6b;
          color: white;
        }

        .preview-section h4 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .impact-card {
          padding: 1.5rem;
          border-radius: 12px;
          border: 2px solid transparent;
        }

        .impact-card.positive {
          background: #f0fff4;
          border-color: #68d391;
        }

        .impact-card.neutral {
          background: #f7fafc;
          border-color: #cbd5e0;
        }

        .impact-card h5 {
          margin: 0 0 1rem;
          color: #1a365d;
          font-weight: 600;
        }

        .impact-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .impact-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 0.875rem;
          color: #2d3748;
        }

        .impact-card li:last-child {
          border-bottom: none;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 968px) {
          .editor-content {
            grid-template-columns: 1fr;
          }

          .impact-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default CursorIgnoreEditor