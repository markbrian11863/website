import React, { useState, useEffect } from 'react'
import { Code, Users, Clock, TrendingUp, Activity, Zap } from 'lucide-react'
import ChartingEngine from './ChartingEngine'
import { useUser } from '../Auth/UserContext'

interface AnalyticsData {
  productivity: Array<{ name: string; value: number }>
  codeGeneration: Array<{ name: string; value: number }>
  languageUsage: Array<{ name: string; value: number }>
  timeAnalysis: Array<{ name: string; value: number }>
}

const AnalyticsDashboard: React.FC = () => {
  const { user } = useUser()
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    productivity: [],
    codeGeneration: [],
    languageUsage: [],
    timeAnalysis: []
  })

  // Generate sample analytics data (in real app, this would come from API)
  useEffect(() => {
    const generateData = () => {
      const productivity = [
        { name: 'Mon', value: 85 },
        { name: 'Tue', value: 92 },
        { name: 'Wed', value: 78 },
        { name: 'Thu', value: 95 },
        { name: 'Fri', value: 88 },
        { name: 'Sat', value: 65 },
        { name: 'Sun', value: 45 }
      ]

      const codeGeneration = [
        { name: 'Jan', value: 2400 },
        { name: 'Feb', value: 1398 },
        { name: 'Mar', value: 9800 },
        { name: 'Apr', value: 3908 },
        { name: 'May', value: 4800 },
        { name: 'Jun', value: 3800 }
      ]

      const languageUsage = [
        { name: 'TypeScript', value: 35 },
        { name: 'JavaScript', value: 25 },
        { name: 'Python', value: 20 },
        { name: 'React', value: 15 },
        { name: 'CSS', value: 5 }
      ]

      const timeAnalysis = [
        { name: '9 AM', value: 20 },
        { name: '12 PM', value: 45 },
        { name: '3 PM', value: 60 },
        { name: '6 PM', value: 80 },
        { name: '9 PM', value: 35 }
      ]

      setAnalyticsData({
        productivity,
        codeGeneration,
        languageUsage,
        timeAnalysis
      })
    }

    generateData()
  }, [])

  const stats = [
    { 
      icon: <Code size={24} />, 
      label: 'Lines Generated', 
      value: '24,847', 
      change: '+12%',
      positive: true,
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      icon: <Clock size={24} />, 
      label: 'Time Saved', 
      value: '127.3h', 
      change: '+23%',
      positive: true,
      color: 'from-green-500 to-green-600' 
    },
    { 
      icon: <Activity size={24} />, 
      label: 'Productivity', 
      value: '89%', 
      change: '+8%',
      positive: true,
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      icon: <Zap size={24} />, 
      label: 'AI Assists', 
      value: '3,427', 
      change: '+15%',
      positive: true,
      color: 'from-orange-500 to-red-500' 
    }
  ]

  return (
    <div className="analytics-dashboard">
      <div className="dashboard-header">
        <h2>📊 Analytics Dashboard</h2>
        <p>Comprehensive insights into your coding performance with Cursor AI</p>
      </div>

      {/* KPI Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className={`stat-icon bg-gradient-to-r ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <span className={`change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        <div className="chart-section">
          <ChartingEngine
            data={analyticsData.productivity}
            title="Weekly Productivity Score"
            type="area"
            colors={['#4ecdc4', '#45b7d1']}
            interactive={true}
            exportable={true}
          />
        </div>

        <div className="chart-section">
          <ChartingEngine
            data={analyticsData.codeGeneration}
            title="Monthly Code Generation"
            type="bar"
            colors={['#ff6b6b', '#ffa726']}
            interactive={true}
            exportable={true}
          />
        </div>

        <div className="chart-section">
          <ChartingEngine
            data={analyticsData.languageUsage}
            title="Language Usage Distribution"
            type="pie"
            colors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7']}
            interactive={true}
            exportable={true}
          />
        </div>

        <div className="chart-section">
          <ChartingEngine
            data={analyticsData.timeAnalysis}
            title="Daily Activity Pattern"
            type="line"
            colors={['#a8e6cf', '#dcedc8']}
            interactive={true}
            exportable={true}
          />
        </div>
      </div>

      {/* Insights Panel */}
      <div className="insights-panel">
        <h3>🧠 AI Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon">🚀</div>
            <h4>Peak Performance</h4>
            <p>Your productivity peaks at 6 PM. Consider scheduling complex tasks during this time.</p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">📈</div>
            <h4>Growth Trend</h4>
            <p>Code generation increased by 23% this month. Keep up the excellent work!</p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">🎯</div>
            <h4>Focus Areas</h4>
            <p>TypeScript dominates your workflow. Consider exploring Python for data tasks.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .analytics-dashboard {
          padding: 2rem 0;
          background: #f8fafc;
          min-height: 100vh;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .dashboard-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 1rem;
        }

        .dashboard-header p {
          color: #718096;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-content {
          flex: 1;
        }

        .stat-content h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin: 0 0 0.25rem;
        }

        .stat-content p {
          color: #718096;
          margin: 0 0 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .change {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .change.positive {
          background: rgba(72, 187, 120, 0.1);
          color: #48bb78;
        }

        .change.negative {
          background: rgba(245, 101, 101, 0.1);
          color: #f56565;
        }

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
          margin-bottom: 3rem;
        }

        .chart-section {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .insights-panel {
          background: white;
          margin: 0 1rem;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .insights-panel h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .insight-card {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #e2e8f0;
        }

        .insight-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .insight-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.75rem;
        }

        .insight-card p {
          color: #718096;
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AnalyticsDashboard