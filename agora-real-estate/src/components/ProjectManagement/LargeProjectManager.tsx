import React, { useState } from 'react'
import { Folder, File, GitBranch, Search, Filter, Zap, Eye, EyeOff, Settings } from 'lucide-react'

interface ProjectFile {
  id: string
  name: string
  path: string
  size: number
  type: 'file' | 'folder'
  language?: string
  ignored: boolean
  children?: ProjectFile[]
}

const LargeProjectManager: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [showIgnored, setShowIgnored] = useState(false)
  
  const projectStructure: ProjectFile[] = [
    {
      id: '1',
      name: 'src',
      path: '/src',
      size: 0,
      type: 'folder',
      ignored: false,
      children: [
        {
          id: '2',
          name: 'components',
          path: '/src/components',
          size: 0,
          type: 'folder',
          ignored: false,
          children: [
            { id: '3', name: 'Header.tsx', path: '/src/components/Header.tsx', size: 4532, type: 'file', language: 'typescript', ignored: false },
            { id: '4', name: 'Footer.tsx', path: '/src/components/Footer.tsx', size: 3214, type: 'file', language: 'typescript', ignored: false }
          ]
        },
        { id: '5', name: 'App.tsx', path: '/src/App.tsx', size: 2156, type: 'file', language: 'typescript', ignored: false },
        { id: '6', name: 'index.tsx', path: '/src/index.tsx', size: 1024, type: 'file', language: 'typescript', ignored: false }
      ]
    },
    {
      id: '7',
      name: 'node_modules',
      path: '/node_modules',
      size: 156000000,
      type: 'folder',
      ignored: true,
      children: []
    },
    {
      id: '8',
      name: '.git',
      path: '/.git',
      size: 45000000,
      type: 'folder',
      ignored: true,
      children: []
    },
    { id: '9', name: 'package.json', path: '/package.json', size: 2048, type: 'file', language: 'json', ignored: false },
    { id: '10', name: '.cursorignore', path: '/.cursorignore', size: 512, type: 'file', language: 'text', ignored: false },
    { id: '11', name: 'README.md', path: '/README.md', size: 3072, type: 'file', language: 'markdown', ignored: false }
  ]

  const projectStats = {
    totalFiles: 245,
    totalSize: '89.2 MB',
    ignoredFiles: 1234,
    ignoredSize: '156.7 MB',
    languages: {
      'TypeScript': 45,
      'JavaScript': 32,
      'CSS': 18,
      'JSON': 12,
      'Markdown': 8
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  const getFileIcon = (file: ProjectFile) => {
    if (file.type === 'folder') return <Folder size={16} className={file.ignored ? 'text-gray-400' : 'text-blue-500'} />
    return <File size={16} className={file.ignored ? 'text-gray-400' : 'text-green-500'} />
  }

  const renderFileTree = (files: ProjectFile[], level = 0) => {
    return files.map(file => {
      if (file.ignored && !showIgnored) return null
      
      return (
        <div key={file.id} className="file-item" style={{ paddingLeft: `${level * 20}px` }}>
          <div className={`file-content ${file.ignored ? 'ignored' : ''}`}>
            <div className="file-info">
              {getFileIcon(file)}
              <span className="file-name">{file.name}</span>
              {file.language && (
                <span className="language-badge">{file.language}</span>
              )}
            </div>
            
            <div className="file-meta">
              <span className="file-size">{formatFileSize(file.size)}</span>
              {file.ignored && <EyeOff size={14} className="ignored-icon" />}
            </div>
          </div>
          
          {file.children && file.children.length > 0 && (
            <div className="file-children">
              {renderFileTree(file.children, level + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className="project-manager">
      <div className="manager-header">
        <h3>
          <GitBranch size={24} />
          Large Project Manager
        </h3>
        <div className="manager-actions">
          <button className="btn btn-secondary">
            <Settings size={16} />
            Configure
          </button>
        </div>
      </div>

      <div className="project-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Files</h4>
            <span className="stat-number">{projectStats.totalFiles}</span>
            <span className="stat-size">{projectStats.totalSize}</span>
          </div>
          
          <div className="stat-card">
            <h4>Ignored Files</h4>
            <span className="stat-number">{projectStats.ignoredFiles}</span>
            <span className="stat-size">{projectStats.ignoredSize}</span>
          </div>
          
          <div className="stat-card languages">
            <h4>Languages</h4>
            <div className="language-list">
              {Object.entries(projectStats.languages).map(([lang, count]) => (
                <div key={lang} className="language-item">
                  <span>{lang}</span>
                  <span className="count">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="project-controls">
        <div className="search-section">
          <div className="search-input">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search files and folders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-buttons">
            {['all', 'files', 'folders', 'typescript', 'ignored'].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="view-options">
            <button
              className={`view-btn ${showIgnored ? 'active' : ''}`}
              onClick={() => setShowIgnored(!showIgnored)}
            >
              {showIgnored ? <Eye size={16} /> : <EyeOff size={16} />}
              {showIgnored ? 'Hide Ignored' : 'Show Ignored'}
            </button>
          </div>
        </div>
      </div>

      <div className="file-explorer">
        <div className="explorer-header">
          <h4>Project Structure</h4>
          <div className="performance-indicator">
            <Zap size={14} className="text-green-500" />
            <span>Optimized for large projects</span>
          </div>
        </div>
        
        <div className="file-tree">
          {renderFileTree(projectStructure)}
        </div>
      </div>

      <style jsx>{`
        .project-manager {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .manager-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .project-stats {
          margin-bottom: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 2fr;
          gap: 1.5rem;
        }

        .stat-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
        }

        .stat-card h4 {
          color: #718096;
          font-size: 0.875rem;
          margin: 0 0 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 0.25rem;
        }

        .stat-size {
          color: #718096;
          font-size: 0.875rem;
        }

        .language-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .language-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .language-item:last-child {
          border-bottom: none;
        }

        .count {
          background: #e2e8f0;
          color: #2d3748;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .project-controls {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .search-section {
          margin-bottom: 1rem;
        }

        .search-input {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input svg {
          position: absolute;
          left: 12px;
          color: #718096;
          z-index: 1;
        }

        .search-input input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
        }

        .search-input input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .filter-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .filter-btn {
          padding: 6px 12px;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .filter-btn:hover {
          border-color: #ff6b6b;
        }

        .filter-btn.active {
          background: #ff6b6b;
          color: white;
          border-color: #ff6b6b;
        }

        .view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 6px 12px;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .view-btn:hover {
          border-color: #ff6b6b;
        }

        .view-btn.active {
          background: #ff6b6b;
          color: white;
          border-color: #ff6b6b;
        }

        .file-explorer {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .explorer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .explorer-header h4 {
          color: #1a365d;
          margin: 0;
          font-weight: 600;
        }

        .performance-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #718096;
          font-size: 0.875rem;
        }

        .file-tree {
          max-height: 400px;
          overflow-y: auto;
          padding: 1rem 0;
        }

        .file-item {
          border-bottom: 1px solid #f7fafc;
        }

        .file-item:last-child {
          border-bottom: none;
        }

        .file-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .file-content:hover {
          background: #f8fafc;
        }

        .file-content.ignored {
          opacity: 0.6;
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .file-name {
          font-weight: 500;
          color: #2d3748;
        }

        .language-badge {
          background: #e2e8f0;
          color: #2d3748;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .file-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .file-size {
          color: #718096;
          font-size: 0.875rem;
        }

        .ignored-icon {
          color: #a0aec0;
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

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn-secondary:hover {
          background: #cbd5e0;
        }

        @media (max-width: 768px) {
          .manager-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .filter-section {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .filter-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  )
}

export default LargeProjectManager