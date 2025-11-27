import React, { useState, useEffect, useRef } from 'react'
import { 
  Brain, Play, Bug, Search, Replace, Download, Copy, 
  Wand2, MessageSquare, Lightbulb, AlertTriangle, CheckCircle 
} from 'lucide-react'
import { analyzeCode, optimizeCode, getAIResponse } from './AIFunctions'

interface FileNode {
  id: string
  name: string
  content?: string
  language?: string
  path: string
}

interface CursorEditorProps {
  file: FileNode
}

export const CursorEditor: React.FC<CursorEditorProps> = ({ file }) => {
  const [content, setContent] = useState(file.content || '')
  const [analysis, setAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState<any[]>([])
  const [showAiPanel, setShowAiPanel] = useState(false)
  const [aiInput, setAiInput] = useState('')
  const [aiMessages, setAiMessages] = useState<any[]>([])
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [lineNumbers, setLineNumbers] = useState<string[]>([])

  useEffect(() => {
    setContent(file.content || '')
    if (file.content) {
      performAnalysis(file.content)
    }
  }, [file.id])

  useEffect(() => {
    const lines = content.split('\n')
    setLineNumbers(lines.map((_, index) => (index + 1).toString()))
  }, [content])

  const performAnalysis = async (code: string) => {
    if (!code.trim()) return
    
    setIsAnalyzing(true)
    try {
      const result = await analyzeCode(code, file.language || 'javascript')
      setAnalysis(result)
      setAiSuggestions(result.suggestions || [])
    } catch (error) {
      console.error('Analysis failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
    
    // Debounced analysis
    clearTimeout((window as any).analysisTimeout)
    ;(window as any).analysisTimeout = setTimeout(() => {
      performAnalysis(newContent)
    }, 2000)
  }

  const handleAiOptimize = async () => {
    setIsAnalyzing(true)
    try {
      const optimized = await optimizeCode(content, file.language || 'javascript')
      setContent(optimized)
      await performAnalysis(optimized)
    } catch (error) {
      console.error('Optimization failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleAiChat = async (message: string) => {
    const userMessage = { id: Date.now(), type: 'user', content: message, timestamp: new Date() }
    setAiMessages(prev => [...prev, userMessage])
    setAiInput('')
    
    try {
      const response = await getAIResponse(message, file)
      const aiMessage = { id: Date.now() + 1, type: 'ai', content: response, timestamp: new Date() }
      setAiMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('AI response failed:', error)
    }
  }

  const applySuggestion = async (suggestion: any) => {
    if (suggestion.beforeCode && suggestion.afterCode) {
      const newContent = content.replace(suggestion.beforeCode, suggestion.afterCode)
      setContent(newContent)
      await performAnalysis(newContent)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="cursor-editor">
      {/* Editor Toolbar */}
      <div className="editor-toolbar">
        <div className="file-info">
          <span className="file-path">{file.path}</span>
          <span className="file-language">{file.language}</span>
        </div>
        
        <div className="editor-actions">
          <button 
            onClick={() => performAnalysis(content)} 
            disabled={isAnalyzing}
            className="action-btn analyze"
          >
            <Brain size={14} />
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </button>
          
          <button onClick={handleAiOptimize} className="action-btn optimize">
            <Wand2 size={14} />
            Optimize
          </button>
          
          <button 
            onClick={() => setShowAiPanel(!showAiPanel)} 
            className={`action-btn ai-chat ${showAiPanel ? 'active' : ''}`}
          >
            <MessageSquare size={14} />
            AI Chat
          </button>
          
          <button onClick={copyToClipboard} className="action-btn copy">
            <Copy size={14} />
          </button>
        </div>
      </div>

      <div className="editor-layout">
        {/* Main Editor */}
        <div className="editor-main">
          <div className="code-editor">
            <div className="line-numbers">
              {lineNumbers.map((num, index) => (
                <div key={index} className="line-number">{num}</div>
              ))}
            </div>
            
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => handleContentChange(e.target.value)}
              className="code-textarea"
              spellCheck={false}
              placeholder={`Start editing ${file.name}...`}
            />
          </div>
          
          {/* Analysis Indicators */}
          {analysis && (
            <div className="analysis-indicators">
              <div className={`quality-score ${getQualityClass(analysis.quality?.overall)}`}>
                Quality: {analysis.quality?.overall || 0}%
              </div>
              <div className="issues-indicator">
                {analysis.issues?.length > 0 ? (
                  <AlertTriangle size={12} className="text-yellow-500" />
                ) : (
                  <CheckCircle size={12} className="text-green-500" />
                )}
                {analysis.issues?.length || 0} issues
              </div>
            </div>
          )}
        </div>

        {/* AI Suggestions Panel */}
        {aiSuggestions.length > 0 && (
          <div className="suggestions-panel">
            <h3>
              <Lightbulb size={14} />
              AI Suggestions ({aiSuggestions.length})
            </h3>
            
            <div className="suggestions-list">
              {aiSuggestions.slice(0, 3).map((suggestion, index) => (
                <div key={index} className="suggestion-card">
                  <div className="suggestion-header">
                    <span className="suggestion-title">{suggestion.title}</span>
                    <span className={`impact ${suggestion.impact}`}>
                      {suggestion.impact}
                    </span>
                  </div>
                  <p className="suggestion-desc">{suggestion.description}</p>
                  {suggestion.codeExample && (
                    <div className="code-preview">
                      <code>{suggestion.codeExample}</code>
                    </div>
                  )}
                  <button 
                    onClick={() => applySuggestion(suggestion)}
                    className="apply-btn"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Chat Panel */}
        {showAiPanel && (
          <div className="ai-chat-panel">
            <div className="chat-header">
              <h3>
                <MessageSquare size={14} />
                AI Assistant
              </h3>
            </div>
            
            <div className="chat-messages">
              {aiMessages.length === 0 ? (
                <div className="chat-welcome">
                  <p>Ask me anything about your code!</p>
                  <div className="quick-actions">
                    <button onClick={() => handleAiChat('Explain this code')}>
                      Explain code
                    </button>
                    <button onClick={() => handleAiChat('Find potential bugs')}>
                      Find bugs
                    </button>
                    <button onClick={() => handleAiChat('Suggest improvements')}>
                      Improve code
                    </button>
                  </div>
                </div>
              ) : (
                aiMessages.map(message => (
                  <div key={message.id} className={`message ${message.type}`}>
                    <div className="message-content">{message.content}</div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="chat-input">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Ask AI about your code..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && aiInput.trim()) {
                    handleAiChat(aiInput)
                  }
                }}
              />
              <button 
                onClick={() => aiInput.trim() && handleAiChat(aiInput)}
                disabled={!aiInput.trim()}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .cursor-editor {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #1e1e1e;
          color: #d4d4d4;
        }

        .editor-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          background: #2d2d30;
          border-bottom: 1px solid #3e3e42;
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .file-path {
          font-size: 13px;
          color: #cccccc;
        }

        .file-language {
          background: #007acc;
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .editor-actions {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #3e3e42;
          color: #cccccc;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background: #4a4a4a;
        }

        .action-btn.analyze {
          background: #0e639c;
          color: white;
        }

        .action-btn.optimize {
          background: #f39c12;
          color: white;
        }

        .action-btn.ai-chat.active {
          background: #27ae60;
          color: white;
        }

        .action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .editor-layout {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .editor-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .code-editor {
          flex: 1;
          display: flex;
          background: #1e1e1e;
        }

        .line-numbers {
          background: #1e1e1e;
          border-right: 1px solid #3e3e42;
          padding: 16px 8px;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          font-size: 13px;
          line-height: 1.5;
          color: #858585;
          user-select: none;
          min-width: 50px;
        }

        .line-number {
          text-align: right;
          padding-right: 8px;
        }

        .code-textarea {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          resize: none;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          font-size: 13px;
          line-height: 1.5;
          color: #d4d4d4;
          padding: 16px;
          white-space: pre;
          overflow-wrap: normal;
        }

        .analysis-indicators {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
          pointer-events: none;
        }

        .quality-score, .issues-indicator {
          background: rgba(0, 0, 0, 0.8);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 4px;
          backdrop-filter: blur(4px);
        }

        .quality-score.high { color: #27ae60; }
        .quality-score.medium { color: #f39c12; }
        .quality-score.low { color: #e74c3c; }

        .suggestions-panel {
          width: 300px;
          background: #252526;
          border-left: 1px solid #3e3e42;
          overflow-y: auto;
        }

        .suggestions-panel h3 {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          margin: 0;
          background: #2d2d30;
          border-bottom: 1px solid #3e3e42;
          font-size: 13px;
          color: #cccccc;
        }

        .suggestions-list {
          padding: 12px;
        }

        .suggestion-card {
          background: #2d2d30;
          border-radius: 6px;
          padding: 12px;
          margin-bottom: 12px;
        }

        .suggestion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .suggestion-title {
          font-weight: 600;
          font-size: 12px;
          color: #cccccc;
        }

        .impact {
          padding: 2px 6px;
          border-radius: 8px;
          font-size: 9px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .impact.high { background: #e74c3c; color: white; }
        .impact.medium { background: #f39c12; color: white; }
        .impact.low { background: #3498db; color: white; }

        .suggestion-desc {
          font-size: 11px;
          color: #b3b3b3;
          line-height: 1.4;
          margin: 0 0 8px;
        }

        .code-preview {
          background: #1e1e1e;
          border-radius: 4px;
          padding: 6px;
          margin-bottom: 8px;
        }

        .code-preview code {
          font-size: 10px;
          font-family: monospace;
          color: #d4d4d4;
        }

        .apply-btn {
          background: #27ae60;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 10px;
          cursor: pointer;
        }

        .ai-chat-panel {
          width: 350px;
          background: #252526;
          border-left: 1px solid #3e3e42;
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          padding: 12px 16px;
          background: #2d2d30;
          border-bottom: 1px solid #3e3e42;
        }

        .chat-header h3 {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0;
          font-size: 13px;
          color: #cccccc;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }

        .chat-welcome {
          text-align: center;
          color: #8c8c8c;
        }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 12px;
        }

        .quick-actions button {
          background: #3e3e42;
          color: #cccccc;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 11px;
        }

        .message {
          margin-bottom: 12px;
          padding: 8px 12px;
          border-radius: 8px;
          max-width: 85%;
        }

        .message.user {
          background: #007acc;
          color: white;
          margin-left: auto;
        }

        .message.ai {
          background: #2d2d30;
          color: #cccccc;
        }

        .message-content {
          font-size: 12px;
          line-height: 1.4;
          margin-bottom: 4px;
        }

        .message-time {
          font-size: 9px;
          opacity: 0.7;
        }

        .chat-input {
          display: flex;
          gap: 6px;
          padding: 12px;
          border-top: 1px solid #3e3e42;
        }

        .chat-input input {
          flex: 1;
          background: #3e3e42;
          border: none;
          outline: none;
          color: #d4d4d4;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
        }

        .chat-input button {
          background: #007acc;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .chat-input button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}

const getQualityClass = (score: number): string => {
  if (score >= 80) return 'high'
  if (score >= 60) return 'medium'
  return 'low'
}