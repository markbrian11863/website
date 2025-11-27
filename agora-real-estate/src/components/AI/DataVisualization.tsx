import React from 'react'
import { BarChart3, PieChart, TrendingUp, Activity } from 'lucide-react'

interface MetricsChartProps {
  complexity: number
  maintainability: number
  readability: number
  performance: number
  security: number
  testCoverage: number
}

interface IssueDistributionProps {
  errors: number
  warnings: number
  suggestions: number
  performance: number
}

const MetricsChart: React.FC<MetricsChartProps> = ({ 
  complexity, maintainability, readability, performance, security, testCoverage 
}) => {
  const metrics = [
    { name: 'Maintainability', value: maintainability, color: '#48bb78' },
    { name: 'Readability', value: readability, color: '#4299e1' },
    { name: 'Performance', value: performance, color: '#ed8936' },
    { name: 'Security', value: security, color: '#e53e3e' },
    { name: 'Test Coverage', value: testCoverage, color: '#805ad5' },
  ]

  return (
    <div className="metrics-chart">
      <div className="chart-header">
        <BarChart3 size={20} />
        <h4>Code Quality Metrics</h4>
      </div>
      
      <div className="metrics-bars">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-row">
            <div className="metric-label">{metric.name}</div>
            <div className="metric-bar-container">
              <div 
                className="metric-bar"
                style={{
                  width: `${metric.value}%`,
                  backgroundColor: metric.color
                }}
              />
              <span className="metric-value">{Math.round(metric.value)}%</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .metrics-chart {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .chart-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }

        .chart-header h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .metrics-bars {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .metric-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-label {
          min-width: 120px;
          font-size: 0.9rem;
          color: #4a5568;
          font-weight: 500;
        }

        .metric-bar-container {
          flex: 1;
          height: 24px;
          background: #f1f5f9;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .metric-bar {
          height: 100%;
          border-radius: 12px;
          transition: width 1s ease;
          position: relative;
        }

        .metric-value {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.8rem;
          font-weight: 600;
          color: #2d3748;
        }
      `}</style>
    </div>
  )
}

const IssueDistributionChart: React.FC<IssueDistributionProps> = ({
  errors, warnings, suggestions, performance
}) => {
  const total = errors + warnings + suggestions + performance
  
  const issues = [
    { name: 'Errors', count: errors, color: '#e53e3e', percentage: (errors / total) * 100 },
    { name: 'Warnings', count: warnings, color: '#ed8936', percentage: (warnings / total) * 100 },
    { name: 'Suggestions', count: suggestions, color: '#4299e1', percentage: (suggestions / total) * 100 },
    { name: 'Performance', count: performance, color: '#805ad5', percentage: (performance / total) * 100 }
  ]

  return (
    <div className="issue-chart">
      <div className="chart-header">
        <PieChart size={20} />
        <h4>Issue Distribution</h4>
      </div>

      <div className="pie-chart">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {issues.map((issue, index) => {
            let startAngle = 0
            for (let i = 0; i < index; i++) {
              startAngle += (issues[i].percentage / 100) * 360
            }
            const endAngle = startAngle + (issue.percentage / 100) * 360
            const largeArcFlag = issue.percentage > 50 ? 1 : 0

            const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180)
            const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180)
            const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180)
            const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180)

            return issue.count > 0 ? (
              <path
                key={index}
                d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                fill={issue.color}
              />
            ) : null
          })}
        </svg>
      </div>

      <div className="issue-legend">
        {issues.map((issue, index) => (
          <div key={index} className="legend-item">
            <div 
              className="legend-color"
              style={{ backgroundColor: issue.color }}
            />
            <span className="legend-label">{issue.name}</span>
            <span className="legend-count">{issue.count}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .issue-chart {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .chart-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }

        .chart-header h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .pie-chart {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .issue-legend {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .legend-label {
          flex: 1;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .legend-count {
          font-size: 0.9rem;
          font-weight: 600;
          color: #2d3748;
        }
      `}</style>
    </div>
  )
}

export { MetricsChart, IssueDistributionChart }