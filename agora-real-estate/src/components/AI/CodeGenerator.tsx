import React, { useState } from 'react'
import { Code, Zap, Download, Copy, Sparkles } from 'lucide-react'
import { showSuccess, showError } from '../../utils/notifications'

interface CodeGeneratorProps {
  onCodeGenerate: (prompt: string, type: string) => void
}

const CodeGenerator: React.FC<CodeGeneratorProps> = ({ onCodeGenerate }) => {
  const [prompt, setPrompt] = useState('')
  const [selectedType, setSelectedType] = useState('react')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')

  const codeTypes = [
    { id: 'react', name: 'React Component', icon: '⚛️' },
    { id: 'html', name: 'HTML/CSS', icon: '🌐' },
    { id: 'javascript', name: 'JavaScript', icon: '📜' },
    { id: 'api', name: 'API Code', icon: '🔌' },
    { id: 'database', name: 'Database Query', icon: '🗄️' },
    { id: 'python', name: 'Python', icon: '🐍' }
  ]

  const generateCode = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    onCodeGenerate(prompt, selectedType)

    // Mock code generation (replace with real AI API)
    setTimeout(() => {
      try {
        const mockCode = generateMockCode(selectedType, prompt)
        setGeneratedCode(mockCode)
        showSuccess('Code generated successfully!')
        setIsGenerating(false)
      } catch (error) {
        console.error('Error generating code:', error)
        showError('Error generating code. Please try again.')
        setIsGenerating(false)
      }
    }, 2000)
  }

  const generateMockCode = (type: string, prompt: string) => {
    switch (type) {
      case 'react':
        return `import React, { useState } from 'react';

const ${prompt.replace(/\s+/g, '')}Component = () => {
  const [data, setData] = useState([]);

  return (
    <div className="component-container">
      <h2>${prompt}</h2>
      <p>Generated component based on your prompt</p>
      {/* Add your implementation here */}
    </div>
  );
};

export default ${prompt.replace(/\s+/g, '')}Component;`

      case 'html':
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${prompt}</title>
    <style>
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .main-content {
            background: #f8fafc;
            border-radius: 12px;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="main-content">
            <h1>${prompt}</h1>
            <p>Generated HTML structure</p>
        </div>
    </div>
</body>
</html>`

      case 'javascript':
        return `// ${prompt}
function main() {
    console.log('Generated JavaScript for: ${prompt}');
    
    // Your implementation here
    const result = processData();
    return result;
}

function processData() {
    // Add your logic here
    return 'Implementation based on: ${prompt}';
}

main();`

      case 'python':
        return `# ${prompt}
def main():
    """Generated Python code for: ${prompt}"""
    print('Generated Python implementation')
    
    # Your implementation here
    result = process_data()
    return result

def process_data():
    """Add your logic here"""
    return f"Implementation based on: ${prompt}"

if __name__ == "__main__":
    main()`

      default:
        return `/* ${prompt} */\n// Generated code for ${type}\nconsole.log('Implementation for: ${prompt}');`
    }
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode)
      showSuccess('Code copied to clipboard!')
      // Add visual feedback
      const btn = document.querySelector('.action-btn')
      if (btn) {
        const originalText = btn.textContent
        btn.textContent = '✓ Copied!'
        setTimeout(() => {
          btn.textContent = originalText
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy code:', err)
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea')
        textArea.value = generatedCode
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        showSuccess('Code copied to clipboard!')
      } catch (fallbackErr) {
        showError('Failed to copy code. Please select and copy manually.')
      }
    }
  }

  const downloadCode = () => {
    try {
      if (!generatedCode) {
        showError('No code to download')
        return
      }

      const getFileExtension = (type: string) => {
        switch (type) {
          case 'python': return 'py'
          case 'html': return 'html'
          case 'javascript': return 'js'
          case 'react': return 'jsx'
          case 'api': return 'js'
          case 'database': return 'sql'
          default: return 'txt'
        }
      }

      const extension = getFileExtension(selectedType)
      const filename = `generated_${selectedType}_${Date.now()}.${extension}`
      
      const blob = new Blob([generatedCode], { type: 'text/plain;charset=utf-8' })
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
      showSuccess(`Code downloaded as ${filename}`)
      
    } catch (error) {
      console.error('Error downloading file:', error)
      showError('Error downloading file. Please try again.')
    }
  }

  return (
    <div className="code-generator">
      <div className="generator-header">
        <h3>
          <Code size={24} />
          AI Code Generator
        </h3>
        <p>Describe what you want to build, and AI will generate the code</p>
      </div>

      <div className="code-types">
        {codeTypes.map((type) => (
          <button
            key={type.id}
            className={`type-btn ${selectedType === type.id ? 'active' : ''}`}
            onClick={() => setSelectedType(type.id)}
          >
            <span className="type-icon">{type.icon}</span>
            <span className="type-name">{type.name}</span>
          </button>
        ))}
      </div>

      <div className="prompt-section">
        <textarea
          placeholder="Describe what you want to build... (e.g., 'Create a login form with validation' or 'Build a shopping cart component')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="prompt-input"
        />
        
        <button
          className="generate-btn"
          onClick={generateCode}
          disabled={!prompt.trim() || isGenerating}
        >
          {isGenerating ? (
            <>
              <Sparkles size={20} className="spinning" />
              Generating...
            </>
          ) : (
            <>
              <Zap size={20} />
              Generate Code
            </>
          )}
        </button>
      </div>

      {generatedCode && (
        <div className="code-output">
          <div className="output-header">
            <h4>Generated {codeTypes.find(t => t.id === selectedType)?.name}</h4>
            <div className="output-actions">
              <button onClick={copyCode} className="action-btn">
                <Copy size={16} />
                Copy
              </button>
              <button onClick={downloadCode} className="action-btn">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
          
          <pre className="code-display">
            <code>{generatedCode}</code>
          </pre>
        </div>
      )}

      <style jsx>{`
        .code-generator {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .generator-header h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .generator-header p {
          color: #718096;
          margin-bottom: 2rem;
        }

        .code-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .type-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .type-btn:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }

        .type-btn.active {
          border-color: #ff6b6b;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 167, 38, 0.1) 100%);
        }

        .type-icon {
          font-size: 1.5rem;
        }

        .type-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: #2d3748;
        }

        .prompt-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .prompt-input {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          resize: vertical;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .prompt-input:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .generate-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .generate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .generate-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 2s linear infinite;
        }

        .code-output {
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
        }

        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #2d3748;
          color: white;
        }

        .output-header h4 {
          margin: 0;
          font-weight: 600;
        }

        .output-actions {
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

        .code-display {
          margin: 0;
          padding: 1.5rem;
          background: #1a202c;
          color: #e2e8f0;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          overflow-x: auto;
          white-space: pre-wrap;
        }

        @media (max-width: 768px) {
          .code-types {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .generate-btn {
            align-self: stretch;
          }
        }
      `}</style>
    </div>
  )
}

export default CodeGenerator