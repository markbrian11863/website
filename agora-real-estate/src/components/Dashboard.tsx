import React, { useState } from 'react'
import { Code, Clock, Download, Star, TrendingUp, Users, Sparkles, Plus } from 'lucide-react'
import { useUser } from './Auth/UserContext'
import ProjectCreator from './ProjectCreator'

const Dashboard: React.FC = () => {
  const { user } = useUser()
  const [isProjectCreatorOpen, setIsProjectCreatorOpen] = useState(false)
  const [userProjects, setUserProjects] = useState<any[]>([])

  // Load user projects on component mount
  React.useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('user_projects') || '[]')
    setUserProjects(projects)
  }, [])

  const handleProjectCreated = (newProject: any) => {
    setUserProjects(prev => [...prev, newProject])
  }

  const stats = [
    { icon: <Code size={24} />, label: 'Lines of Code', value: '12,847', color: 'from-blue-500 to-blue-600' },
    { icon: <Clock size={24} />, label: 'Time Saved', value: '45.2h', color: 'from-green-500 to-green-600' },
    { icon: <Star size={24} />, label: 'AI Suggestions', value: '1,234', color: 'from-yellow-500 to-orange-500' },
    { icon: <TrendingUp size={24} />, label: 'Productivity', value: '+67%', color: 'from-purple-500 to-purple-600' }
  ]

  const recentProjects = [
    { name: 'E-commerce App', language: 'React', lastModified: '2 hours ago', progress: 85 },
    { name: 'API Server', language: 'Node.js', lastModified: '1 day ago', progress: 60 },
    { name: 'Mobile App', language: 'Flutter', lastModified: '3 days ago', progress: 40 }
  ]

  const achievements = [
    { title: 'Speed Demon', description: '10,000 lines coded with AI assistance', icon: '🚀' },
    { title: 'Bug Squasher', description: '100 bugs fixed using AI suggestions', icon: '🐛' },
    { title: 'Early Adopter', description: 'First month user', icon: '⭐' }
  ]

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="container">
        <div className="dashboard-header">
          <div className="welcome">
            <h1>Welcome back, {user?.name?.split(' ')[0]}! 👋</h1>
            <p>Here's what you've accomplished with Cursor AI</p>
          </div>
          <div className="plan-status">
            <span className="plan-badge">{user?.plan || 'Free'} Plan</span>
            {user?.subscription?.status === 'trial' && (
              <span className="trial-badge">14 days left in trial</span>
            )}
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-icon bg-gradient-to-r ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-content">
          <div className="main-content">
            <div className="recent-projects">
              <h2>Recent Projects</h2>
              <div className="projects-list">
                {recentProjects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="project-info">
                      <h3>{project.name}</h3>
                      <p>{project.language} • {project.lastModified}</p>
                    </div>
                    <div className="project-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span>{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="actions-grid">
                <button 
                  className="action-card new-project-btn"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('🎯 New Project button clicked!')
                    setIsProjectCreatorOpen(true)
                  }}
                  style={{
                    cursor: 'pointer',
                    zIndex: 10,
                    position: 'relative'
                  }}
                >
                  <Plus size={32} />
                  <span>New Project</span>
                </button>
                <button className="action-card" onClick={() => window.location.href = '#ai-studio'}>
                  <Sparkles size={32} />
                  <span>AI Studio</span>
                </button>
                <button className="action-card" onClick={() => window.location.href = '/analytics'}>
                  <TrendingUp size={32} />
                  <span>Analytics</span>
                </button>
                <button className="action-card">
                  <Download size={32} />
                  <span>Download IDE</span>
                </button>
                <button className="action-card">
                  <Users size={32} />
                  <span>Invite Team</span>
                </button>
              </div>
            </div>
          </div>

          <div className="sidebar-content">
            <div className="achievements">
              <h2>Achievements</h2>
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <span className="achievement-icon">{achievement.icon}</span>
                    <div className="achievement-info">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="usage-summary">
              <h2>This Month</h2>
              <div className="usage-stats">
                <div className="usage-item">
                  <span>AI Completions</span>
                  <span>2,847 / 5,000</span>
                </div>
                <div className="usage-item">
                  <span>Code Generated</span>
                  <span>12.4k lines</span>
                </div>
                <div className="usage-item">
                  <span>Time Saved</span>
                  <span>45.2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-section {
          background: #f8fafc;
          padding: 6rem 0 4rem;
          min-height: 100vh;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .welcome h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }

        .welcome p {
          color: #718096;
          font-size: 1.125rem;
        }

        .plan-status {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .plan-badge {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .trial-badge {
          background: #ffd700;
          color: #1a365d;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 1rem;
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

        .stat-content h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin: 0;
        }

        .stat-content p {
          color: #718096;
          margin: 0;
          font-size: 0.875rem;
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .main-content, .sidebar-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .recent-projects, .quick-actions, .achievements, .usage-summary {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .recent-projects h2, .quick-actions h2, .achievements h2, .usage-summary h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 1.5rem;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .project-card:hover {
          border-color: #ff6b6b;
        }

        .project-info h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 0.25rem;
        }

        .project-info p {
          font-size: 0.875rem;
          color: #718096;
          margin: 0;
        }

        .project-progress {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar {
          width: 100px;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          transition: width 0.3s ease;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer !important;
        }

        .new-project-btn {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%) !important;
          color: white !important;
          border: 2px solid #48bb78 !important;
          box-shadow: 0 4px 15px rgba(72, 187, 120, 0.3) !important;
          transform: scale(1) !important;
        }

        .new-project-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 8px 25px rgba(72, 187, 120, 0.4) !important;
        }

        .new-project-btn span {
          color: white !important;
          font-weight: 600 !important;
          padding: 1.5rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #4a5568;
        }

        .action-card:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
          color: #ff6b6b;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .achievement-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 8px;
        }

        .achievement-icon {
          font-size: 1.5rem;
        }

        .achievement-info h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 0.25rem;
        }

        .achievement-info p {
          font-size: 0.75rem;
          color: #718096;
          margin: 0;
        }

        .usage-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .usage-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .usage-item:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 1rem;
          }

          .dashboard-content {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .welcome h1 {
            font-size: 2rem;
          }
        }
      `}</style>
      
      {/* Project Creator Modal */}
      <ProjectCreator 
        isOpen={isProjectCreatorOpen}
        onClose={() => setIsProjectCreatorOpen(false)}
        onProjectCreated={handleProjectCreated}
      />
    </section>
  )
}

export default Dashboard