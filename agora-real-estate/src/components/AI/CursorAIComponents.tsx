import React, { useState } from 'react'
import { FileText, Folder, X, Play, AlertTriangle, CheckCircle, Info, Lightbulb, BarChart3, Activity, TrendingUp, Shield, Package, Code, Search, Filter, Download, Copy, Zap, Settings } from 'lucide-react'

// Welcome Screen Component
export const WelcomeScreen: React.FC<{ onUpload: () => void }> = ({ onUpload }) => (
  <div className="welcome-screen">
    <div className="welcome-content">
      <div className="welcome-icon">
        <Code size={64} />
      </div>
      <h1>Welcome to Cursor AI</h1>
      <p>Upload your code files to get started with AI-powered analysis, suggestions, and optimization.</p>
      
      <div className="welcome-features">
        <div className="feature">
          <AlertTriangle size={24} />
          <div>
            <h3>Issue Detection</h3>
            <p>Automatically find bugs, performance issues, and code smells</p>
          </div>
        </div>
        <div className="feature">
          <Lightbulb size={24} />
          <div>
            <h3>Smart Suggestions</h3>
            <p>Get AI-powered recommendations for code improvements</p>
          </div>
        </div>
        <div className="feature">
          <BarChart3 size={24} />
          <div>
            <h3>Quality Metrics</h3>
            <p>Track maintainability, readability, and performance scores</p>
          </div>
        </div>
        <div className="feature">
          <Zap size={24} />
          <div>
            <h3>Auto-Optimization</h3>
            <p>Let AI optimize your code for better performance and style</p>
          </div>
        </div>
      </div>

      <button className="upload-btn primary" onClick={onUpload}>
        <FileText size={20} />
        Upload Code Files
      </button>

      <div className="supported-formats">
        <p>Supported: JavaScript, TypeScript, React, Python, HTML, CSS, JSON, Markdown</p>
      </div>
    </div>
  </div>
)

