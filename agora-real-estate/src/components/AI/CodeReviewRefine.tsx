import React, { useState } from 'react'
import { Eye, CheckCircle, AlertTriangle, XCircle, Zap, GitPullRequest, MessageSquare } from 'lucide-react'

interface CodeIssue {
  id: string
  type: 'error' | 'warning' | 'suggestion' | 'info'
  severity: 'high' | 'medium' | 'low'
  message: string
  line: number
  column: number
  file: string
  fixable: boolean
  suggestion?: string
}

const CodeReviewRefine: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('review')
  const [codeInput, setCodeInput] = useState(`function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

const user = {
  name: "John",
  email: "john@email.com"
};

// TODO: Add validation
function processOrder(order) {
  if (order.items) {
    const total = calculateTotal(order.items);
    console.log("Order total:", total);
    return total;
  }
}`)

  const [issues] = useState<CodeIssue[]>([
    {
      id: '1',
      type: 'warning',
      severity: 'medium',
      message: 'Consider using reduce() instead of for loop for better readability',
      line: 3,
      column: 3,
      file: 'utils.js',
      fixable: true,
      suggestion: 'items.reduce((total, item) => total + (item.price * item.quantity), 0)'
    },
    {
      id: '2',
      type: 'error',
      severity: 'high',
      message: 'Function may return undefined without explicit return',
      line: 16,
      column: 1,
      file: 'utils.js',
      fixable: true,
      suggestion: 'Add explicit return statement for else case'
    },
    {
      id: '3',
      type: 'suggestion',
      severity: 'low',
      message: 'Consider adding type annotations for better TypeScript support',
      line: 1,
      column: 1,
      file: 'utils.js',
      fixable: true,
      suggestion: 'function calculateTotal(items: OrderItem[]): number'
    },
    {
      id: '4',
      type: 'info',
      severity: 'low',
      message: 'TODO comment should be converted to proper issue tracking',
      line: 12,
      column: 1,
      file: 'utils.js',
      fixable: false
    }
  ])

  const [refinedCode] = useState(`interface OrderItem {
  price: number;
  quantity: number;
}

interface Order {
  items: OrderItem[];
}

interface User {
  name: string;
  email: string;
}

function calculateTotal(items: OrderItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

const user: User = {
  name: "John",
  email: "john@email.com"
};

function processOrder(order: Order): number | null {
  if (!order.items || order.items.length === 0) {
    console.warn("Order has no items");
    return null;
  }
  
  const total = calculateTotal(order.items);
  console.log("Order total:", total);
  return total;
}`)

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <XCircle className="text-red-500" size={16} />
      case 'warning': return <AlertTriangle className="text-yellow-500" size={16} />
      case 'suggestion': return <CheckCircle className="text-blue-500" size={16} />
      default: return <Eye className="text-gray-500" size={16} />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-200 bg-red-50'
      case 'medium': return 'border-yellow-200 bg-yellow-50'
      default: return 'border-blue-200 bg-blue-50'
    }
  }

  const applyFix = (issueId: string) => {
    const issue = issues.find(i => i.id === issueId)
    if (issue && issue.fixable) {
      console.log('Applying fix for:', issue.message)
      // In real implementation, this would apply the suggested fix
    }
  }

  return (
    <div className="code-review-refine">
      <div className="review-header">
        <h3>
          <Eye size={24} />
          Code Review & Refine
        </h3>
        <div className="review-actions">
          <button className="btn btn-secondary">
            <GitPullRequest size={16} />
            Create PR
          </button>
          <button className="btn btn-primary">
            <Zap size={16} />
            Auto-fix All
          </button>
        </div>
      </div>

      <div className="review-tabs">
        <button
          className={`tab ${selectedTab === 'review' ? 'active' : ''}`}
          onClick={() => setSelectedTab('review')}
        >
          <Eye size={16} />
          Code Review
        </button>
        <button
          className={`tab ${selectedTab === 'refine' ? 'active' : ''}`}
          onClick={() => setSelectedTab('refine')}
        >
          <Zap size={16} />
          AI Refine
        </button>
        <button
          className={`tab ${selectedTab === 'compare' ? 'active' : ''}`}
          onClick={() => setSelectedTab('compare')}
        >
          <GitPullRequest size={16} />
          Compare
        </button>
      </div>

      <div className="review-content">
        {selectedTab === 'review' && (
          <div className="review-section">
            <div className="code-editor">
              <h4>Original Code</h4>
              <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                className="code-textarea"
              />
            </div>

            <div className="issues-panel">
              <div className="issues-header">
                <h4>Issues Found ({issues.length})</h4>
                <div className="issue-summary">
                  <span className="error-count">
                    {issues.filter(i => i.type === 'error').length} errors
                  </span>
                  <span className="warning-count">
                    {issues.filter(i => i.type === 'warning').length} warnings
                  </span>
                </div>
              </div>

              <div className="issues-list">
                {issues.map(issue => (
                  <div key={issue.id} className={`issue-card ${getSeverityColor(issue.severity)}`}>
                    <div className="issue-header">
                      <div className="issue-info">
                        {getIssueIcon(issue.type)}
                        <span className="issue-type">{issue.type}</span>
                        <span className="issue-location">
                          Line {issue.line}:{issue.column}
                        </span>
                      </div>
                      {issue.fixable && (
                        <button
                          className="fix-btn"
                          onClick={() => applyFix(issue.id)}
                        >
                          <Zap size={14} />
                          Fix
                        </button>
                      )}
                    </div>
                    
                    <p className="issue-message">{issue.message}</p>
                    
                    {issue.suggestion && (
                      <div className="issue-suggestion">
                        <span className="suggestion-label">Suggested fix:</span>
                        <code className="suggestion-code">{issue.suggestion}</code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'refine' && (
          <div className="refine-section">
            <div className="refine-options">
              <h4>AI Refinement Options</h4>
              <div className="options-grid">
                <label className="option-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Add TypeScript types</span>
                </label>
                <label className="option-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Improve error handling</span>
                </label>
                <label className="option-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Optimize performance</span>
                </label>
                <label className="option-checkbox">
                  <input type="checkbox" />
                  <span>Add documentation</span>
                </label>
                <label className="option-checkbox">
                  <input type="checkbox" />
                  <span>Follow style guide</span>
                </label>
                <label className="option-checkbox">
                  <input type="checkbox" />
                  <span>Add unit tests</span>
                </label>
              </div>
            </div>

            <div className="refined-code">
              <h4>AI Refined Code</h4>
              <pre className="code-display">
                <code>{refinedCode}</code>
              </pre>
            </div>
          </div>
        )}

        {selectedTab === 'compare' && (
          <div className="compare-section">
            <div className="compare-grid">
              <div className="code-panel original">
                <h4>Original</h4>
                <pre className="code-display">
                  <code>{codeInput}</code>
                </pre>
              </div>
              
              <div className="code-panel refined">
                <h4>Refined</h4>
                <pre className="code-display">
                  <code>{refinedCode}</code>
                </pre>
              </div>
            </div>

            <div className="comparison-stats">
              <div className="stat-item">
                <span className="stat-label">Lines of code</span>
                <span className="stat-change positive">+8 lines</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Type safety</span>
                <span className="stat-change positive">+100%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Error handling</span>
                <span className="stat-change positive">Improved</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Readability</span>
                <span className="stat-change positive">Enhanced</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .code-review-refine {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .review-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .review-actions {
          display: flex;
          gap: 1rem;
        }

        .review-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          background: #f7fafc;
          padding: 4px;
          border-radius: 12px;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 12px 20px;
          border: none;
          background: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          color: #718096;
          transition: all 0.3s ease;
        }

        .tab.active {
          background: white;
          color: #ff6b6b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .review-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .code-editor h4,
        .issues-panel h4,
        .refine-options h4,
        .refined-code h4 {
          color: #1a365d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .code-textarea {
          width: 100%;
          height: 400px;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          resize: none;
        }

        .code-textarea:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .issues-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .issue-summary {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }

        .error-count {
          color: #e53e3e;
          font-weight: 500;
        }

        .warning-count {
          color: #d69e2e;
          font-weight: 500;
        }

        .issues-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 350px;
          overflow-y: auto;
        }

        .issue-card {
          padding: 1rem;
          border: 1px solid;
          border-radius: 8px;
        }

        .issue-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .issue-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .issue-type {
          font-weight: 500;
          text-transform: capitalize;
        }

        .issue-location {
          background: rgba(0, 0, 0, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-family: 'Courier New', monospace;
        }

        .fix-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: #ff6b6b;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .issue-message {
          margin: 0 0 0.75rem;
          color: #2d3748;
          line-height: 1.4;
        }

        .issue-suggestion {
          background: rgba(0, 0, 0, 0.05);
          padding: 0.75rem;
          border-radius: 4px;
        }

        .suggestion-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
          color: #718096;
        }

        .suggestion-code {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          color: #2d3748;
        }

        .refine-section {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .option-checkbox {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .option-checkbox input[type="checkbox"] {
          margin: 0;
        }

        .code-display {
          background: #1a202c;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          overflow-x: auto;
        }

        .compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .code-panel {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .code-panel h4 {
          padding: 1rem;
          margin: 0;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .code-panel .code-display {
          margin: 0;
          border-radius: 0;
        }

        .comparison-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 12px;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          color: #718096;
          font-weight: 500;
        }

        .stat-change {
          font-weight: 600;
        }

        .stat-change.positive {
          color: #48bb78;
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

        @media (max-width: 968px) {
          .review-section,
          .refine-section,
          .compare-grid {
            grid-template-columns: 1fr;
          }

          .comparison-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default CodeReviewRefine