import React from 'react'
import { ChevronLeft, ChevronRight, Home, Menu } from 'lucide-react'

interface MobileNavigationProps {
  onBack: () => void
  onForward: () => void
  onHome: () => void
  onMenu: () => void
  canGoBack: boolean
  canGoForward: boolean
  currentPage: string
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onBack,
  onForward,
  onHome,
  onMenu,
  canGoBack,
  canGoForward,
  currentPage
}) => {
  return (
    <>
      <div className="mobile-navigation">
        <button 
          onClick={onBack}
          disabled={!canGoBack}
          className="mobile-nav-btn"
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          onClick={onForward}
          disabled={!canGoForward}
          className="mobile-nav-btn"
        >
          <ChevronRight size={20} />
        </button>

        <div className="mobile-page-info">
          <span>{currentPage}</span>
        </div>

        <button 
          onClick={onHome}
          className="mobile-nav-btn home"
        >
          <Home size={20} />
        </button>

        <button 
          onClick={onMenu}
          className="mobile-nav-btn menu"
        >
          <Menu size={20} />
        </button>
      </div>

      <style jsx>{`
        .mobile-navigation {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-top: 1px solid #e2e8f0;
          padding: 0.75rem;
          align-items: center;
          justify-content: space-between;
          z-index: 1001;
        }

        .mobile-nav-btn {
          background: transparent;
          border: none;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #4a5568;
        }

        .mobile-nav-btn:hover:not(:disabled) {
          background: #f7fafc;
          color: #2d3748;
        }

        .mobile-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .mobile-nav-btn.home {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          color: white;
        }

        .mobile-nav-btn.menu {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .mobile-page-info {
          flex: 1;
          text-align: center;
          font-size: 0.875rem;
          font-weight: 500;
          color: #2d3748;
        }

        @media (max-width: 768px) {
          .mobile-navigation {
            display: flex;
          }
        }
      `}</style>
    </>
  )
}

export default MobileNavigation