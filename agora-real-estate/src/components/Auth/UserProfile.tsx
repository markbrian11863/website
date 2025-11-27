import React, { useState } from 'react'
import { User, Settings, CreditCard, Download, LogOut, Bell, Shield } from 'lucide-react'
import { useUser } from './UserContext'

interface UserProfileProps {
  isOpen: boolean
  onClose: () => void
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('profile')
  const { user, logout } = useUser()

  const handleLogout = () => {
    logout()
    onClose()
    window.location.href = '/' // Navigate to home page
  }

  if (!isOpen) return null

  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-content" onClick={e => e.stopPropagation()}>
        <div className="profile-header">
          <img 
            src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=ff6b6b&color=fff`} 
            alt={user?.name} 
            className="profile-avatar" 
          />
          <div className="profile-info">
            <h2>{user?.name || 'User'}</h2>
            <p>{user?.email || 'user@example.com'}</p>
            <span className="plan-badge">{user?.plan || 'Free'} Plan</span>
          </div>
        </div>

        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={16} />
            Profile
          </button>
          <button
            className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            <CreditCard size={16} />
            Billing
          </button>
          <button
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={16} />
            Settings
          </button>
        </div>

        <div className="profile-body">
          {activeTab === 'profile' && (
            <div className="profile-section">
              <h3>Profile Information</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={user?.name || ''} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user?.email || ''} />
              </div>
              <button className="btn btn-primary">Update Profile</button>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="billing-section">
              <h3>Billing Information</h3>
              <div className="subscription-card">
                <div className="sub-header">
                  <h4>Current Plan: {user?.plan || 'Free'}</h4>
                  <span className={`status ${user?.subscription?.status || 'inactive'}`}>
                    {user?.subscription?.status || 'Inactive'}
                  </span>
                </div>
                <p>Next billing: {user?.subscription?.nextBilling || 'N/A'}</p>
                <p>Amount: {user?.subscription?.amount || 'Free'}/month</p>
                <div className="billing-actions">
                  <button className="btn btn-secondary">Change Plan</button>
                  <button className="btn btn-outline">Cancel Subscription</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <h3>Preferences</h3>
              <div className="setting-item">
                <Bell size={20} />
                <span>Email Notifications</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="setting-item">
                <Shield size={20} />
                <span>Two-Factor Authentication</span>
                <button className="btn btn-sm">Enable</button>
              </div>
              <div className="setting-item">
                <Download size={20} />
                <span>Auto-update</span>
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          )}
        </div>

        <div className="profile-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>

      <style jsx>{`
        .profile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .profile-content {
          background: white;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          border-bottom: 1px solid #e2e8f0;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border-radius: 20px 20px 0 0;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.3);
        }

        .profile-info h2 {
          margin: 0 0 0.25rem;
          font-size: 1.5rem;
        }

        .profile-info p {
          margin: 0 0 0.5rem;
          opacity: 0.9;
        }

        .plan-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .profile-tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
        }

        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          color: #ff6b6b;
          border-bottom: 2px solid #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .profile-body {
          padding: 2rem;
        }

        .profile-section h3,
        .billing-section h3,
        .settings-section h3 {
          margin-bottom: 1.5rem;
          color: #1a365d;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .subscription-card {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .sub-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .sub-header h4 {
          margin: 0;
          color: #1a365d;
        }

        .status.active {
          background: #48bb78;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
        }

        .billing-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .setting-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .setting-item:last-child {
          border-bottom: none;
        }

        .profile-footer {
          padding: 1.5rem 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e53e3e;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }

        .btn {
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
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
          border: 2px solid #e2e8f0;
          color: #2d3748;
        }

        .btn-sm {
          padding: 4px 12px;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  )
}

export default UserProfile