// File Explorer Component
export const FileExplorer: React.FC<{
  files: any[]
  activeFile: any
  onFileSelect: (file: any) => void
  onFileDelete: (id: string) => void
}> = ({ files, activeFile, onFileSelect, onFileDelete }) => (
  <div className="file-explorer">
    <div className="explorer-header">
      <Folder size={16} />
      <span>Files</span>
    </div>
    
    <div className="file-list">
      {files.map(file => (
        <div 
          key={file.id}
          className={`file-item ${activeFile?.id === file.id ? 'active' : ''}`}
          onClick={() => onFileSelect(file)}
        >
          <div className="file-info">
            <FileText size={14} />
            <span className="file-name">{file.name}</span>
          </div>
          
          <div className="file-actions">
            {file.analysis && (
              <div className="file-status">
                {file.analysis.issues.filter((i: any) => i.type === 'error').length > 0 && (
                  <span className="status-error">{file.analysis.issues.filter((i: any) => i.type === 'error').length}</span>
                )}
                {file.analysis.issues.filter((i: any) => i.type === 'warning').length > 0 && (
                  <span className="status-warning">{file.analysis.issues.filter((i: any) => i.type === 'warning').length}</span>
                )}
              </div>
            )}
            
            <button 
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation()
                onFileDelete(file.id)
              }}
            >
              <X size={12} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Tab Bar Component
export const TabBar: React.FC<{
  activeTab: string
  onTabChange: (tab: string) => void
  file: any
}> = ({ activeTab, onTabChange, file }) => (
  <div className="tab-bar">
    <div className="tabs">
      <button 
        className={`tab ${activeTab === 'editor' ? 'active' : ''}`}
        onClick={() => onTabChange('editor')}
      >
        <Code size={14} />
        Editor
      </button>
      
      <button 
        className={`tab ${activeTab === 'problems' ? 'active' : ''}`}
        onClick={() => onTabChange('problems')}
      >
        <AlertTriangle size={14} />
        Problems
        {file.analysis && (
          <span className="tab-badge">
            {file.analysis.issues.filter((i: any) => i.type === 'error' || i.type === 'warning').length}
          </span>
        )}
      </button>
      
      <button 
        className={`tab ${activeTab === 'suggestions' ? 'active' : ''}`}
        onClick={() => onTabChange('suggestions')}
      >
        <Lightbulb size={14} />
        Suggestions
        {file.analysis && (
          <span className="tab-badge">
            {file.analysis.suggestions.length}
          </span>
        )}
      </button>
      
      <button 
        className={`tab ${activeTab === 'metrics' ? 'active' : ''}`}
        onClick={() => onTabChange('metrics')}
      >
        <BarChart3 size={14} />
        Metrics
      </button>
    </div>
  </div>
)

// Code Editor Component
export const CodeEditor: React.FC<{
  file: any
  onContentChange: (content: string) => void
  editorRef: React.RefObject<HTMLTextAreaElement>
}> = ({ file, onContentChange, editorRef }) => (
  <div className="code-editor">
    <div className="editor-header">
      <div className="file-info">
        <FileText size={16} />
        <span>{file.name}</span>
        <span className="file-size">{(file.size / 1024).toFixed(1)}KB</span>
      </div>
      
      <div className="editor-actions">
        <button className="editor-btn" onClick={() => navigator.clipboard.writeText(file.content)}>
          <Copy size={14} />
          Copy
        </button>
        <button className="editor-btn" onClick={() => {
          const blob = new Blob([file.content], { type: 'text/plain' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = file.name
          a.click()
          URL.revokeObjectURL(url)
        }}>
          <Download size={14} />
          Download
        </button>
      </div>
    </div>
    
    <textarea
      ref={editorRef}
      value={file.content}
      onChange={(e) => onContentChange(e.target.value)}
      className="code-textarea"
      spellCheck={false}
      wrap="off"
    />
    
    <div className="editor-footer">
      <span>Line: 1, Column: 1</span>
      <span>{file.type}</span>
    </div>
  </div>
)

// Problems Panel Component
export const ProblemsPanel: React.FC<{
  issues: any[]
  searchTerm: string
  filterType: string
  onSearchChange: (term: string) => void
  onFilterChange: (type: string) => void
}> = ({ issues, searchTerm, filterType, onSearchChange, onFilterChange }) => {
  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || issue.type === filterType || 
                         (filterType === 'errors' && issue.type === 'error') ||
                         (filterType === 'warnings' && issue.type === 'warning')
    return matchesSearch && matchesFilter
  })

  return (
    <div className="problems-panel">
      <div className="panel-header">
        <div className="header-left">
          <AlertTriangle size={16} />
          <span>Problems ({filteredIssues.length})</span>
        </div>
        
        <div className="header-controls">
          <div className="search-box">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          
          <select 
            value={filterType}
            onChange={(e) => onFilterChange(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="errors">Errors</option>
            <option value="warnings">Warnings</option>
            <option value="suggestions">Suggestions</option>
          </select>
        </div>
      </div>
      
      <div className="problems-list">
        {filteredIssues.map(issue => (
          <div key={issue.id} className={`problem-item ${issue.type} ${issue.severity}`}>
            <div className="problem-icon">
              {issue.type === 'error' && <AlertTriangle size={16} />}
              {issue.type === 'warning' && <AlertTriangle size={16} />}
              {issue.type === 'info' && <Info size={16} />}
              {issue.type === 'suggestion' && <Lightbulb size={16} />}
            </div>
            
            <div className="problem-content">
              <div className="problem-message">{issue.message}</div>
              <div className="problem-location">
                Line {issue.line}, Column {issue.column} • {issue.rule}
              </div>
              {issue.fix && (
                <div className="problem-fix">
                  <strong>Quick fix:</strong> {issue.fix}
                  {issue.autoFixable && (
                    <button className="fix-btn">Apply Fix</button>
                  )}
                </div>
              )}
            </div>
            
            <div className="problem-severity">
              <span className={`severity-badge ${issue.severity}`}>
                {issue.severity}
              </span>
            </div>
          </div>
        ))}
        
        {filteredIssues.length === 0 && (
          <div className="empty-state">
            <CheckCircle size={32} />
            <p>No problems found!</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Suggestions Panel Component
export const SuggestionsPanel: React.FC<{ suggestions: any[] }> = ({ suggestions }) => (
  <div className="suggestions-panel">
    <div className="panel-header">
      <Lightbulb size={16} />
      <span>AI Suggestions ({suggestions.length})</span>
    </div>
    
    <div className="suggestions-list">
      {suggestions.map(suggestion => (
        <div key={suggestion.id} className={`suggestion-item ${suggestion.type}`}>
          <div className="suggestion-header">
            <div className="suggestion-title">
              {suggestion.type === 'performance' && <TrendingUp size={16} />}
              {suggestion.type === 'security' && <Shield size={16} />}
              {suggestion.type === 'style' && <Code size={16} />}
              {suggestion.type === 'best-practice' && <CheckCircle size={16} />}
              <span>{suggestion.title}</span>
            </div>
            
            <div className="suggestion-badges">
              <span className={`impact-badge ${suggestion.impact}`}>
                {suggestion.impact} impact
              </span>
              <span className={`effort-badge ${suggestion.effort}`}>
                {suggestion.effort}
              </span>
            </div>
          </div>
          
          <div className="suggestion-description">
            {suggestion.description}
          </div>
          
          {suggestion.codeExample && (
            <div className="suggestion-code">
              <pre><code>{suggestion.codeExample}</code></pre>
            </div>
          )}
        </div>
      ))}
      
      {suggestions.length === 0 && (
        <div className="empty-state">
          <Lightbulb size={32} />
          <p>No suggestions yet. Upload code to get AI recommendations!</p>
        </div>
      )}
    </div>
  </div>
)

// Metrics Panel Component  
export const MetricsPanel: React.FC<{ analysis: any }> = ({ analysis }) => {
  if (!analysis) {
    return (
      <div className="metrics-panel">
        <div className="empty-state">
          <BarChart3 size={32} />
          <p>No metrics available. Upload and analyze code first.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="metrics-panel">
      <div className="metrics-grid">
        {/* Quality Overview */}
        <div className="metric-card">
          <div className="metric-header">
            <Activity size={20} />
            <span>Code Quality</span>
          </div>
          <div className="quality-score">{analysis.quality.overall}%</div>
          <div className="quality-breakdown">
            <div className="quality-item">
              <span>Maintainability</span>
              <div className="quality-bar">
                <div 
                  className="quality-fill"
                  style={{ width: `${analysis.quality.maintainability}%` }}
                />
              </div>
              <span>{analysis.quality.maintainability}%</span>
            </div>
            <div className="quality-item">
              <span>Readability</span>
              <div className="quality-bar">
                <div 
                  className="quality-fill"
                  style={{ width: `${analysis.quality.readability}%` }}
                />
              </div>
              <span>{analysis.quality.readability}%</span>
            </div>
            <div className="quality-item">
              <span>Testability</span>
              <div className="quality-bar">
                <div 
                  className="quality-fill"
                  style={{ width: `${analysis.quality.testability}%` }}
                />
              </div>
              <span>{analysis.quality.testability}%</span>
            </div>
          </div>
        </div>

        {/* Complexity */}
        <div className="metric-card">
          <div className="metric-header">
            <TrendingUp size={20} />
            <span>Complexity</span>
          </div>
          <div className="complexity-metrics">
            <div className="complexity-item">
              <span className="complexity-label">Cyclomatic</span>
              <span className="complexity-value">{analysis.complexity.cyclomatic}</span>
            </div>
            <div className="complexity-item">
              <span className="complexity-label">Cognitive</span>
              <span className="complexity-value">{analysis.complexity.cognitive}</span>
            </div>
            <div className="complexity-item">
              <span className="complexity-label">Maintainability Index</span>
              <span className="complexity-value">{analysis.complexity.maintainabilityIndex}</span>
            </div>
          </div>
        </div>

        {/* Security & Performance */}
        <div className="metric-card">
          <div className="metric-header">
            <Shield size={20} />
            <span>Security & Performance</span>
          </div>
          <div className="score-grid">
            <div className="score-item">
              <span>Security Score</span>
              <div className={`score-badge ${analysis.security.score > 80 ? 'good' : 'warning'}`}>
                {analysis.security.score}%
              </div>
            </div>
            <div className="score-item">
              <span>Performance Score</span>
              <div className={`score-badge ${analysis.performance.score > 80 ? 'good' : 'warning'}`}>
                {analysis.performance.score}%
              </div>
            </div>
          </div>
        </div>

        {/* Dependencies */}
        <div className="metric-card">
          <div className="metric-header">
            <Package size={20} />
            <span>Dependencies</span>
          </div>
          <div className="dependency-stats">
            <div className="dep-stat">
              <span className="dep-number">{analysis.dependencies.total}</span>
              <span className="dep-label">Total</span>
            </div>
            <div className="dep-stat">
              <span className="dep-number">{analysis.dependencies.outdated}</span>
              <span className="dep-label">Outdated</span>
            </div>
            <div className="dep-stat">
              <span className="dep-number">{analysis.dependencies.vulnerable}</span>
              <span className="dep-label">Vulnerable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Empty State Component
export const EmptyState: React.FC<{ onFileSelect: () => void }> = ({ onFileSelect }) => (
  <div className="empty-state-main">
    <Code size={64} />
    <h2>Select a file to get started</h2>
    <p>Choose a file from the explorer to view and analyze your code.</p>
    <button className="select-file-btn" onClick={onFileSelect}>
      Select First File
    </button>
  </div>
)

// AI Assistant Panel Component
export const AIAssistantPanel: React.FC<{
  activeFile: any
  isProcessing: boolean
  onAnalyze: () => void
  onOptimize: () => void
  onGenerate: (prompt: string) => void
}> = ({ activeFile, isProcessing, onAnalyze, onOptimize, onGenerate }) => {
  const [prompt, setPrompt] = useState('')
  
  return (
    <div className="ai-assistant-panel">
      <div className="assistant-header">
        <div className="assistant-title">
          <Zap size={16} />
          <span>AI Assistant</span>
        </div>
        <button className="settings-btn">
          <Settings size={14} />
        </button>
      </div>
      
      <div className="assistant-content">
        {/* Quick Actions */}
        <div className="quick-actions">
          <h4>Quick Actions</h4>
          <div className="action-buttons">
            <button 
              className="action-btn"
              onClick={onAnalyze}
              disabled={!activeFile || isProcessing}
            >
              <Activity size={16} />
              Analyze Code
            </button>
            
            <button 
              className="action-btn"
              onClick={onOptimize}
              disabled={!activeFile || isProcessing}
            >
              <TrendingUp size={16} />
              Optimize
            </button>
          </div>
        </div>

        {/* Code Generation */}
        <div className="code-generation">
          <h4>Generate Code</h4>
          <div className="generation-input">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to generate..."
              rows={3}
            />
            <button 
              className="generate-btn"
              onClick={() => onGenerate(prompt)}
              disabled={!prompt.trim() || isProcessing}
            >
              <Code size={16} />
              Generate
            </button>
          </div>
        </div>

        {/* File Info */}
        {activeFile && (
          <div className="file-info">
            <h4>Current File</h4>
            <div className="file-details">
              <div className="file-detail">
                <span>Name:</span>
                <span>{activeFile.name}</span>
              </div>
              <div className="file-detail">
                <span>Type:</span>
                <span>{activeFile.type}</span>
              </div>
              <div className="file-detail">
                <span>Size:</span>
                <span>{(activeFile.size / 1024).toFixed(1)}KB</span>
              </div>
              {activeFile.analysis && (
                <div className="file-detail">
                  <span>Quality:</span>
                  <span>{activeFile.analysis.quality.overall}%</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Processing Overlay Component
export const ProcessingOverlay: React.FC<{
  message: string
  progress?: number
}> = ({ message, progress }) => (
  <div className="processing-overlay">
    <div className="processing-content">
      <div className="processing-spinner">
        <Zap className="spinner-icon" size={32} />
      </div>
      <h3>{message}</h3>
      {progress !== undefined && (
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  </div>
)