import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Home, RotateCcw, ExternalLink, Bookmark } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavigationControlsProps {
  position?: 'top' | 'bottom' | 'floating'
  showLabels?: boolean
}

const NavigationControls: React.FC<NavigationControlsProps> = ({ 
  position = 'floating',
  showLabels = true 
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [history, setHistory] = useState<string[]>(['/'])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Alt + Left Arrow = Back
      if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault()
        goBack()
      }
      // Alt + Right Arrow = Forward
      if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault()
        goForward()
      }
      // Alt + Home = Go Home
      if (e.altKey && e.key === 'Home') {
        e.preventDefault()
        goHome()
      }
      // F5 or Ctrl+R = Refresh
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        // Let browser handle refresh
      }
      // Ctrl + T = New Tab
      if (e.ctrlKey && e.key === 't') {
        e.preventDefault()
        openInNewTab()
      }
      // Ctrl + D = Bookmark
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault()
        addBookmark()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [canGoBack, canGoForward])

  // Track navigation history
  useEffect(() => {
    const currentPath = location.pathname + location.search + location.hash
    
    setHistory(prev => {
      const newHistory = [...prev]
      
      // If we're not at the end of history, remove everything after current position
      if (currentIndex < newHistory.length - 1) {
        newHistory.splice(currentIndex + 1)
      }
      
      // Add new path if it's different from the current one
      if (newHistory[newHistory.length - 1] !== currentPath) {
        newHistory.push(currentPath)
        setCurrentIndex(newHistory.length - 1)
      }
      
      return newHistory
    })
  }, [location])

  // Update navigation state
  useEffect(() => {
    setCanGoBack(currentIndex > 0)
    setCanGoForward(currentIndex < history.length - 1)
  }, [currentIndex, history])

  const goBack = () => {
    if (canGoBack) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      navigate(history[newIndex])
    }
  }

  const goForward = () => {
    if (canGoForward) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      navigate(history[newIndex])
    }
  }

  const goHome = () => {
    navigate('/')
  }

  const refresh = () => {
    window.location.reload()
  }

  const openInNewTab = () => {
    window.open(window.location.href, '_blank')
  }

  const addBookmark = () => {
    // For modern browsers, we can suggest adding a bookmark
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).catch(() => {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert('URL copied to clipboard!')
        })
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('URL copied to clipboard! You can bookmark it manually.')
      }).catch(() => {
        alert('Press Ctrl+D (or Cmd+D on Mac) to bookmark this page')
      })
    }
  }

  const getCurrentPageTitle = () => {
    const path = location.pathname
    if (path === '/') return 'Home'
    if (path.includes('dashboard')) return 'Dashboard'
    if (path.includes('ai-studio')) return 'AI Studio'
    if (path.includes('pricing')) return 'Pricing'
    if (path.includes('features')) return 'Features'
    return 'Page'
  }

  return (
    <>
      <div className={`navigation-controls ${position}`}>
        <div className="nav-group">
          {/* Back Button */}
          <button 
            onClick={goBack}
            disabled={!canGoBack}
            className="nav-btn back-btn"
            title="Go Back"
          >
            <ChevronLeft size={18} />
            {showLabels && <span>Back</span>}
          </button>

          {/* Forward Button */}
          <button 
            onClick={goForward}
            disabled={!canGoForward}
            className="nav-btn forward-btn"
            title="Go Forward"
          >
            <ChevronRight size={18} />
            {showLabels && <span>Forward</span>}
          </button>
        </div>

        {/* Current Page Indicator */}
        <div className="page-indicator">
          <span className="page-title">{getCurrentPageTitle()}</span>
          <span className="page-position">{currentIndex + 1} / {history.length}</span>
        </div>

        <div className="nav-group">
          {/* Home Button */}
          <button 
            onClick={goHome}
            className="nav-btn home-btn"
            title="Go Home"
          >
            <Home size={18} />
            {showLabels && <span>Home</span>}
          </button>

          {/* Refresh Button */}
          <button 
            onClick={refresh}
            className="nav-btn refresh-btn"
            title="Refresh Page"
          >
            <RotateCcw size={18} />
            {showLabels && <span>Refresh</span>}
          </button>

          {/* New Tab Button */}
          <button 
            onClick={openInNewTab}
            className="nav-btn new-tab-btn"
            title="Open in New Tab"
          >
            <ExternalLink size={18} />
            {showLabels && <span>New Tab</span>}
          </button>

          {/* Bookmark Button */}
          <button 
            onClick={addBookmark}
            className="nav-btn bookmark-btn"
            title="Bookmark Page"
          >
            <Bookmark size={18} />
            {showLabels && <span>Bookmark</span>}
          </button>
        </div>
      </div>

      <style jsx>{`
        .navigation-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          user-select: none;
        }

        .navigation-controls.floating {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          min-width: 600px;
        }

        .navigation-controls.top {
          position: sticky;
          top: 0;
          width: 100%;
          border-radius: 0;
          border-left: none;
          border-right: none;
        }

        .navigation-controls.bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-bottom: none;
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4a5568;
          min-height: 36px;
        }

        .nav-btn:hover:not(:disabled) {
          background: #f7fafc;
          border-color: #cbd5e0;
          color: #2d3748;
          transform: translateY(-1px);
        }

        .nav-btn:active {
          transform: translateY(0);
        }

        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none;
        }

        .back-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
          border-color: #3182ce;
          color: #2b6cb0;
        }

        .forward-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
          border-color: #3182ce;
          color: #2b6cb0;
        }

        .home-btn:hover {
          background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
          border-color: #38a169;
          color: #2f855a;
        }

        .refresh-btn:hover {
          background: linear-gradient(135deg, #fffaf0 0%, #feebc8 100%);
          border-color: #ed8936;
          color: #c05621;
        }

        .new-tab-btn:hover {
          background: linear-gradient(135deg, #faf5ff 0%, #e9d8fd 100%);
          border-color: #805ad5;
          color: #553c9a;
        }

        .bookmark-btn:hover {
          background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
          border-color: #e53e3e;
          color: #c53030;
        }

        .page-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0 1rem;
          border-left: 1px solid #e2e8f0;
          border-right: 1px solid #e2e8f0;
        }

        .page-title {
          font-weight: 600;
          color: #2d3748;
          font-size: 0.875rem;
        }

        .page-position {
          font-size: 0.75rem;
          color: #718096;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .navigation-controls.floating {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            transform: none;
            min-width: auto;
            border-radius: 0;
            border-left: none;
            border-right: none;
            border-bottom: none;
          }

          .nav-btn span {
            display: none;
          }

          .nav-btn {
            padding: 0.5rem;
            min-width: 36px;
          }

          .page-indicator {
            padding: 0 0.5rem;
          }

          .page-title {
            font-size: 0.75rem;
          }

          .page-position {
            font-size: 0.625rem;
          }
        }

        @media (max-width: 480px) {
          .navigation-controls {
            padding: 0.5rem;
          }

          .nav-group {
            gap: 0.25rem;
          }

          .new-tab-btn,
          .bookmark-btn {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default NavigationControls