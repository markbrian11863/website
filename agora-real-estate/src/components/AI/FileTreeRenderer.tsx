import React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

interface FileNode {
  id: string
  name: string
  type: 'file' | 'folder'
  path: string
  content?: string
  children?: FileNode[]
  isOpen?: boolean
}

interface FileTreeRendererProps {
  nodes: FileNode[]
  onToggleFolder: (folderId: string) => void
  onOpenFile: (file: FileNode) => void
  activeFileId?: string
  searchTerm: string
  getFileIcon: (node: FileNode) => React.ReactNode
  level?: number
}

export const FileTreeRenderer: React.FC<FileTreeRendererProps> = ({
  nodes, onToggleFolder, onOpenFile, activeFileId, searchTerm, getFileIcon, level = 0
}) => {
  const filteredNodes = nodes.filter(node => {
    if (!searchTerm) return true
    if (node.name.toLowerCase().includes(searchTerm.toLowerCase())) return true
    if (node.type === 'folder' && node.children) {
      return hasMatchingChild(node.children, searchTerm)
    }
    return false
  })

  const hasMatchingChild = (children: FileNode[], term: string): boolean => {
    return children.some(child => {
      if (child.name.toLowerCase().includes(term.toLowerCase())) return true
      if (child.type === 'folder' && child.children) {
        return hasMatchingChild(child.children, term)
      }
      return false
    })
  }

  return (
    <div className="file-tree-level">
      {filteredNodes.map(node => (
        <div key={node.id} className="tree-node">
          <div 
            className={`tree-item ${node.type === 'file' && activeFileId === node.id ? 'active' : ''}`}
            style={{ paddingLeft: `${level * 12 + 8}px` }}
            onClick={() => {
              if (node.type === 'folder') {
                onToggleFolder(node.id)
              } else {
                onOpenFile(node)
              }
            }}
          >
            {node.type === 'folder' && (
              <span className="folder-chevron">
                {node.isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              </span>
            )}
            <span className="file-icon">
              {getFileIcon(node)}
            </span>
            <span className="file-name">{node.name}</span>
          </div>
          
          {node.type === 'folder' && node.isOpen && node.children && (
            <FileTreeRenderer 
              nodes={node.children}
              onToggleFolder={onToggleFolder}
              onOpenFile={onOpenFile}
              activeFileId={activeFileId}
              searchTerm={searchTerm}
              getFileIcon={getFileIcon}
              level={level + 1}
            />
          )}
        </div>
      ))}
      
      <style jsx>{`
        .file-tree-level {
          user-select: none;
        }

        .tree-item {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          cursor: pointer;
          font-size: 13px;
          color: #cccccc;
          transition: background 0.2s;
          border-radius: 3px;
          margin: 0 4px;
        }

        .tree-item:hover {
          background: #2a2d2e;
        }

        .tree-item.active {
          background: #37373d;
          color: #ffffff;
        }

        .folder-chevron {
          width: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8c8c8c;
        }

        .file-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
        }

        .file-name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }
      `}</style>
    </div>
  )
}