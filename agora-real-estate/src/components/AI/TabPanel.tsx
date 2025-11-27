import React, { useState } from 'react'
import { AlertTriangle, Lightbulb, MessageSquare, Code, Send, Copy, Download, Wand2, CheckCircle, XCircle } from 'lucide-react'

interface TabPanelProps {
  activeTab: string
  onTabChange: (tab: string) => void
  file: any
  chatMessages: any[]
  chatInput: string
  onChatInput: (input: string) => void
  onChatSend: (message: string) => void
  onOptimize: () => void
  onGenerate: (prompt: string) => void
}

export const TabPanel: React.FC<TabPanelProps> = ({
  activeTab, onTabChange, file, chatMessages, chatInput, onChatInput,
  onChatSend, onOptimize, onGenerate
}) => {
  const [generatePrompt, setGeneratePrompt] = useState('')

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatInput.trim()) {
      onChatSend(chatInput)
    }
  }

  const handleGenerateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (generatePrompt.trim()) {
      onGenerate(generatePrompt)
      setGeneratePrompt('')
    }
  }

  return (
    <div className="tab-panel">
      <div className="tab-header">
        <button
          className={`tab ${activeTab === 'problems' ? 'active' : ''}`}
          onClick={() => onTabChange('problems')}
        >
          <AlertTriangle size={14} />
          Problems
          {file?.analysis?.issues?.length > 0 && (
            <span className="badge">{file.analysis.issues.length}</span>
          )}
        </button>
        <button
          className={`tab ${activeTab === 'suggestions' ? 'active' : ''}`}
          onClick={() => onTabChange('suggestions')}
        >
          <Lightbulb size={14} />
          Suggestions
        </button>
        <button
          className={`tab ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => onTabChange('chat')}
        >
          <MessageSquare size={14} />
          AI Chat
        </button>
        <button
          className={`tab ${activeTab === 'generate' ? 'active' : ''}`}
          onClick={() => onTabChange('generate')}
        >
          <Code size={14} />
          Generate
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'problems' && (
          <div className="problems-panel">
            <div className="panel-header">
              <h3>Code Issues</h3>
              {file && (
                <button onClick={onOptimize} className="optimize-btn">
                  <Wand2 size={12} />
                  Auto-fix
                </button>
              )}
            </div>
            
            {!file ? (
              <div className="empty-state">
                <AlertTriangle size={32} />
                <p>No file selected</p>
              </div>
            ) : file?.analysis?.issues?.length === 0 ? (
              <div className="empty-state success">
                <CheckCircle size={32} />
                <p>No issues found!</p>
                <span>Your code looks great</span>
              </div>
            ) : (
              <div className="issues-list">
                {file?.analysis?.issues?.map((issue: any) => (
                  <div key={issue.id} className={`issue-item ${issue.severity}`}>
                    <div className="issue-icon">
                      {issue.type === 'error' ? <XCircle size={14} /> : <AlertTriangle size={14} />}
                    </div>
                    <div className="issue-content">
                      <div className="issue-message">{issue.message}</div>
                      <div className="issue-details">
                        Line {issue.line} • {issue.rule} • {issue.severity}
                      </div>
                      {issue.fix && (
                        <button className="fix-btn">Apply Fix</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div className="suggestions-panel">
            <div className="panel-header">
              <h3>AI Suggestions</h3>
            </div>
            
            {!file ? (
              <div className="empty-state">
                <Lightbulb size={32} />
                <p>No file selected</p>
              </div>
            ) : (
              <div className="suggestions-list">
                {file?.analysis?.suggestions?.map((suggestion: any) => (
                  <div key={suggestion.id} className="suggestion-item">
                    <div className="suggestion-header">
                      <Lightbulb size={14} />
                      <span className="suggestion-title">{suggestion.title}</span>
                      <span className={`impact ${suggestion.impact}`}>
                        {suggestion.impact} impact
                      </span>
                    </div>
                    <div className="suggestion-description">
                      {suggestion.description}
                    </div>
                    {suggestion.codeExample && (
                      <div className="code-example">
                        <code>{suggestion.codeExample}</code>
                        <button className="copy-btn">
                          <Copy size={12} />
                        </button>
                      </div>
                    )}
                    <div className="suggestion-actions">
                      <button className="apply-btn">Apply Suggestion</button>
                      <span className="effort">Effort: {suggestion.effort}</span>
                    </div>
                  </div>
                ))}

                {file?.analysis?.aiInsights?.map((insight: any) => (
                  <div key={insight.id} className="insight-item">
                    <div className="insight-header">
                      <div className="insight-title">{insight.title}</div>
                      <div className="confidence">
                        {insight.confidence}% confidence
                      </div>
                    </div>
                    <div className="insight-description">{insight.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="chat-panel">
            <div className="chat-messages">
              {chatMessages.length === 0 ? (
                <div className="chat-welcome">
                  <MessageSquare size={32} />
                  <h3>AI Assistant</h3>
                  <p>Ask me anything about your code!</p>
                  <div className="chat-suggestions">
                    <button onClick={() => onChatSend('How can I optimize this code?')}>
                      Optimize my code
                    </button>
                    <button onClick={() => onChatSend('Find bugs in my code')}>
                      Find bugs
                    </button>
                    <button onClick={() => onChatSend('Explain this function')}>
                      Explain code
                    </button>
                  </div>
                </div>
              ) : (
                chatMessages.map((message) => (
                  <div key={message.id} className={`message ${message.type}`}>
                    <div className="message-content">{message.content}</div>
                  </div>
                ))
              )}
            </div>
            
            <form onSubmit={handleChatSubmit} className="chat-input-form">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => onChatInput(e.target.value)}
                placeholder="Ask AI about your code..."
                className="chat-input"
              />
              <button type="submit" disabled={!chatInput.trim()} className="send-btn">
                <Send size={14} />
              </button>
            </form>
          </div>
        )}

        {activeTab === 'generate' && (
          <div className="generate-panel">
            <div className="panel-header">
              <h3>Code Generation</h3>
            </div>
            
            <form onSubmit={handleGenerateSubmit} className="generate-form">
              <textarea
                value={generatePrompt}
                onChange={(e) => setGeneratePrompt(e.target.value)}
                placeholder="Describe what you want to generate..."
                className="generate-input"
                rows={3}
              />
              <button 
                type="submit" 
                disabled={!generatePrompt.trim()} 
                className="generate-btn"
              >
                <Code size={14} />
                Generate Code
              </button>
            </form>

            <div className="generate-examples">
              <h4>Try these examples:</h4>
              <div className="example-buttons">
                <button onClick={() => setGeneratePrompt('Create a React component with state management')}>
                  React Component
                </button>
                <button onClick={() => setGeneratePrompt('Write a function to validate email addresses')}>
                  Validation Function
                </button>
                <button onClick={() => setGeneratePrompt('Create an API endpoint handler')}>
                  API Handler
                </button>
                <button onClick={() => setGeneratePrompt('Generate unit tests for this function')}>
                  Unit Tests
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .tab-panel {
          background: #252526;
          display: flex;
          flex-direction: column;
        }

        .tab-header {
          display: flex;
          background: #2d2d30;
          border-bottom: 1px solid #3e3e42;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: #cccccc;
          padding: 8px 12px;
          font-size: 11px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }

        .tab:hover {
          background: #37373d;
          color: white;
        }

        .tab.active {
          background: #37373d;
          color: white;
          border-bottom-color: #007acc;
        }

        .badge {
          background: #e74c3c;
          color: white;
          border-radius: 8px;
          padding: 2px 6px;
          font-size: 10px;
          font-weight: 600;
        }

        .tab-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .panel-header h3 {
          color: #cccccc;
          font-size: 14px;
          margin: 0;
        }

        .optimize-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #f39c12;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 11px;
          cursor: pointer;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: #858585;
          text-align: center;
        }

        .empty-state.success {
          color: #27ae60;
        }

        .empty-state p {
          margin: 8px 0;
          font-size: 14px;
        }

        .empty-state span {
          font-size: 12px;
          opacity: 0.8;
        }

        .issues-list,
        .suggestions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .issue-item {
          display: flex;
          gap: 8px;
          padding: 8px;
          background: #2d2d30;
          border-radius: 4px;
          border-left: 3px solid;
        }

        .issue-item.critical { border-left-color: #e74c3c; }
        .issue-item.high { border-left-color: #f39c12; }
        .issue-item.medium { border-left-color: #f1c40f; }
        .issue-item.low { border-left-color: #3498db; }

        .issue-content {
          flex: 1;
        }

        .issue-message {
          color: #cccccc;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .issue-details {
          color: #858585;
          font-size: 11px;
        }

        .fix-btn {
          background: #27ae60;
          color: white;
          border: none;
          padding: 2px 6px;
          border-radius: 2px;
          font-size: 10px;
          cursor: pointer;
          margin-top: 4px;
        }

        .suggestion-item,
        .insight-item {
          background: #2d2d30;
          border-radius: 4px;
          padding: 12px;
        }

        .suggestion-header,
        .insight-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .suggestion-title,
        .insight-title {
          color: #cccccc;
          font-size: 13px;
          font-weight: 600;
        }

        .impact {
          padding: 2px 6px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 600;
        }

        .impact.high { background: #e74c3c; color: white; }
        .impact.medium { background: #f39c12; color: white; }
        .impact.low { background: #3498db; color: white; }

        .suggestion-description,
        .insight-description {
          color: #b3b3b3;
          font-size: 12px;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .code-example {
          background: #1e1e1e;
          border-radius: 4px;
          padding: 8px;
          margin: 8px 0;
          position: relative;
        }

        .code-example code {
          color: #d4d4d4;
          font-family: monospace;
          font-size: 11px;
        }

        .copy-btn {
          position: absolute;
          top: 4px;
          right: 4px;
          background: none;
          border: none;
          color: #858585;
          cursor: pointer;
          padding: 4px;
        }

        .suggestion-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .apply-btn {
          background: #27ae60;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 11px;
          cursor: pointer;
        }

        .effort {
          color: #858585;
          font-size: 10px;
        }

        .confidence {
          background: rgba(39, 174, 96, 0.2);
          color: #27ae60;
          padding: 2px 6px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 600;
        }

        .chat-panel {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 16px;
        }

        .chat-welcome {
          text-align: center;
          color: #858585;
          padding: 20px;
        }

        .chat-welcome h3 {
          color: #cccccc;
          margin: 8px 0;
        }

        .chat-suggestions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
        }

        .chat-suggestions button {
          background: #37373d;
          color: #cccccc;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .message {
          margin-bottom: 12px;
          padding: 8px 12px;
          border-radius: 8px;
          max-width: 80%;
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
          font-size: 13px;
          line-height: 1.4;
          white-space: pre-wrap;
        }

        .chat-input-form {
          display: flex;
          gap: 8px;
        }

        .chat-input {
          flex: 1;
          background: #3e3e42;
          border: 1px solid #5a5a5a;
          color: #cccccc;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 13px;
        }

        .chat-input:focus {
          outline: none;
          border-color: #007acc;
        }

        .send-btn {
          background: #007acc;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .generate-form {
          margin-bottom: 20px;
        }

        .generate-input {
          width: 100%;
          background: #3e3e42;
          border: 1px solid #5a5a5a;
          color: #cccccc;
          padding: 12px;
          border-radius: 4px;
          font-size: 13px;
          resize: vertical;
          margin-bottom: 12px;
        }

        .generate-input:focus {
          outline: none;
          border-color: #007acc;
        }

        .generate-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #007acc;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 13px;
        }

        .generate-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .generate-examples h4 {
          color: #cccccc;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .example-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .example-buttons button {
          background: #37373d;
          color: #cccccc;
          border: none;
          padding: 6px 10px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 11px;
          transition: background 0.2s;
        }

        .example-buttons button:hover {
          background: #4a4a4a;
        }
      `}</style>
    </div>
  )
}