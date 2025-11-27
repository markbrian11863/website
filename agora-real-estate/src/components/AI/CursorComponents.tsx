import React, { useState } from 'react'
import { FolderOpen, File, Brain, Code, MessageSquare, AlertTriangle, Lightbulb, Upload, Play, X, Copy, Download, MoreHorizontal } from 'lucide-react'

interface WelcomeScreenProps {
  onGetStarted: () => void
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => (
  <div className="welcome-screen">
    <div className="welcome-content">
      <Brain size={64} className="welcome-icon" />
      <h2>Cursor AI Code Editor</h2>
      <p>Upload your code files to start intelligent analysis, auto-completion, and AI-powered development</p>
      
      <div className="features-grid">
        <div className="feature-item">
          <Code size={24} />
          <span>Smart Code Analysis</span>
        </div>
        <div className="feature-item">
          <Brain size={24} />
          <span>AI Chat Assistant</span>
        </div>
        <div className="feature-item">
          <Lightbulb size={24} />
          <span>Code Suggestions</span>
        </div>
        <div className="feature-item">
          <AlertTriangle size={24} />
          <span>Issue Detection</span>
        </div>
      </div>
      
      <button onClick={onGetStarted} className="get-started-btn">
        <Upload size={20} />
        Get Started - Upload Files
      </button>
    </div>
    
    <style jsx>{`
      .welcome-screen {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
        color: white;
        text-align: center;
        padding: 3rem;
      }
      
      .welcome-content {
        max-width: 600px;
      }
      
      .welcome-icon {
        color: #667eea;
        margin-bottom: 1.5rem;
      }
      
      .welcome-content h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .welcome-content p {
        font-size: 1.125rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        line-height: 1.6;
      }
      
      .features-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;
      }
      
      .feature-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        font-size: 0.875rem;
      }
      
      .get-started-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .get-started-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
      }
    `}</style>
  </div>
)

// File Explorer Component
interface FileExplorerProps {
  files: any[]
  activeFile: any
  onFileSelect: (file: any) => void
  onFileUpload: () => void
  onFileDelete: (fileId: string) => void
}

export const FileExplorer: React.FC<FileExplorerProps> = ({ 
  files, activeFile, onFileSelect, onFileUpload, onFileDelete 
}) => (
  <div className="file-explorer">
    <div className="explorer-header">
      <div className="explorer-title">
        <FolderOpen size={16} />
        <span>Explorer</span>
      </div>
      <button onClick={onFileUpload} className="upload-btn">
        <Upload size={14} />
      </button>
    </div>
    
    <div className="files-list">
      {files.length === 0 ? (
        <div className="empty-state">
          <File size={32} className="empty-icon" />
          <p>No files uploaded</p>
          <button onClick={onFileUpload} className="upload-files-btn">
            Upload Files
          </button>
        </div>
      ) : (
        files.map(file => (
          <div 
            key={file.id}
            className={`file-item ${activeFile?.id === file.id ? 'active' : ''}`}
            onClick={() => onFileSelect(file)}
          >
            <File size={14} />
            <span className="file-name">{file.name}</span>
            {file.isModified && <span className="modified-indicator">●</span>}
            <button 
              onClick={(e) => {
                e.stopPropagation()
                onFileDelete(file.id)
              }}
              className="delete-btn"
            >
              <X size={12} />
            </button>
          </div>
        ))
      )}
    </div>
    
    <style jsx>{`
      .file-explorer {
        background: #252526;
        border-right: 1px solid #3e3e42;
        display: flex;
        flex-direction: column;
      }
      
      .explorer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        background: #2d2d30;
        border-bottom: 1px solid #3e3e42;
      }
      
      .explorer-title {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #cccccc;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
      }
      
      .upload-btn {
        background: none;
        border: none;
        color: #cccccc;
        padding: 4px;
        border-radius: 3px;
        cursor: pointer;
        transition: background 0.2s;
      }
      
      .upload-btn:hover {
        background: #3e3e42;
      }
      
      .files-list {
        flex: 1;
        overflow-y: auto;
      }
      
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;
        color: #858585;
        text-align: center;
        padding: 20px;
      }
      
      .empty-icon {
        margin-bottom: 12px;
        opacity: 0.5;
      }
      
      .empty-state p {
        margin-bottom: 16px;
        font-size: 13px;
      }
      
      .upload-files-btn {
        background: #0e639c;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 3px;
        font-size: 12px;
        cursor: pointer;
        transition: background 0.2s;
      }
      
      .upload-files-btn:hover {
        background: #1177bb;
      }
      
      .file-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 12px;
        color: #cccccc;
        cursor: pointer;
        font-size: 13px;
        transition: background 0.2s;
        position: relative;
      }
      
      .file-item:hover {
        background: #2a2d2e;
      }
      
      .file-item.active {
        background: #37373d;
        color: white;
      }
      
      .file-name {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .modified-indicator {
        color: #f1c40f;
        font-weight: bold;
      }
      
      .delete-btn {
        background: none;
        border: none;
        color: #858585;
        padding: 2px;
        border-radius: 2px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.2s;
      }
      
      .file-item:hover .delete-btn {
        opacity: 1;
      }
      
      .delete-btn:hover {
        background: #e74c3c;
        color: white;
      }
    `}</style>
  </div>
)

// Main Editor Component
interface MainEditorProps {
  file: any
  onContentChange: (content: string) => void
  onAnalyze: () => void
  isAnalyzing: boolean
}

export const MainEditor: React.FC<MainEditorProps> = ({ 
  file, onContentChange, onAnalyze, isAnalyzing 
}) => {
  const [content, setContent] = useState(file?.content || '')
  
  // Update content when file changes
  React.useEffect(() => {
    setContent(file?.content || '')
  }, [file?.id, file?.content])
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    onContentChange(newContent)
  }
  
