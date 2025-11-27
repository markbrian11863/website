import React, { useState, useEffect, useRef } from 'react'
import { Brain, Code, Eye, Download, Copy, Zap, Sparkles, Image, FileText, CheckCircle, AlertTriangle, Lightbulb, BarChart3, TrendingUp, Activity } from 'lucide-react'
import { showSuccess, showError } from '../../utils/notifications'
import CodeAnalysisEngine from './CodeAnalysisEngine'
import { MetricsChart, IssueDistributionChart } from './DataVisualization'

interface FileAnalysis {
  fileType: string
  size: number
  syntax: any[]
  errors: any[]
  suggestions: any[]
  structure: any
  content: string
}

interface AISuggestion {
  type: 'error' | 'warning' | 'optimization' | 'completion'
  line: number
  message: string
  suggestion: string
  severity: 'high' | 'medium' | 'low'
}

interface AnalysisResult {
  id: string
  imageUrl: string
  analysis: {
    description: string
    objects: string[]
    colors: string[]
    text: string[]
    suggestions: string[]
  }
  generatedCode: {
    html: string
    css: string
    javascript: string
    react: string
  }
  timestamp: Date
}

interface ImageAnalyzerProps {
  imageUrl: string
  onAnalysisComplete: (result: AnalysisResult) => void
}

