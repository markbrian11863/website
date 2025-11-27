import React, { useState, useEffect } from 'react'
import { Code2, FileText, GitBranch, Clock, Target, Brain } from 'lucide-react'
import ChartingEngine from './ChartingEngine'

interface CodeMetrics {
  complexity: number
  maintainability: number
  performance: number
  security: number
}

interface CodeInsightsPanelProps {
  fileContent?: string
  fileName?: string
  language?: string
}

const CodeInsightsPanel: React.FC<CodeInsightsPanelProps> = ({
  fileContent = '',
  fileName = 'Unknown File',
  language = 'javascript'
}) => {
  const [metrics, setMetrics] = useState<CodeMetrics>({
    complexity: 0,
    maintainability: 0,
    performance: 0,
    security: 0
  })
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [codeStats, setCodeStats] = useState({
    lines: 0,
    functions: 0,
    classes: 0,
    comments: 0
  })

  // Analyze code metrics (simulated analysis)
  useEffect(() => {
    if (fileContent) {
      analyzeCode(fileContent)
    }
  }, [fileContent])

  const analyzeCode = (content: string) => {
    const lines = content.split('\n').length
    const functions = (content.match(/function\s+\w+|const\s+\w+\s*=/g) || []).length
    const classes = (content.match(/class\s+\w+/g) || []).length
    const comments = (content.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []).length

    // Simulate complexity analysis
    const complexity = Math.min(100, Math.max(0, 100 - (lines * 0.1) - (functions * 2)))
    const maintainability = Math.min(100, Math.max(0, 90 - (lines * 0.05) + (comments * 2)))
    const performance = Math.min(100, Math.max(0, 85 + Math.random() * 15))
    const security = Math.min(100, Math.max(0, 80 + Math.random() * 20))

    setMetrics({ complexity, maintainability, performance, security })
    setCodeStats({ lines, functions, classes, comments })

    // Generate suggestions based on metrics
    const newSuggestions = []
    if (complexity < 70) newSuggestions.push('Consider breaking down complex functions into smaller ones')
    if (maintainability < 60) newSuggestions.push('Add more comments and documentation')
    if (performance < 80) newSuggestions.push('Optimize loops and data structures')
    if (comments / lines < 0.1) newSuggestions.push('Increase code documentation')
    
    setSuggestions(newSuggestions)
  }

  const metricsData = [
    { name: 'Complexity', value: Math.round(metrics.complexity) },
    { name: 'Maintainability', value: Math.round(metrics.maintainability) },
    { name: 'Performance', value: Math.round(metrics.performance) },
    { name: 'Security', value: Math.round(metrics.security) }
  ]

  const statsData = [
    { name: 'Lines', value: codeStats.lines },
    { name: 'Functions', value: codeStats.functions },
    { name: 'Classes', value: codeStats.classes },
    { name: 'Comments', value: codeStats.comments }
  ]

  const getMetricColor = (value: number) => {
    if (value >= 80) return '#48bb78' // Green
    if (value >= 60) return '#ffa726' // Orange
    return '#f56565' // Red
  }

  return (
    <div className="code-insights-panel">
      <div className="panel-header">
        <div className="file-info">
          <FileText size={20} />
          <div>
            <h3>{fileName}</h3>
            <span className="language-badge">{language.toUpperCase()}</span>
          </div>
        </div>
        <div className="analysis-status">
          <Brain size={16} />
          AI Analysis
        </div>
      </div>

      <div className="insights-grid">
        {/* Code Metrics */}
        <div className="insight-section">
          <h4>📊 Code Quality Metrics</h4>
          <div className="metrics-list">
            {metricsData.map((metric) => (
              <div key={metric.name} className="metric-item">
                <span className="metric-label">{metric.name}</span>
                <div className="metric-bar">
                  <div 
                    className="metric-fill" 
                    style={{ 
                      width: `${metric.value}%`,
                      backgroundColor: getMetricColor(metric.value)
                    }}
                  />
                </div>
                <span className="metric-value">{metric.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Statistics Chart */}
        <div className="insight-section">
          <ChartingEngine
            data={statsData}
            title="Code Statistics"
            type="bar"
            colors={['#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7']}
            interactive={true}
            exportable={false}
          />
        </div>

        {/* Quality Score Visualization */}
        <div className="insight-section">
          <ChartingEngine
            data={metricsData}
            title="Quality Metrics"
            type="pie"
            colors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']}
            interactive={true}
            exportable={false}
          />
        </div>

        {/* AI Suggestions */}
        <div className="insight-section">
          <h4>🤖 AI Suggestions</h4>
          {suggestions.length > 0 ? (
            <div className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="suggestion-item">
                  <Target size={16} />
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-suggestions">
              <div className="success-icon">✅</div>
              <p>Great job! No major issues found.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .code-insights-panel {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .file-info h3 {
          margin: 0;
          color: #2d3748;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .language-badge {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .analysis-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4ecdc4;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .insight-section {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .insight-section h4 {
          margin: 0 0 1rem;
          color: #2d3748;
          font-size: 1rem;
          font-weight: 600;
        }

        .metrics-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-label {
          min-width: 100px;
          font-size: 0.875rem;
          color: #4a5568;
          font-weight: 500;
        }

        .metric-bar {
          flex: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .metric-fill {
          height: 100%;
          transition: width 0.3s ease;
        }

        .metric-value {
          min-width: 40px;
          text-align: right;
          font-size: 0.875rem;
          font-weight: 600;
          color: #2d3748;
        }

        .suggestions-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .suggestion-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background: white;
          border-radius: 8px;
          border-left: 3px solid #ff6b6b;
        }

        .suggestion-item span {
          font-size: 0.875rem;
          color: #4a5568;
          line-height: 1.4;
        }

        .no-suggestions {
          text-align: center;
          padding: 2rem;
        }

        .success-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .no-suggestions p {
          margin: 0;
          color: #48bb78;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .panel-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default CodeInsightsPanel