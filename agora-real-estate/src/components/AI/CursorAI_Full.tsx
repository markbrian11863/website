import React, { useState, useEffect, useRef, useCallback } from 'react'
import { 
  Brain, Code, Zap, FileText, Upload, BarChart3, Activity, 
  AlertTriangle, CheckCircle, Lightbulb, Download, Copy, 
  Play, Pause, Settings, Search, Filter, RefreshCw, X,
  FolderOpen, File, GitBranch, MessageSquare, Wand2
} from 'lucide-react'
import { showSuccess, showError } from '../../utils/notifications'
import { WelcomeScreen, FileExplorer, MainEditor } from './CursorComponents'
import { TabPanel } from './TabPanel'
import { ProcessingOverlay } from './ProcessingOverlay'
import { analyzeCode, optimizeCode, generateCode, getAIResponse } from './AIFunctions'

interface CursorAIProps {
  onAnalysisComplete?: (result: any) => void
}

interface FileData {
  id: string
  name: string
  type: string
  size: number
  content: string
  lastModified: Date
  analysis?: AnalysisResult
  isModified?: boolean
  language?: string
}

interface QualityMetrics {
  overall: number
  maintainability: number
  readability: number
  testability: number
  reliability: number
}

interface ComplexityAnalysis {
  cyclomatic: number
  cognitive: number
  maintainabilityIndex: number
}

interface PerformanceMetrics {
  score: number
  bottlenecks: string[]
  recommendations: string[]
}

interface SecurityAnalysis {
  score: number
  vulnerabilities: any[]
  recommendations: string[]
}

interface DependencyAnalysis {
  total: number
  outdated: number
  vulnerable: number
  list: string[]
}

interface StyleAnalysis {
  score: number
  violations: string[]
  suggestions: string[]
}

interface AnalysisResult {
  quality: QualityMetrics
  issues: CodeIssue[]
  suggestions: AISuggestion[]
  complexity: ComplexityAnalysis
  performance: PerformanceMetrics
  security: SecurityAnalysis
  dependencies: DependencyAnalysis
  codeStyle: StyleAnalysis
  aiInsights: AIInsight[]
}

interface CodeIssue {
  id: string
  type: 'error' | 'warning' | 'info' | 'suggestion'
  severity: 'critical' | 'high' | 'medium' | 'low'
  line: number
  column: number
  message: string
  rule: string
  fix?: string
  autoFixable: boolean
}

interface AISuggestion {
  id: string
  type: 'optimization' | 'refactor' | 'best-practice' | 'performance'
  title: string
  description: string
  impact: 'high' | 'medium' | 'low'
  effort: 'easy' | 'medium' | 'hard'
  codeExample?: string
  beforeCode?: string
  afterCode?: string
}

interface AIInsight {
  id: string
  title: string
  description: string
  confidence: number
  category: 'pattern' | 'architecture' | 'logic' | 'style'
}