const ImageAnalyzer: React.FC<ImageAnalyzerProps> = ({ imageUrl, onAnalysisComplete }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [fileAnalysis, setFileAnalysis] = useState<FileAnalysis | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState('')
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const [activeCodeTab, setActiveCodeTab] = useState('react')
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [codeInsights, setCodeInsights] = useState<any>(null)
  const analysisEngine = CodeAnalysisEngine()

  // Helper functions for file analysis
  const getFileTypeFromName = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase()
    const typeMap: { [key: string]: string } = {
      'js': 'text/javascript',
      'jsx': 'text/jsx',
      'ts': 'text/typescript',
      'tsx': 'text/tsx',
      'py': 'text/python',
      'html': 'text/html',
      'css': 'text/css',
      'json': 'application/json',
      'md': 'text/markdown',
      'txt': 'text/plain'
    }
    return typeMap[ext || ''] || 'application/octet-stream'
  }

  const isTextFile = (file: File): boolean => {
    return file.type.startsWith('text/') || 
           file.type.includes('json') || 
           file.type.includes('javascript') ||
           file.type.includes('python') ||
           file.name.endsWith('.md') ||
           file.name.endsWith('.py') ||
           file.name.endsWith('.js') ||
           file.name.endsWith('.jsx') ||
           file.name.endsWith('.ts') ||
           file.name.endsWith('.tsx')
  }

  const performAIAnalysis = async (content: string, fileType: string, size: number): Promise<FileAnalysis> => {
    // Simulate AI analysis with comprehensive results
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const analysis: FileAnalysis = {
      fileType,
      size,
      content,
      syntax: [],
      errors: [],
      suggestions: [],
      structure: {}
    }

    // Analyze based on file type
    if (fileType.includes('javascript') || fileType.includes('jsx')) {
      analysis.structure = { type: 'JavaScript/React', functions: 3, components: 1, imports: 2 }
      analysis.syntax = [
        { type: 'function', name: 'handleSubmit', line: 12 },
        { type: 'component', name: 'MyComponent', line: 1 },
        { type: 'import', name: 'React', line: 1 }
      ]
      analysis.errors = [
        { line: 15, type: 'warning', message: 'Unused variable "data"' },
        { line: 23, type: 'error', message: 'Missing semicolon' }
      ]
    } else if (fileType.includes('python')) {
      analysis.structure = { type: 'Python', functions: 2, classes: 1, imports: 3 }
      analysis.syntax = [
        { type: 'class', name: 'DataProcessor', line: 5 },
        { type: 'function', name: 'process_data', line: 12 }
      ]
    }

    return analysis
  }

  const generateAISuggestions = async (content: string, fileType: string): Promise<AISuggestion[]> => {
    // Simulate AI-powered suggestions
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const suggestions: AISuggestion[] = []
    
    if (fileType.includes('javascript') || fileType.includes('jsx')) {
      suggestions.push(
        {
          type: 'optimization',
          line: 12,
          message: 'Consider using useCallback for better performance',
          suggestion: 'const handleSubmit = useCallback(() => { ... }, [dependencies])',
          severity: 'medium'
        },
        {
          type: 'error',
          line: 23,
          message: 'Missing error handling',
          suggestion: 'Add try-catch block around async operation',
          severity: 'high'
        },
        {
          type: 'completion',
          line: 35,
          message: 'PropTypes validation recommended',
          suggestion: 'Add PropTypes.object.isRequired for props validation',
          severity: 'low'
        }
      )
    }
    
    return suggestions
  }

  // Automatic file processing function
  const processFileAutomatically = async (file: File | string) => {
    setIsAnalyzing(true)
    console.log('🔄 Auto-processing file with AI enhancements...')
    
    try {
      let fileContent = ''
      let fileType = ''
      let fileSize = 0
      let fileName = 'processed_file'
      
      // Handle different input types
      if (typeof file === 'string') {
        // Handle base64 or URL
        if (file.startsWith('data:')) {
          const response = await fetch(file)
          const blob = await response.blob()
          fileSize = blob.size
          fileType = blob.type
          fileName = 'uploaded_file'
          
          if (blob.type.startsWith('text/') || blob.type.includes('json') || blob.type.includes('javascript')) {
            fileContent = await blob.text()
          }
        }
      } else {
        // Handle File object
        fileSize = file.size
        fileType = file.type || getFileTypeFromName(file.name)
        fileName = file.name.split('.')[0]
        
        if (isTextFile(file)) {
          fileContent = await file.text()
        }
      }
      
      // Automatically analyze and enhance the file
      const analysis = await performAIAnalysis(fileContent, fileType, fileSize)
      const suggestions = await generateAISuggestions(fileContent, fileType)
      
      // Automatically apply ALL improvements
      let enhancedContent = fileContent
      
      // Auto-apply improvements based on file type
      enhancedContent = await autoApplyImprovements(enhancedContent, fileType, suggestions)
      
      // Perform deep code analysis (Cursor AI style)
      if (isCodeFile(fileType)) {
        console.log('🧠 Performing deep code analysis...')
        const insights = analysisEngine.analyzeJavaScript(enhancedContent)
        setCodeInsights(insights)
        analysisEngine.setAnalysisResult(insights)
      }
      
      // Set the enhanced content
      setEditedContent(enhancedContent)
      setFileAnalysis(analysis)
      setIsEditing(true) // Show the enhanced file directly
      
      // Generate downloadable enhanced file
      const enhancedFileName = `${fileName}_enhanced.${getFileExtension(fileType)}`
      
      showSuccess(`✨ File automatically enhanced! Ready to download as ${enhancedFileName}`)
      
      // Auto-download the enhanced file
      setTimeout(() => {
        downloadCode(enhancedContent, enhancedFileName)
      }, 1000)
      
    } catch (error) {
      console.error('Auto-processing error:', error)
      showError('Error processing file. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  // Auto-apply AI improvements
  const autoApplyImprovements = async (content: string, fileType: string, suggestions: AISuggestion[]): Promise<string> => {
    let enhanced = content
    
    if (fileType.includes('javascript') || fileType.includes('jsx')) {
      // Auto-fix JavaScript/React issues
      enhanced = enhanced
        .replace(/;\s*$/gm, ';') // Ensure semicolons
        .replace(/\bvar\b/g, 'const') // Convert var to const
        .replace(/function\s+(\w+)\s*\(/g, 'const $1 = (') // Convert to arrow functions
        .replace(/\}\s*$/, '}\n') // Ensure final newline
      
      // Add error handling
      if (enhanced.includes('fetch(') && !enhanced.includes('try') && !enhanced.includes('catch')) {
        enhanced = enhanced.replace(
          /(fetch\([^)]+\))/g, 
          'try {\n    const response = await $1;\n    // Handle response\n  } catch (error) {\n    console.error("Error:", error);\n  }'
        )
      }
    }
    
    if (fileType.includes('python')) {
      // Auto-fix Python issues
      enhanced = enhanced
        .replace(/^\s*print\s+([^(].*?)$/gm, 'print($1)') // Fix print statements
        .replace(/\bxrange\b/g, 'range') // Python 3 compatibility
        .replace(/^\s*import\s+/gm, 'import ') // Clean imports
      
      // Add proper main guard
      if (!enhanced.includes('if __name__ == "__main__"') && enhanced.includes('def main(')) {
        enhanced += '\n\nif __name__ == "__main__":\n    main()\n'
      }
    }
    
    if (fileType.includes('html')) {
      // Auto-fix HTML issues
      enhanced = enhanced
        .replace(/<([^>]+)>/g, (match, tag) => {
          // Ensure proper tag structure
          return match.toLowerCase()
        })
        .replace(/\s+/g, ' ') // Clean whitespace
        .trim()
      
      // Add meta viewport if missing
      if (!enhanced.includes('viewport') && enhanced.includes('<head>')) {
        enhanced = enhanced.replace(
          '<head>',
          '<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
        )
      }
    }
    
    return enhanced
  }

  const isCodeFile = (fileType: string): boolean => {
    return fileType.includes('javascript') || 
           fileType.includes('jsx') || 
           fileType.includes('typescript') ||
           fileType.includes('tsx') ||
           fileType.includes('python') ||
           fileType.includes('json')
  }

  const getFileExtension = (fileType: string): string => {
    if (fileType.includes('javascript')) return 'js'
    if (fileType.includes('jsx')) return 'jsx'
    if (fileType.includes('typescript')) return 'ts'
    if (fileType.includes('tsx')) return 'tsx'
    if (fileType.includes('python')) return 'py'
    if (fileType.includes('html')) return 'html'
    if (fileType.includes('css')) return 'css'
    if (fileType.includes('json')) return 'json'
    if (fileType.includes('markdown')) return 'md'
    return 'txt'
  }

  // Real-time editing functions
  const handleContentChange = (newContent: string) => {
    setEditedContent(newContent)
    
    // Debounced AI suggestions on content change
    clearTimeout(window.aiSuggestionsTimeout)
    window.aiSuggestionsTimeout = setTimeout(async () => {
      if (fileAnalysis) {
        const newSuggestions = await generateAISuggestions(newContent, fileAnalysis.fileType)
        setAiSuggestions(newSuggestions)
      }
    }, 1000)
  }

  const applySuggestion = (suggestionIndex: number) => {
    const suggestion = aiSuggestions[suggestionIndex]
    if (suggestion && editorRef.current) {
      const lines = editedContent.split('\n')
      const targetLine = suggestion.line - 1
      
      if (targetLine >= 0 && targetLine < lines.length) {
        // Apply the suggestion to the specific line
        lines[targetLine] = suggestion.suggestion
        const newContent = lines.join('\n')
        setEditedContent(newContent)
        
        // Remove applied suggestion
        setAiSuggestions(prev => prev.filter((_, i) => i !== suggestionIndex))
        showSuccess('Suggestion applied successfully!')
      }
    }
  }

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="text-red-500" size={16} />
      case 'warning': return <AlertTriangle className="text-yellow-500" size={16} />
      case 'optimization': return <Lightbulb className="text-blue-500" size={16} />
      case 'completion': return <CheckCircle className="text-green-500" size={16} />
      default: return <Brain className="text-purple-500" size={16} />
    }
  }

  // Auto-trigger file processing when image/file is uploaded
  useEffect(() => {
    if (imageUrl) {
      processFileAutomatically(imageUrl)
    }
  }, [imageUrl])

  const analyzeImage = async () => {
    setIsAnalyzing(true)

    // Simulate AI analysis (replace with real AI API)
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        id: Date.now().toString(),
        imageUrl,
        analysis: {
          description: "A modern mobile app login screen with clean design, featuring email and password input fields, a gradient background, and a prominent 'Sign In' button.",
          objects: ['login form', 'input fields', 'button', 'logo', 'background'],
          colors: ['#667eea', '#764ba2', '#ffffff', '#2d3748'],
          text: ['Sign In', 'Email', 'Password', 'Forgot Password?'],
          suggestions: [
            'Add form validation',
            'Include social login options',
            'Improve accessibility',
            'Add loading states'
          ]
        },
        generatedCode: {
          html: `<div class="login-container">
  <div class="login-form">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email" class="input-field">
    <input type="password" placeholder="Password" class="input-field">
    <button class="signin-btn">Sign In</button>
    <a href="#" class="forgot-link">Forgot Password?</a>
  </div>
</div>`,
          css: `.login-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

.signin-btn {
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
}`,
          javascript: `// Form validation and submission
const form = document.querySelector('.login-form');
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');
const submitBtn = form.querySelector('.signin-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if (validateForm(email, password)) {
    submitForm(email, password);
  }
});

function validateForm(email, password) {
  if (!email || !password) {
    alert('Please fill in all fields');
    return false;
  }
  return true;
}

function submitForm(email, password) {
  // Handle login logic
  console.log('Login attempt:', { email, password });
}`,
          react: `import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Handle login logic
      console.log('Login attempt:', { email, password });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        <button 
          type="submit" 
          className="signin-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
        <a href="#" className="forgot-link">Forgot Password?</a>
      </form>
    </div>
  );
};

export default LoginForm;`
        },
        timestamp: new Date()
      }

      setAnalysisResult(mockResult)
      onAnalysisComplete(mockResult)
      showSuccess('Image analysis completed successfully!')
      setIsAnalyzing(false)
    }, 2000)
  }

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      showSuccess('Code copied to clipboard!')
      // Add visual feedback
      const btn = event?.target as HTMLButtonElement
      if (btn) {
        const originalHTML = btn.innerHTML
        btn.innerHTML = '✓ Copied!'
        setTimeout(() => {
          btn.innerHTML = originalHTML
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy code:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Code copied to clipboard!')
    }
  }

  const downloadCode = (code: string, filename: string) => {
    try {
      if (!code) {
        alert('No code to download')
        return
      }

      const blob = new Blob([code], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.style.display = 'none'
      
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      
      // Clean up the URL object
      setTimeout(() => URL.revokeObjectURL(url), 100)
      
    } catch (error) {
      console.error('Error downloading file:', error)
      alert('Error downloading file. Please try again.')
    }
  }

  return (
    <div className="image-analyzer">
      <div className="analyzer-header">
        <div className="image-preview">
          <img src={imageUrl} alt="Analysis target" />
        </div>
        
        <div className="analyzer-actions">
          <button 
            className="analyze-btn"
            onClick={analyzeImage}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <Sparkles size={20} className="spinning" />
                Analyzing...
              </>
            ) : (
              <>
                <Brain size={20} />
                Analyze with AI
              </>
            )}
          </button>
        </div>
      </div>

      {analysisResult && (
        <div className="analysis-results">
          <div className="analysis-section">
            <h3><Eye size={20} /> AI Analysis</h3>
            <div className="analysis-content">
              <p className="description">{analysisResult.analysis.description}</p>
              
              <div className="analysis-grid">
                <div className="analysis-item">
                  <h4>Detected Objects</h4>
                  <div className="tags">
                    {analysisResult.analysis.objects.map((obj, index) => (
                      <span key={index} className="tag object-tag">{obj}</span>
                    ))}
                  </div>
                </div>
                
                <div className="analysis-item">
                  <h4>Color Palette</h4>
                  <div className="color-palette">
                    {analysisResult.analysis.colors.map((color, index) => (
                      <div 
                        key={index} 
                        className="color-swatch" 
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="analysis-item">
                  <h4>Text Found</h4>
                  <div className="tags">
                    {analysisResult.analysis.text.map((text, index) => (
                      <span key={index} className="tag text-tag">"{text}"</span>
                    ))}
                  </div>
                </div>
                
                <div className="analysis-item">
                  <h4>AI Suggestions</h4>
                  <ul className="suggestions">
                    {analysisResult.analysis.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="code-section">
            <h3><Code size={20} /> Generated Code</h3>
            
            <div className="code-tabs">
              {Object.keys(analysisResult.generatedCode).map((lang) => (
                <button
                  key={lang}
                  className={`code-tab ${activeCodeTab === lang ? 'active' : ''}`}
                  onClick={() => setActiveCodeTab(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="code-content">
              <div className="code-header">
                <span className="code-title">{activeCodeTab.toUpperCase()} Code</span>
                <div className="code-actions">
                  <button 
                    className="action-btn"
                    onClick={() => copyToClipboard(analysisResult.generatedCode[activeCodeTab as keyof typeof analysisResult.generatedCode])}
                  >
                    <Copy size={16} />
                    Copy
                  </button>
                  <button 
                    className="action-btn"
                    onClick={() => downloadCode(
                      analysisResult.generatedCode[activeCodeTab as keyof typeof analysisResult.generatedCode], 
                      `component.${activeCodeTab === 'javascript' ? 'js' : activeCodeTab}`
                    )}
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
              
              <pre className="code-block">
                <code>{analysisResult.generatedCode[activeCodeTab as keyof typeof analysisResult.generatedCode]}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .image-analyzer {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .analyzer-header {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .image-preview {
          flex: 1;
          max-width: 300px;
        }

        .image-preview img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .analyzer-actions {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .analyze-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .analyze-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .analyze-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 2s linear infinite;
        }

        .analysis-results {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .analysis-section, .code-section {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .analysis-section h3, .code-section h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .description {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #ff6b6b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .analysis-item {
          background: white;
          padding: 1rem;
          border-radius: 8px;
        }

        .analysis-item h4 {
          color: #2d3748;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: #e2e8f0;
          color: #2d3748;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .object-tag {
          background: #e6fffa;
          color: #319795;
        }

        .text-tag {
          background: #fff5f5;
          color: #e53e3e;
        }

        .color-palette {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .color-swatch {
          width: 30px;
          height: 30px;
          border-radius: 6px;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .suggestions {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .suggestions li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 0.875rem;
        }

        .suggestions li:last-child {
          border-bottom: none;
        }

        .code-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .code-tab {
          padding: 8px 16px;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .code-tab.active {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .code-content {
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #2d3748;
          color: white;
        }

        .code-title {
          font-weight: 600;
        }

        .code-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .code-block {
          margin: 0;
          padding: 1rem;
          background: #1a202c;
          color: #e2e8f0;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          overflow-x: auto;
        }

        @media (max-width: 768px) {
          .analyzer-header {
            flex-direction: column;
          }

          .analysis-grid {
            grid-template-columns: 1fr;
          }

          .code-tabs {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  )
}

export default ImageAnalyzer