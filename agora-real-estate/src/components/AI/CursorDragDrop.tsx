import React, { useState, useRef, useCallback } from 'react'
import { FolderOpen, Upload, File, Code } from 'lucide-react'

interface CursorDragDropProps {
  onFilesUploaded: (files: FileList) => void
  onFolderUploaded: (files: FileList) => void
}

export const CursorDragDrop: React.FC<CursorDragDropProps> = ({ 
  onFilesUploaded, 
  onFolderUploaded 
}) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [dragMessage, setDragMessage] = useState('Drop files or folders here')
  const [isProcessing, setIsProcessing] = useState(false)
  const folderInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(true)
    
    const items = Array.from(e.dataTransfer.items)
    const hasFolder = items.some(item => 
      item.kind === 'file' && item.webkitGetAsEntry()?.isDirectory
    )
    
    if (hasFolder) {
      setDragMessage('Drop folder to open project workspace')
    } else {
      setDragMessage('Drop files to analyze and edit')
    }
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Only hide drag overlay if leaving the main drop zone
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false)
      setDragMessage('Drop files or folders here')
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
    setIsProcessing(true)
    setDragMessage('Processing files...')

    console.log('Drop event triggered!')
    console.log('DataTransfer items:', e.dataTransfer.items)
    console.log('DataTransfer files:', e.dataTransfer.files)

    try {
      const items = Array.from(e.dataTransfer.items)
      const files: File[] = []

      // Check if we have folders by looking at webkitGetAsEntry
      let hasFolder = false
      for (const item of items) {
        if (item.kind === 'file') {
          const entry = item.webkitGetAsEntry()
          console.log('Entry:', entry)
          if (entry?.isDirectory) {
            hasFolder = true
            break
          }
        }
      }

      console.log('Has folder:', hasFolder)

      if (hasFolder) {
        // Handle folder drop
        console.log('Processing folder drop...')
        for (const item of items) {
          if (item.kind === 'file') {
            const entry = item.webkitGetAsEntry()
            if (entry?.isDirectory) {
              console.log('Reading directory:', entry.name)
              const folderFiles = await readDirectoryRecursively(entry as FileSystemDirectoryEntry)
              console.log('Folder files found:', folderFiles.length)
              files.push(...folderFiles)
            } else if (entry?.isFile) {
              // Also include individual files in folder drops
              const file = await getFileFromEntry(entry as FileSystemFileEntry)
              if (file) files.push(file)
            }
          }
        }
        
        if (files.length > 0) {
          console.log('Calling onFolderUploaded with', files.length, 'files')
          setDragMessage(`Processing ${files.length} files...`)
          const fileList = createFileList(files)
          onFolderUploaded(fileList)
        } else {
          console.log('No files found in folder')
          setDragMessage('No supported files found in folder')
        }
      } else {
        // Handle individual files
        console.log('Processing individual files...')
        const droppedFiles = Array.from(e.dataTransfer.files)
        console.log('Individual files:', droppedFiles)
        
        if (droppedFiles.length > 0) {
          console.log('Calling onFilesUploaded with', droppedFiles.length, 'files')
          setDragMessage(`Processing ${droppedFiles.length} files...`)
          onFilesUploaded(e.dataTransfer.files)
        } else {
          console.log('No files to upload')
          setDragMessage('No files to upload')
        }
      }
    } catch (error) {
      console.error('Error processing dropped files:', error)
      setDragMessage('Error processing files')
    }

    // Reset message and processing state
    setTimeout(() => {
      setDragMessage('Drop files or folders here')
      setIsProcessing(false)
    }, 3000)
  }, [onFilesUploaded, onFolderUploaded])

  const readDirectoryRecursively = async (dirEntry: FileSystemDirectoryEntry): Promise<File[]> => {
    const files: File[] = []
    
    return new Promise((resolve) => {
      const reader = dirEntry.createReader()
      
      const readEntries = () => {
        reader.readEntries(async (entries) => {
          if (entries.length === 0) {
            resolve(files)
            return
          }

          for (const entry of entries) {
            if (entry.isFile) {
              const file = await getFileFromEntry(entry as FileSystemFileEntry)
              if (file) files.push(file)
            } else if (entry.isDirectory) {
              const subFiles = await readDirectoryRecursively(entry as FileSystemDirectoryEntry)
              files.push(...subFiles)
            }
          }
          
          readEntries() // Continue reading if there are more entries
        })
      }
      
      readEntries()
    })
  }

  const getFileFromEntry = (fileEntry: FileSystemFileEntry): Promise<File | null> => {
    return new Promise((resolve) => {
      fileEntry.file((file) => {
        // Add the full path to the file object
        Object.defineProperty(file, 'webkitRelativePath', {
          value: fileEntry.fullPath.substring(1) // Remove leading slash
        })
        resolve(file)
      }, () => resolve(null))
    })
  }

  const createFileList = (files: File[]): FileList => {
    const dataTransfer = new DataTransfer()
    files.forEach(file => dataTransfer.items.add(file))
    return dataTransfer.files
  }

  return (
    <div className="cursor-drag-drop">
      <div 
        className={`drop-zone ${isDragOver ? 'drag-over' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="drop-content">
          <div className="drop-icon">
            {isProcessing ? (
              <div className="processing-spinner">
                <div className="spinner"></div>
              </div>
            ) : (
              <FolderOpen size={64} />
            )}
          </div>
          
          <h2>{isProcessing ? 'Processing...' : 'Open Folder'}</h2>
          <p className="drop-main-text">
            {isProcessing ? 'Loading your files...' : 
             isDragOver ? dragMessage : 'Drag & drop a folder here to open it in Cursor AI'}
          </p>
          
          <div className="action-buttons">
            <button 
              onClick={() => folderInputRef.current?.click()}
              className="primary-button"
            >
              <FolderOpen size={20} />
              Open Folder
            </button>
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="secondary-button"
            >
              <File size={20} />
              Open Files
            </button>
          </div>
          
          <div className="supported-formats">
            <p>Supported: All code files and projects</p>
            <div className="format-badges">
              <span className="format-badge">JavaScript</span>
              <span className="format-badge">TypeScript</span>
              <span className="format-badge">React</span>
              <span className="format-badge">Python</span>
              <span className="format-badge">HTML/CSS</span>
              <span className="format-badge">JSON</span>
              <span className="format-badge">And more...</span>
            </div>
          </div>
        </div>
        
        {isDragOver && (
          <div className="drag-overlay">
            <div className="drag-indicator">
              <Upload size={48} />
              <p>{dragMessage}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Hidden file inputs */}
      <input
        ref={folderInputRef}
        type="file"
        webkitdirectory=""
        multiple
        onChange={(e) => {
          if (e.target.files) {
            onFolderUploaded(e.target.files)
          }
        }}
        style={{ display: 'none' }}
      />
      
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".js,.jsx,.ts,.tsx,.py,.html,.css,.json,.md,.txt,.php,.java,.c,.cpp,.cs,.rb,.go,.rs"
        onChange={(e) => {
          if (e.target.files) {
            onFilesUploaded(e.target.files)
          }
        }}
        style={{ display: 'none' }}
      />
      
      <style jsx>{`
        .cursor-drag-drop {
          height: 600px;
          width: 100%;
          position: relative;
          background: #1e1e1e;
          border-radius: 12px;
          overflow: hidden;
          color: #d4d4d4;
        }

        .drop-zone {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #3e3e42;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          background: linear-gradient(135deg, #252526 0%, #1e1e1e 100%);
        }

        .drop-zone.drag-over {
          border-color: #007acc;
          background: linear-gradient(135deg, #1a4a5c 0%, #1e3a44 100%);
          transform: scale(1.02);
        }

        .drop-content {
          text-align: center;
          max-width: 500px;
          padding: 2rem;
          z-index: 1;
        }

        .drop-icon {
          color: #569cd6;
          margin-bottom: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .drop-content h2 {
          font-size: 3rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .drop-main-text {
          font-size: 1.25rem;
          color: #b3b3b3;
          margin-bottom: 3rem;
          line-height: 1.5;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .primary-button, .secondary-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 140px;
          justify-content: center;
        }

        .primary-button {
          background: linear-gradient(135deg, #007acc 0%, #005a9e 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 122, 204, 0.3);
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 122, 204, 0.4);
          background: linear-gradient(135deg, #0086e6 0%, #006bb8 100%);
        }

        .secondary-button {
          background: rgba(255, 255, 255, 0.1);
          color: #cccccc;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .supported-formats {
          text-align: center;
        }

        .supported-formats p {
          color: #8c8c8c;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .format-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .format-badge {
          background: rgba(0, 122, 204, 0.2);
          color: #7db3f0;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(0, 122, 204, 0.3);
        }

        .drag-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 122, 204, 0.1);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          z-index: 10;
        }

        .drag-indicator {
          text-align: center;
          color: #ffffff;
          animation: pulse 2s infinite;
        }

        .drag-indicator p {
          margin-top: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .processing-spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(86, 156, 214, 0.3);
          border-top: 3px solid #569cd6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 768px) {
          .drop-content h2 {
            font-size: 2rem;
          }
          
          .drop-main-text {
            font-size: 1rem;
          }
          
          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .primary-button, .secondary-button {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </div>
  )
}