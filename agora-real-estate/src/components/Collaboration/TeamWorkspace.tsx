import React, { useState } from 'react'
import { Users, MessageSquare, GitBranch, Share2, Crown, Settings, Plus, Video } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  email: string
  role: 'owner' | 'admin' | 'developer' | 'viewer'
  avatar: string
  status: 'online' | 'offline' | 'away'
  lastSeen: string
}

interface Project {
  id: string
  name: string
  description: string
  members: string[]
  lastModified: string
  status: 'active' | 'archived'
}

const TeamWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const [showInviteModal, setShowInviteModal] = useState(false)

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah@team.com',
      role: 'owner',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b601?w=150&h=150&fit=crop&crop=face',
      status: 'online',
      lastSeen: 'now'
    },
    {
      id: '2',
      name: 'Mike Johnson',
      email: 'mike@team.com',
      role: 'developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      status: 'online',
      lastSeen: '2 min ago'
    },
    {
      id: '3',
      name: 'Emily Davis',
      email: 'emily@team.com',
      role: 'developer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      status: 'away',
      lastSeen: '15 min ago'
    }
  ]

  const projects: Project[] = [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with AI recommendations',
      members: ['1', '2', '3'],
      lastModified: '2 hours ago',
      status: 'active'
    },
    {
      id: '2',
      name: 'Mobile Banking App',
      description: 'Secure mobile banking application',
      members: ['1', '2'],
      lastModified: '1 day ago',
      status: 'active'
    }
  ]

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'owner': return <Crown size={16} className="text-yellow-500" />
      case 'admin': return <Settings size={16} className="text-blue-500" />
      default: return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      default: return 'bg-gray-400'
    }
  }

  return (
    <div className="team-workspace">
      <div className="workspace-header">
        <h2>Team Workspace</h2>
        <div className="workspace-actions">
          <button className="btn btn-secondary">
            <Video size={20} />
            Start Meeting
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setShowInviteModal(true)}
          >
            <Plus size={20} />
            Invite Members
          </button>
        </div>
      </div>

      <div className="workspace-tabs">
        <button
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <GitBranch size={16} />
          Projects
        </button>
        <button
          className={`tab ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          <Users size={16} />
          Team Members
        </button>
        <button
          className={`tab ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveTab('chat')}
        >
          <MessageSquare size={16} />
          Team Chat
        </button>
      </div>

      <div className="workspace-content">
        {activeTab === 'projects' && (
          <div className="projects-section">
            <div className="section-header">
              <h3>Active Projects ({projects.length})</h3>
              <button className="btn btn-primary">
                <Plus size={16} />
                New Project
              </button>
            </div>
            
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h4>{project.name}</h4>
                    <span className={`status-badge ${project.status}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-members">
                    <div className="member-avatars">
                      {project.members.map(memberId => {
                        const member = teamMembers.find(m => m.id === memberId)
                        return member ? (
                          <img
                            key={memberId}
                            src={member.avatar}
                            alt={member.name}
                            className="member-avatar"
                            title={member.name}
                          />
                        ) : null
                      })}
                    </div>
                    <span className="member-count">
                      +{project.members.length} members
                    </span>
                  </div>
                  
                  <div className="project-footer">
                    <span className="last-modified">
                      Updated {project.lastModified}
                    </span>
                    <button className="btn btn-outline">
                      <Share2 size={14} />
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="team-section">
            <div className="section-header">
              <h3>Team Members ({teamMembers.length})</h3>
              <button className="btn btn-primary">
                <Plus size={16} />
                Invite Member
              </button>
            </div>
            
            <div className="members-list">
              {teamMembers.map(member => (
                <div key={member.id} className="member-card">
                  <div className="member-info">
                    <div className="member-avatar-container">
                      <img src={member.avatar} alt={member.name} className="member-avatar" />
                      <div className={`status-dot ${getStatusColor(member.status)}`}></div>
                    </div>
                    
                    <div className="member-details">
                      <div className="member-name">
                        {member.name}
                        {getRoleIcon(member.role)}
                      </div>
                      <div className="member-email">{member.email}</div>
                      <div className="member-status">
                        {member.status} • {member.lastSeen}
                      </div>
                    </div>
                  </div>
                  
                  <div className="member-actions">
                    <span className="role-badge">{member.role}</span>
                    <button className="btn btn-outline btn-sm">
                      <MessageSquare size={14} />
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="chat-section">
            <div className="chat-messages">
              <div className="message">
                <img src={teamMembers[0].avatar} alt="" className="message-avatar" />
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-author">{teamMembers[0].name}</span>
                    <span className="message-time">10:30 AM</span>
                  </div>
                  <p>Just pushed the latest changes to the main branch. The new AI completion feature is ready for testing!</p>
                </div>
              </div>
              
              <div className="message">
                <img src={teamMembers[1].avatar} alt="" className="message-avatar" />
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-author">{teamMembers[1].name}</span>
                    <span className="message-time">10:32 AM</span>
                  </div>
                  <p>Great! I'll review the code and run some tests. The @ command feature looks amazing.</p>
                </div>
              </div>
            </div>
            
            <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button className="send-btn">Send</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .team-workspace {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .workspace-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .workspace-header h2 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .workspace-actions {
          display: flex;
          gap: 1rem;
        }

        .workspace-tabs {
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

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-header h3 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: #ff6b6b;
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.1);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .project-header h4 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .status-badge.active {
          background: #c6f6d5;
          color: #276749;
        }

        .project-description {
          color: #718096;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-members {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .member-avatars {
          display: flex;
          margin-left: -8px;
        }

        .member-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
        }

        .member-count {
          font-size: 0.875rem;
          color: #718096;
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .last-modified {
          font-size: 0.875rem;
          color: #718096;
        }

        .members-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .member-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .member-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .member-avatar-container {
          position: relative;
        }

        .member-avatar-container .member-avatar {
          width: 48px;
          height: 48px;
        }

        .status-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
        }

        .member-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .member-name {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #1a365d;
        }

        .member-email {
          color: #718096;
          font-size: 0.875rem;
        }

        .member-status {
          color: #a0aec0;
          font-size: 0.75rem;
        }

        .member-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .role-badge {
          background: #e2e8f0;
          color: #2d3748;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .chat-section {
          display: flex;
          flex-direction: column;
          height: 400px;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          gap: 1rem;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .message-content {
          flex: 1;
        }

        .message-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .message-author {
          font-weight: 600;
          color: #1a365d;
        }

        .message-time {
          font-size: 0.75rem;
          color: #a0aec0;
        }

        .message-content p {
          margin: 0;
          color: #2d3748;
          line-height: 1.5;
        }

        .chat-input {
          display: flex;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .chat-input input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
        }

        .chat-input input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .send-btn {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
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

        .btn-outline {
          background: none;
          border: 1px solid #e2e8f0;
          color: #2d3748;
        }

        .btn-sm {
          padding: 6px 12px;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .workspace-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .workspace-actions {
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .member-card {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .member-actions {
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  )
}

export default TeamWorkspace