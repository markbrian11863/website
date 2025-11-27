import React, { useState, useEffect, useRef } from 'react'
import { FileTreeRenderer } from './FileTreeRenderer'
import { CursorEditor } from './CursorEditor'
import { CursorDragDrop } from './CursorDragDrop'
import { 
  FolderOpen, File, ChevronRight, ChevronDown, FileText, 
  Image, Code, Database, Settings, Search, GitBranch,
  Terminal, Bug, Play, Plus, X, MoreHorizontal, Folder
} from 'lucide-react'

interface FileNode {
  id: string
  name: string
  type: 'file' | 'folder'
  path: string
  content?: string
  children?: FileNode[]
  isOpen?: boolean
  size?: number
  lastModified?: Date
  language?: string
}

interface CursorWorkspaceProps {
  onAnalysisComplete?: (result: any) => void
}

const CursorWorkspace: React.FC<CursorWorkspaceProps> = ({ onAnalysisComplete }) => {
  const [projectTree, setProjectTree] = useState<FileNode[]>([])
  const [activeFile, setActiveFile] = useState<FileNode | null>(null)
  const [openTabs, setOpenTabs] = useState<FileNode[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isProjectLoaded, setIsProjectLoaded] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(250)

  const handleFolderUpload = async (files: FileList) => {
    console.log('CursorWorkspace: handleFolderUpload called with', files.length, 'files')
    if (!files || files.length === 0) return

    try {
      const fileTree = await buildFileTree(files)
      console.log('Built file tree:', fileTree)
      setProjectTree(fileTree)
      setIsProjectLoaded(true)
      
      // Auto-open the first file if available
      const firstFile = findFirstFile(fileTree)
      if (firstFile) {
        console.log('Opening first file:', firstFile.name)
        openFile(firstFile)
      }
      
      console.log('✅ Folder upload completed successfully!')
      
      // Call the analysis completion callback
      if (onAnalysisComplete) {
        onAnalysisComplete({ filesLoaded: files.length, projectName: 'Uploaded Project' })
      }
    } catch (error) {
      console.error('Error processing folder upload:', error)
    }
  }

  const handleFilesUpload = async (files: FileList) => {
    console.log('CursorWorkspace: handleFilesUpload called with', files.length, 'files')
    if (!files || files.length === 0) return

    try {
      const fileTree = await buildFileTree(files)
      console.log('Built file tree:', fileTree)
      setProjectTree(fileTree)
      setIsProjectLoaded(true)
      
      // Auto-open the first file if available
      const firstFile = findFirstFile(fileTree)
      if (firstFile) {
        console.log('Opening first file:', firstFile.name)
        openFile(firstFile)
      }
      
      // Call the analysis completion callback
      if (onAnalysisComplete) {
        onAnalysisComplete({ filesLoaded: files.length, projectName: 'Uploaded Files' })
      }
    } catch (error) {
      console.error('Error processing files upload:', error)
    }
  }

  const buildFileTree = async (files: FileList): Promise<FileNode[]> => {
    console.log('Building file tree from', files.length, 'files')
    const tree: { [key: string]: FileNode } = {}
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      console.log(`Processing file ${i + 1}/${files.length}:`, file.name, 'Path:', file.webkitRelativePath || 'no path')
      
      try {
        // Use webkitRelativePath if available, otherwise just use the file name
        const relativePath = file.webkitRelativePath || file.name
        const pathParts = relativePath.split('/').filter(part => part.length > 0)
        console.log('Path parts:', pathParts)
        
        const content = await readFileContent(file)
        console.log('Content read, length:', content.length)
        
        let currentLevel = tree
        let currentPath = ''
        
        for (let j = 0; j < pathParts.length; j++) {
          const part = pathParts[j]
          currentPath = currentPath ? `${currentPath}/${part}` : part
          
          if (j === pathParts.length - 1) {
            // It's a file
            currentLevel[part] = {
              id: currentPath,
              name: part,
              type: 'file',
              path: currentPath,
              content,
              size: file.size,
              lastModified: new Date(file.lastModified),
              language: getLanguageFromExtension(part)
            }
            console.log('Added file:', part)
          } else {
            // It's a folder
            if (!currentLevel[part]) {
              currentLevel[part] = {
                id: currentPath,
                name: part,
                type: 'folder',
                path: currentPath,
                children: [],
                isOpen: j === 0 // Auto-open root folders
              }
              console.log('Created folder:', part)
            }
            // Ensure children exists and cast to any for dynamic access
            if (!currentLevel[part].children) {
              currentLevel[part].children = []
            }
            currentLevel = currentLevel[part].children as any
          }
        }
      } catch (error) {
        console.error('Error processing file:', file.name, error)
        // Continue with next file instead of failing completely
      }
    }
    
    console.log('Raw tree structure:', tree)
    const result = Object.values(tree).map(convertToTree)
    console.log('Final file tree:', result)
    return result
  }

  const convertToTree = (node: any): FileNode => {
    if (node.type === 'folder' && node.children) {
      const children = Object.values(node.children).map(convertToTree)
      return { ...node, children: children.sort((a, b) => {
        if (a.type !== b.type) return a.type === 'folder' ? -1 : 1
        return a.name.localeCompare(b.name)
      })}
    }
    return node
  }

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      console.log('Reading file content for:', file.name, 'Size:', file.size, 'Type:', file.type)
      
      // Skip very large files
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        console.log('File too large, skipping content read')
        resolve('// File too large to display')
        return
      }
      
      const reader = new FileReader()
      
      reader.onload = (e) => {
        try {
          const result = e.target?.result as string
          console.log('File read successfully, content length:', result?.length || 0)
          resolve(result || '')
        } catch (error) {
          console.log('Error reading file content, using fallback')
          resolve('// Error reading file content')
        }
      }
      
      reader.onerror = (error) => {
        console.error('FileReader error:', error)
        resolve('// Error reading file')
      }
      
      reader.onabort = () => {
        console.log('File read aborted')
        resolve('// File read aborted')
      }
      
      // Set a timeout to prevent hanging
      const timeout = setTimeout(() => {
        reader.abort()
        resolve('// File read timeout')
      }, 5000) // 5 second timeout
      
      reader.onloadend = () => {
        clearTimeout(timeout)
      }
      
      if (isTextFile(file.name)) {
        console.log('Reading as text file')
        reader.readAsText(file)
      } else {
        console.log('Binary file detected, using placeholder')
        clearTimeout(timeout)
        resolve('// Binary file - content not displayed')
      }
    })
  }

  const isTextFile = (filename: string): boolean => {
    const textExtensions = [
      '.js', '.jsx', '.ts', '.tsx', '.py', '.html', '.css', '.scss', '.sass',
      '.json', '.xml', '.yaml', '.yml', '.md', '.txt', '.gitignore', '.env',
      '.sql', '.php', '.rb', '.go', '.rs', '.java', '.c', '.cpp', '.h', '.cs'
    ]
    return textExtensions.some(ext => filename.toLowerCase().endsWith(ext)) ||
           !filename.includes('.')
  }

  const getLanguageFromExtension = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase()
    const langMap: { [key: string]: string } = {
      'js': 'javascript', 'jsx': 'javascript', 'ts': 'typescript', 'tsx': 'typescript',
      'py': 'python', 'html': 'html', 'css': 'css', 'scss': 'scss', 'sass': 'sass',
      'json': 'json', 'xml': 'xml', 'yaml': 'yaml', 'yml': 'yaml', 'md': 'markdown',
      'sql': 'sql', 'php': 'php', 'rb': 'ruby', 'go': 'go', 'rs': 'rust',
      'java': 'java', 'c': 'c', 'cpp': 'cpp', 'cs': 'csharp'
    }
    return langMap[ext || ''] || 'text'
  }

  const findFirstFile = (nodes: FileNode[]): FileNode | null => {
    for (const node of nodes) {
      if (node.type === 'file') return node
      if (node.children) {
        const found = findFirstFile(node.children)
        if (found) return found
      }
    }
    return null
  }

  const toggleFolder = (folderId: string) => {
    const updateNode = (nodes: FileNode[]): FileNode[] => {
      return nodes.map(node => {
        if (node.id === folderId && node.type === 'folder') {
          return { ...node, isOpen: !node.isOpen }
        }
        if (node.children) {
          return { ...node, children: updateNode(node.children) }
        }
        return node
      })
    }
    setProjectTree(updateNode(projectTree))
  }

  const openFile = (file: FileNode) => {
    setActiveFile(file)
    if (!openTabs.find(tab => tab.id === file.id)) {
      setOpenTabs(prev => [...prev, file])
    }
  }

  const closeTab = (fileId: string) => {
    setOpenTabs(prev => prev.filter(tab => tab.id !== fileId))
    if (activeFile?.id === fileId) {
      const remainingTabs = openTabs.filter(tab => tab.id !== fileId)
      setActiveFile(remainingTabs.length > 0 ? remainingTabs[remainingTabs.length - 1] : null)
    }
  }

  const getFileIcon = (node: FileNode) => {
    if (node.type === 'folder') {
      return node.isOpen ? <FolderOpen size={16} /> : <Folder size={16} />
    }
    
    const ext = node.name.split('.').pop()?.toLowerCase()
    switch (ext) {
      case 'js':
      case 'jsx':
      case 'ts':
      case 'tsx':
        return <Code size={16} className="text-yellow-400" />
      case 'py':
        return <Code size={16} className="text-blue-400" />
      case 'html':
        return <FileText size={16} className="text-orange-400" />
      case 'css':
      case 'scss':
      case 'sass':
        return <FileText size={16} className="text-blue-500" />
      case 'json':
        return <Database size={16} className="text-green-400" />
      case 'md':
        return <FileText size={16} className="text-gray-400" />
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'svg':
        return <Image size={16} className="text-purple-400" />
      default:
        return <File size={16} />
    }
  }

  return (
    <div className="cursor-workspace">
      {!isProjectLoaded ? (
        <CursorDragDrop 
          onFolderUploaded={handleFolderUpload}
          onFilesUploaded={handleFilesUpload}
        />
      ) : (
        <div className="workspace-layout">
          {/* Sidebar */}
          <div className="sidebar" style={{ width: sidebarWidth }}>
            <div className="sidebar-header">
              <div className="project-title">
                <FolderOpen size={16} />
                <span>PROJECT EXPLORER</span>
              </div>
              <div className="sidebar-actions">
                <button className="action-btn">
                  <Plus size={14} />
                </button>
                <button className="action-btn">
                  <Search size={14} />
                </button>
                <button className="action-btn">
                  <MoreHorizontal size={14} />
                </button>
              </div>
            </div>
            
            <div className="search-box">
              <Search size={14} />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="file-tree">
              <FileTreeRenderer 
                nodes={projectTree} 
                onToggleFolder={toggleFolder}
                onOpenFile={openFile}
                activeFileId={activeFile?.id}
                searchTerm={searchTerm}
                getFileIcon={getFileIcon}
              />
            </div>
          </div>
          
          {/* Main Editor Area */}
          <div className="main-editor-area">
            <div className="tab-bar">
              {openTabs.map(tab => (
                <div 
                  key={tab.id}
                  className={`tab ${activeFile?.id === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveFile(tab)}
                >
                  {getFileIcon(tab)}
                  <span>{tab.name}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      closeTab(tab.id)
                    }}
                    className="close-tab"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="editor-content">
              {activeFile ? (
                <CursorEditor file={activeFile} />
              ) : (
                <div className="no-file-open">
                  <Code size={48} />
                  <h3>No file open</h3>
                  <p>Select a file from the explorer to start editing</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      
      <style jsx>{`
        .cursor-workspace {
          height: 600px;
          background: #1e1e1e;
          border-radius: 12px;
          overflow: hidden;
          color: #d4d4d4;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .workspace-welcome {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #252526 0%, #1e1e1e 100%);
        }

        .welcome-content {
          text-align: center;
          max-width: 400px;
          padding: 2rem;
        }

        .welcome-icon {
          color: #569cd6;
          margin-bottom: 1.5rem;
        }

        .welcome-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .welcome-content p {
          color: #8c8c8c;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .upload-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .open-folder-btn, .upload-files-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: #007acc;
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .open-folder-btn:hover, .upload-files-btn:hover {
          background: #005a9e;
        }

        .recent-projects {
          border-top: 1px solid #3e3e42;
          padding-top: 1.5rem;
        }

        .recent-projects h3 {
          font-size: 0.875rem;
          color: #8c8c8c;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          font-weight: 600;
        }

        .recent-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
          color: #8c8c8c;
          font-size: 0.875rem;
        }

        .workspace-layout {
          height: 100%;
          display: flex;
        }

        .sidebar {
          background: #252526;
          border-right: 1px solid #3e3e42;
          display: flex;
          flex-direction: column;
          min-width: 200px;
          max-width: 400px;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: #2d2d30;
          border-bottom: 1px solid #3e3e42;
        }

        .project-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #cccccc;
          text-transform: uppercase;
        }

        .sidebar-actions {
          display: flex;
          gap: 4px;
        }

        .action-btn {
          background: none;
          border: none;
          color: #cccccc;
          padding: 4px;
          border-radius: 3px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .action-btn:hover {
          background: #3e3e42;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #3c3c3c;
          border-bottom: 1px solid #3e3e42;
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: #d4d4d4;
          font-size: 13px;
          flex: 1;
        }

        .search-box input::placeholder {
          color: #8c8c8c;
        }

        .file-tree {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0;
        }

        .main-editor-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #1e1e1e;
        }

        .tab-bar {
          display: flex;
          background: #2d2d30;
          border-bottom: 1px solid #3e3e42;
          overflow-x: auto;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #2d2d30;
          border-right: 1px solid #3e3e42;
          cursor: pointer;
          font-size: 13px;
          color: #cccccc;
          transition: background 0.2s;
          min-width: 120px;
          position: relative;
        }

        .tab:hover {
          background: #37373d;
        }

        .tab.active {
          background: #1e1e1e;
          color: #ffffff;
          border-bottom: 2px solid #007acc;
        }

        .close-tab {
          background: none;
          border: none;
          color: #8c8c8c;
          padding: 2px;
          border-radius: 2px;
          cursor: pointer;
          margin-left: auto;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .tab:hover .close-tab {
          opacity: 1;
        }

        .close-tab:hover {
          background: #e74c3c;
          color: white;
        }

        .editor-content {
          flex: 1;
          overflow: hidden;
        }

        .no-file-open {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #8c8c8c;
          text-align: center;
        }

        .no-file-open h3 {
          margin: 1rem 0 0.5rem;
          color: #cccccc;
        }
      `}</style>
    </div>
  )
}

export default CursorWorkspace