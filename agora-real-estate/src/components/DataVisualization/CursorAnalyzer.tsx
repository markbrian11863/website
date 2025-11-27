import React, { useState, useRef } from 'react'
import { Upload, Code, Brain, FileText, Download, Copy, Check } from 'lucide-react'
import CodeInsightsPanel from './CodeInsightsPanel'
import ChartingEngine from './ChartingEngine'

interface AnalysisResult {
  fileName: string
  language: string
  content: string
  suggestions: string[]
  metrics: {
    complexity: number
    maintainability: number
    performance: number
    security: number
  }
  issues: Array<{
    line: number
    type: 'error' | 'warning' | 'info'
    message: string
  }>
}

const CursorAnalyzer: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<AnalysisResult[]>([])
  const [selectedFile, setSelectedFile] = useState<AnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')
  const [codePrompt, setCodePrompt] = useState('')
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    setIsAnalyzing(true)
    
    for (const file of Array.from(files)) {
      const content = await file.text()
      const language = getLanguageFromFileName(file.name)
      
      // Simulate AI analysis (in real app, this would be an API call)
      const analysisResult: AnalysisResult = {
        fileName: file.name,
        language,
        content,
        suggestions: generateSuggestions(content, language),
        metrics: analyzeMetrics(content),
        issues: findIssues(content, language)
      }
      
      setUploadedFiles(prev => [...prev, analysisResult])
    }
    
    setIsAnalyzing(false)
  }

  const getLanguageFromFileName = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    const languageMap: { [key: string]: string } = {
      'js': 'javascript',
      'ts': 'typescript',
      'tsx': 'typescript',
      'jsx': 'javascript',
      'py': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
      'cs': 'csharp',
      'php': 'php',
      'rb': 'ruby',
      'go': 'go',
      'rs': 'rust'
    }
    return languageMap[extension || ''] || 'text'
  }

  const generateSuggestions = (content: string, language: string): string[] => {
    const suggestions = []
    
    // Basic code analysis patterns
    if (content.includes('console.log')) {
      suggestions.push('Consider using a proper logging library instead of console.log')
    }
    
    if (content.includes('var ') && language === 'javascript') {
      suggestions.push('Use let or const instead of var for better scoping')
    }
    
    if (content.split('\n').length > 100) {
      suggestions.push('Consider breaking this file into smaller modules')
    }
    
    if (!content.includes('//') && !content.includes('/*')) {
      suggestions.push('Add comments to improve code readability')
    }
    
    return suggestions
  }

  const analyzeMetrics = (content: string) => {
    const lines = content.split('\n').length
    const complexity = Math.max(0, 100 - (lines * 0.1))
    const maintainability = Math.min(100, 85 + Math.random() * 15)
    const performance = Math.min(100, 80 + Math.random() * 20)
    const security = Math.min(100, 75 + Math.random() * 25)
    
    return { complexity, maintainability, performance, security }
  }

  const findIssues = (content: string, language: string) => {
    const issues = []
    const lines = content.split('\n')
    
    lines.forEach((line, index) => {
      if (line.includes('TODO') || line.includes('FIXME')) {
        issues.push({
          line: index + 1,
          type: 'warning' as const,
          message: 'TODO/FIXME comment found'
        })
      }
      
      if (line.includes('eval(') && language === 'javascript') {
        issues.push({
          line: index + 1,
          type: 'error' as const,
          message: 'Avoid using eval() for security reasons'
        })
      }
    })
    
    return issues
  }

  const generateCode = async () => {
    if (!codePrompt.trim()) return
    
    setIsAnalyzing(true)
    
    // Simulate AI code generation
    setTimeout(() => {
      const templates: { [key: string]: string } = {
        'react component': `import React from 'react'

interface Props {
  title: string
  children?: React.ReactNode
}

const ${codePrompt.includes('button') ? 'Button' : 'Component'}: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="component">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default ${codePrompt.includes('button') ? 'Button' : 'Component'}`,
        
        'api endpoint': `// Express.js API endpoint
app.${codePrompt.includes('post') ? 'post' : 'get'}('/${codePrompt.split(' ')[0] || 'endpoint'}', async (req, res) => {
  try {
    // Your logic here
    const result = await processRequest(req.body)
    
    res.json({
      success: true,
      data: result
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})`,
        
        'database': `// Database query example
const query = async (${codePrompt.includes('user') ? 'userId' : 'id'}) => {
  try {
    const result = await db.collection('${codePrompt.split(' ')[0] || 'items'}')
      .where('id', '==', ${codePrompt.includes('user') ? 'userId' : 'id'})
      .get()
    
    return result.docs.map(doc => doc.data())
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}`
      }
      
      const matchedTemplate = Object.keys(templates).find(key => 
        codePrompt.toLowerCase().includes(key)
      )
      
      setGeneratedCode(templates[matchedTemplate || 'react component'])
      setIsAnalyzing(false)
    }, 2000)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const metricsData = uploadedFiles.length > 0 ? uploadedFiles.map(file => ({
    name: file.fileName.split('.')[0],
    complexity: file.metrics.complexity,
    maintainability: file.metrics.maintainability,
    performance: file.metrics.performance,
    security: file.metrics.security
  })) : []

  return (
    <div className="cursor-analyzer">
      <div className="analyzer-header">
        <h2>🔍 Cursor AI Code Analyzer</h2>
        <p>Upload files for AI analysis, generate code, and get intelligent insights</p>
      </div>

      <div className="analyzer-grid">
        {/* File Upload Section */}
        <div className="upload-section">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".js,.ts,.tsx,.jsx,.py,.java,.cpp,.c,.cs,.php,.rb,.go,.rs"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          
          <div 
            className="upload-area"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={48} />
            <h3>Upload Code Files</h3>
            <p>Drop files here or click to browse</p>
            <span>Supports: JS, TS, Python, Java, C++, and more</span>
          </div>
          
          {uploadedFiles.length > 0 && (
            <div className="files-list">
              <h4>📁 Uploaded Files ({uploadedFiles.length})</h4>
              {uploadedFiles.map((file, index) => (
                <div 
                  key={index} 
                  className={`file-item ${selectedFile?.fileName === file.fileName ? 'selected' : ''}`}
                  onClick={() => setSelectedFile(file)}
                >
                  <FileText size={16} />
                  <span>{file.fileName}</span>
                  <span className="language-tag">{file.language}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Code Generator Section */}
        <div className="generator-section">
          <h3>🤖 AI Code Generator</h3>
          <div className="prompt-area">
            <textarea
              placeholder="Describe what you want to build... (e.g., 'React component for user profile', 'API endpoint for users', 'database query function')"
              value={codePrompt}
              onChange={(e) => setCodePrompt(e.target.value)}
              rows={3}
            />
            <button 
              onClick={generateCode}
              disabled={!codePrompt.trim() || isAnalyzing}
              className="generate-btn"
            >
              {isAnalyzing ? <Brain className="spin" size={16} /> : <Code size={16} />}
              {isAnalyzing ? 'Generating...' : 'Generate Code'}
            </button>
          </div>

          {generatedCode && (
            <div className="generated-code">
              <div className="code-header">
                <span>Generated Code</span>
                <button onClick={copyToClipboard} className="copy-btn">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre><code>{generatedCode}</code></pre>
            </div>
          )}
        </div>
      </div>

      {/* Analysis Results */}
      {selectedFile && (
        <CodeInsightsPanel
          fileContent={selectedFile.content}
          fileName={selectedFile.fileName}
          language={selectedFile.language}
        />
      )}

      {/* Overall Metrics Chart */}
      {metricsData.length > 0 && (
        <div className="metrics-overview">
          <ChartingEngine
            data={metricsData}
            title="Project Quality Overview"
            type="bar"
            colors={['#4ecdc4', '#ff6b6b', '#45b7d1', '#ffa726']}
            interactive={true}
            exportable={true}
          />
        </div>
      )}

      <style jsx>{`
        .cursor-analyzer {
          padding: 2rem 0;
          background: #f8fafc;
          min-height: 100vh;
        }

        .analyzer-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .analyzer-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 1rem;
        }

        .analyzer-header p {
          color: #718096;
          font-size: 1.125rem;
        }

        .analyzer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .upload-section, .generator-section {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .upload-area {
          border: 2px dashed #cbd5e0;
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
        }

        .upload-area:hover {
          border-color: #4ecdc4;
          background: rgba(78, 205, 196, 0.05);
        }

        .upload-area h3 {
          margin: 1rem 0 0.5rem;
          color: #2d3748;
          font-weight: 600;
        }

        .upload-area p {
          color: #718096;
          margin-bottom: 0.5rem;
        }

        .upload-area span {
          color: #a0aec0;
          font-size: 0.875rem;
        }

        .files-list {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
        }

        .files-list h4 {
          margin: 0 0 1rem;
          color: #2d3748;
          font-size: 1rem;
          font-weight: 600;
        }

        .file-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .file-item:hover {
          background: #f7fafc;
        }

        .file-item.selected {
          background: #e6fffa;
          border-left: 3px solid #4ecdc4;
        }

        .language-tag {
          margin-left: auto;
          background: #e2e8f0;
          color: #4a5568;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.75rem;
        }

        .generator-section h3 {
          margin: 0 0 1.5rem;
          color: #2d3748;
          font-weight: 600;
          font-size: 1.25rem;
        }

        .prompt-area {
          margin-bottom: 2rem;
        }

        .prompt-area textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-family: inherit;
          resize: vertical;
          margin-bottom: 1rem;
        }

        .prompt-area textarea:focus {
          outline: none;
          border-color: #4ecdc4;
          box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
        }

        .generate-btn {
          background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          transition: transform 0.2s ease;
        }

        .generate-btn:hover:not(:disabled) {
          transform: translateY(-1px);
        }

        .generate-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .generated-code {
          background: #1a202c;
          border-radius: 8px;
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: #2d3748;
          color: white;
          font-size: 0.875rem;
        }

        .copy-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
        }

        .generated-code pre {
          margin: 0;
          padding: 1rem;
          overflow-x: auto;
        }

        .generated-code code {
          color: #e2e8f0;
          font-family: 'Fira Code', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .metrics-overview {
          margin: 0 1rem;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .analyzer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default CursorAnalyzer