const CursorAI: React.FC<CursorAIProps> = ({ onAnalysisComplete }) => {
  const [files, setFiles] = useState<FileData[]>([])
  const [activeFile, setActiveFile] = useState<FileData | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [activeTab, setActiveTab] = useState<string>('editor')
  const [chatMessages, setChatMessages] = useState<any[]>([])
  const [chatInput, setChatInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Event Handlers
  const handleFileUpload = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files
    if (!uploadedFiles) return

    setIsProcessing(true)
    try {
      const newFiles: FileData[] = []
      
      for (const file of Array.from(uploadedFiles)) {
        const content = await readFileContent(file)
        const fileData: FileData = {
          id: `${file.name}-${Date.now()}`,
          name: file.name,
          type: getFileType(file.name),
          size: file.size,
          content,
          lastModified: new Date(file.lastModified),
          language: getLanguage(file.name)
        }
        
        // Auto-analyze the file
        const analysis = await analyzeCode(content, fileData.type)
        fileData.analysis = analysis
        
        newFiles.push(fileData)
      }
      
      setFiles(prev => [...prev, ...newFiles])
      if (!activeFile && newFiles.length > 0) {
        setActiveFile(newFiles[0])
      }
      
      showSuccess(`Uploaded and analyzed ${newFiles.length} file(s)`)
      onAnalysisComplete?.(newFiles[0]?.analysis)
      
    } catch (error) {
      console.error('Upload error:', error)
      showError('Error uploading files. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleFileDelete = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId))
    if (activeFile?.id === fileId) {
      const remainingFiles = files.filter(f => f.id !== fileId)
      setActiveFile(remainingFiles.length > 0 ? remainingFiles[0] : null)
    }
  }

  const handleContentChange = async (content: string) => {
    if (!activeFile) return
    
    const updatedFile = { ...activeFile, content, isModified: true }
    setActiveFile(updatedFile)
    setFiles(prev => prev.map(f => f.id === activeFile.id ? updatedFile : f))
    
    // Debounced re-analysis
    clearTimeout((window as any).reanalysisTimeout)
    ;(window as any).reanalysisTimeout = setTimeout(async () => {
      const analysis = await analyzeCode(content, activeFile.type)
      const fileWithAnalysis = { ...updatedFile, analysis }
      setActiveFile(fileWithAnalysis)
      setFiles(prev => prev.map(f => f.id === activeFile.id ? fileWithAnalysis : f))
    }, 1500)
  }

  const handleAnalyzeFile = async () => {
    if (!activeFile) return
    
    setIsAnalyzing(true)
    try {
      const analysis = await analyzeCode(activeFile.content, activeFile.type)
      const updatedFile = { ...activeFile, analysis }
      setActiveFile(updatedFile)
      setFiles(prev => prev.map(f => f.id === activeFile.id ? updatedFile : f))
      showSuccess('Analysis complete!')
    } catch (error) {
      showError('Analysis failed. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleOptimizeFile = async () => {
    if (!activeFile) return
    
    setIsProcessing(true)
    try {
      const optimized = await optimizeCode(activeFile.content, activeFile.type)
      const updatedFile = { ...activeFile, content: optimized, isModified: true }
      setActiveFile(updatedFile)
      setFiles(prev => prev.map(f => f.id === activeFile.id ? updatedFile : f))
      showSuccess('Code optimized!')
    } catch (error) {
      showError('Optimization failed.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleGenerateCode = async (prompt: string) => {
    if (!prompt.trim()) return
    
    setIsProcessing(true)
    try {
      const generated = await generateCode(prompt, activeFile?.type || 'javascript')
      const newFile: FileData = {
        id: `generated-${Date.now()}`,
        name: `generated.${getFileExtension(activeFile?.type || 'javascript')}`,
        type: activeFile?.type || 'javascript',
        size: generated.length,
        content: generated,
        lastModified: new Date(),
        language: activeFile?.language || 'javascript'
      }
      
      const analysis = await analyzeCode(generated, newFile.type)
      newFile.analysis = analysis
      
      setFiles(prev => [...prev, newFile])
      setActiveFile(newFile)
      showSuccess('Code generated!')
    } catch (error) {
      showError('Code generation failed.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleChatSend = async (message: string) => {
    if (!message.trim()) return
    
    const userMessage = { id: Date.now(), type: 'user', content: message }
    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')
    
    setIsProcessing(true)
    try {
      const response = await getAIResponse(message, activeFile)
      const aiMessage = { id: Date.now() + 1, type: 'ai', content: response }
      setChatMessages(prev => [...prev, aiMessage])
    } catch (error) {
      showError('Failed to get AI response')
    } finally {
      setIsProcessing(false)
    }
  }

  // Utility Functions
  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target?.result as string)
      reader.onerror = () => reject(new Error('Failed to read file'))
      reader.readAsText(file)
    })
  }

  const getFileType = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase()
    const typeMap: Record<string, string> = {
      'js': 'javascript',
      'jsx': 'react',
      'ts': 'typescript',
      'tsx': 'react-typescript',
      'py': 'python',
      'html': 'html',
      'css': 'css',
      'json': 'json',
      'md': 'markdown'
    }
    return typeMap[ext || ''] || 'text'
  }

  const getLanguage = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase()
    const langMap: Record<string, string> = {
      'js': 'javascript',
      'jsx': 'javascript',
      'ts': 'typescript',
      'tsx': 'typescript',
      'py': 'python',
      'html': 'html',
      'css': 'css',
      'json': 'json',
      'md': 'markdown'
    }
    return langMap[ext || ''] || 'text'
  }

  const getFileExtension = (type: string): string => {
    const extMap: Record<string, string> = {
      'javascript': 'js',
      'react': 'jsx',
      'typescript': 'ts',
      'react-typescript': 'tsx',
      'python': 'py',
      'html': 'html',
      'css': 'css',
      'json': 'json',
      'markdown': 'md'
    }
    return extMap[type] || 'txt'
  }

  return (
    <div className="cursor-ai-full">
      {/* Main Interface */}
      <div className="ai-workspace">
        {showWelcome && files.length === 0 ? (
          <WelcomeScreen onGetStarted={() => setShowWelcome(false)} />
        ) : (
          <>
            <FileExplorer 
              files={files}
              activeFile={activeFile}
              onFileSelect={setActiveFile}
              onFileUpload={handleFileUpload}
              onFileDelete={handleFileDelete}
            />
            
            <MainEditor
              file={activeFile}
              onContentChange={handleContentChange}
              onAnalyze={handleAnalyzeFile}
              isAnalyzing={isAnalyzing}
            />
            
            <TabPanel
              activeTab={activeTab}
              onTabChange={setActiveTab}
              file={activeFile}
              chatMessages={chatMessages}
              chatInput={chatInput}
              onChatInput={setChatInput}
              onChatSend={handleChatSend}
              onOptimize={handleOptimizeFile}
              onGenerate={handleGenerateCode}
            />
          </>
        )}
      </div>
      
      {isProcessing && <ProcessingOverlay />}
      
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".js,.jsx,.ts,.tsx,.py,.html,.css,.json,.md,.txt"
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
      
      <style jsx>{`
        .cursor-ai-full {
          background: #1e1e1e;
          border-radius: 12px;
          overflow: hidden;
          height: 600px;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .ai-workspace {
          display: grid;
          grid-template-columns: 250px 1fr 300px;
          height: 100%;
          background: #1e1e1e;
        }
      `}</style>
    </div>
  )
}

export default CursorAI