  return (
    <div className="main-editor">
      {file ? (
        <>
          <div className="editor-header">
            <div className="file-tab">
              <File size={14} />
              <span>{file.name}</span>
              {file.isModified && <span className="modified">●</span>}
            </div>
            <div className="editor-actions">
              <button onClick={onAnalyze} disabled={isAnalyzing} className="analyze-btn">
                <Brain size={14} />
                {isAnalyzing ? 'Analyzing...' : 'Analyze'}
              </button>
            </div>
          </div>
          
          <div className="editor-content">
            <textarea
              value={content}
              onChange={handleChange}
              className="code-textarea"
              placeholder="Start typing your code..."
              spellCheck={false}
            />
            
            {file.analysis && (
              <div className="analysis-overlay">
                <div className="quality-indicator">
                  Quality: {file.analysis.quality?.overall || 0}%
                </div>
                <div className="issues-count">
                  Issues: {file.analysis.issues?.length || 0}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="no-file-selected">
          <Code size={48} />
          <h3>No file selected</h3>
          <p>Select a file from the explorer to start editing</p>
        </div>
      )}
      
      <style jsx>{`
        .main-editor {
          background: #1e1e1e;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #3e3e42;
        }
        
        .editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #2d2d30;
          border-bottom: 1px solid #3e3e42;
          padding: 8px 16px;
        }
        
        .file-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #cccccc;
          font-size: 13px;
        }
        
        .modified {
          color: #f1c40f;
        }
        
        .analyze-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #0e639c;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 3px;
          font-size: 12px;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .analyze-btn:hover:not(:disabled) {
          background: #1177bb;
        }
        
        .analyze-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .editor-content {
          flex: 1;
          position: relative;
        }
        
        .code-textarea {
          width: 100%;
          height: 100%;
          background: #1e1e1e;
          color: #d4d4d4;
          border: none;
          outline: none;
          resize: none;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 14px;
          line-height: 1.5;
          padding: 16px;
          tab-size: 2;
        }
        
        .analysis-overlay {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
        }
        
        .quality-indicator,
        .issues-count {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          backdrop-filter: blur(4px);
        }
        
        .quality-indicator {
          background: rgba(46, 125, 50, 0.8);
        }
        
        .issues-count {
          background: rgba(211, 47, 47, 0.8);
        }
        
        .no-file-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #858585;
          text-align: center;
        }
        
        .no-file-selected h3 {
          margin: 16px 0 8px;
          color: #cccccc;
        }
        
        .no-file-selected p {
          font-size: 13px;
        }
      `}</style>
    </div>
  )
}