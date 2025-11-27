import React, { useState, useEffect } from 'react'
import { Menu, X, Code2, Zap, User, ChevronDown } from 'lucide-react'
import AuthModal from './Auth/AuthModal'
import UserProfile from './Auth/UserProfile'
import { useUser } from './Auth/UserContext'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login')
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false)
  const { user, isAuthenticated, logout } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'AI Studio', href: '#ai-studio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Download', href: '#download' },
    ...(isAuthenticated ? [{ name: 'Dashboard', href: '/dashboard' }] : [])
  ]

  const handleSignIn = () => {
    setAuthModalTab('login')
    setIsAuthModalOpen(true)
  }

  const handleSignUp = () => {
    console.log('🎯 Start Free Trial button clicked!')
    setAuthModalTab('signup')
    setIsAuthModalOpen(true)
    console.log('AuthModal opened with signup tab')
  }

  const handleUserMenuClick = () => {
    setIsUserProfileOpen(true)
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Code2 size={32} />
            <span>Cursor</span>
            <Zap size={20} className="ai-icon" />
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.href.startsWith('/') ? (
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {isAuthenticated ? (
              <div className="user-menu">
                <button className="user-button" onClick={handleUserMenuClick}>
                  <img 
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=ff6b6b&color=fff`} 
                    alt={user?.name} 
                    className="user-avatar"
                  />
                  <span className="user-name">{user?.name}</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            ) : (
              <>
                <button className="btn btn-secondary" onClick={handleSignIn}>Sign In</button>
                <button 
                  onClick={handleSignUp}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  Start Free Trial
                </button>
              </>
            )}
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {isAuthenticated ? (
              <button className="btn btn-primary mobile-menu-cta" onClick={handleUserMenuClick}>
                My Account
              </button>
            ) : (
              <>
                <button className="btn btn-secondary mobile-menu-cta" onClick={handleSignIn}>
                  Sign In
                </button>
                <button 
                  onClick={handleSignUp}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '100%',
                    marginTop: '10px'
                  }}
                >
                  Start Free Trial
                </button>
                
                {/* 🚨 EMERGENCY BACKUP TRIAL BUTTON */}
                <button
                  onClick={() => {
                    console.log('🚨 EMERGENCY BACKUP TRIAL BUTTON CLICKED!')
                    console.log('Force opening modal...')
                    setAuthModalTab('signup')
                    setIsAuthModalOpen(true)
                    console.log('Modal state set to open with signup tab')
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginLeft: '10px',
                    boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  🚀 BACKUP
                </button>
                
                {/* 🎯 TEST NEW PROJECT BUTTON */}
                <button
                  onClick={() => {
                    console.log('🎯 TEST NEW PROJECT BUTTON CLICKED!')
                    alert('New Project button works! Modal would open here.')
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginLeft: '10px',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  📁 TEST PROJECT
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authModalTab}
      />

      <UserProfile
        isOpen={isUserProfileOpen}
        onClose={() => setIsUserProfileOpen(false)}
      />

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.25rem;
          color: #1a365d;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-weight: 500;
          color: #4a5568;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #ff6b6b;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-menu {
          position: relative;
        }

        .user-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 107, 107, 0.1);
          border: 2px solid rgba(255, 107, 107, 0.2);
          border-radius: 50px;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .user-button:hover {
          background: rgba(255, 107, 107, 0.15);
          border-color: rgba(255, 107, 107, 0.3);
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-name {
          font-weight: 500;
          color: #2d3748;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          color: #4a5568;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 2rem;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-menu-link {
          padding: 0.75rem 0;
          font-weight: 500;
          color: #4a5568;
          border-bottom: 1px solid #e2e8f0;
        }

        .mobile-menu-cta {
          margin-top: 1rem;
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav {
            height: 70px;
          }

          .nav-links {
            display: none;
          }

          .nav-actions {
            display: none;
          }

          .mobile-menu-button {
            display: block;
            padding: 10px;
            min-width: 44px;
            min-height: 44px;
          }

          .mobile-menu {
            display: flex;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .logo span {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 480px) {
          .nav {
            height: 60px;
            padding: 0 10px;
          }

          .logo span {
            font-size: 1rem;
          }

          .mobile-menu {
            padding: 1.5rem;
          }

          .mobile-menu-link {
            padding: 1rem 0;
            font-size: 1.125rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header