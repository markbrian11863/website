import React, { useState, useRef } from 'react'
import { Upload, Camera, Image, X, Zap, Eye, Code, Sparkles } from 'lucide-react'
import { showSuccess, showError } from '../../utils/notifications'

interface ImageUploaderProps {
  onImageUpload: (file: File, source: 'file' | 'camera') => void
  onImageAnalyze: (imageUrl: string) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, onImageAnalyze }) => {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<Array<{
    id: string
    url: string
    name: string
    size: number
    source: 'file' | 'camera'
  }>>([])
  const [isProcessing, setIsProcessing] = useState(false)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFiles = (files: FileList) => {
    const allFiles = Array.from(files)
    
    if (allFiles.length === 0) {
      alert('No files selected. Please select any type of file.')
      return
    }

    if (allFiles.length > 10) {
      alert('Maximum 10 files allowed at once.')
      return
    }

    allFiles.forEach(file => {
      processImage(file, 'file')
    })
  }

  const processImage = (file: File, source: 'file' | 'camera') => {
    // Accept all file types - no longer restricted to images

    // Validate file size (max 50MB for any file type)
    const maxSize = 50 * 1024 * 1024
    if (file.size > maxSize) {
      showError('File size too large. Please select a file under 50MB.')
      return
    }

    setIsProcessing(true)
    
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const imageUrl = e.target?.result as string
        const newImage = {
          id: Date.now().toString() + Math.random().toString(36),
          url: imageUrl,
          name: file.name,
          size: file.size,
          source
        }
        
        setUploadedImages(prev => [...prev, newImage])
        onImageUpload(file, source)
        showSuccess(`File "${file.name}" uploaded successfully!`)
        setIsProcessing(false)
      } catch (error) {
        console.error('Error processing file:', error)
        showError('Error processing file. Please try again.')
        setIsProcessing(false)
      }
    }
    
    reader.onerror = () => {
      console.error('Error reading file')
      showError('Error reading file. Please try again.')
      setIsProcessing(false)
    }
    
    reader.readAsDataURL(file)
  }

  const removeImage = (id: string) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id))
  }

  const analyzeImage = (imageUrl: string) => {
    onImageAnalyze(imageUrl)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="image-uploader">
      <div className="upload-methods">
        <h3>AI Image Analysis</h3>
        <p>Upload images or take photos for AI-powered analysis and code generation</p>
        
        <div className="upload-buttons">
          <button 
            className="upload-btn file-upload"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={24} />
            Upload Files
          </button>
          
          <button 
            className="upload-btn camera-upload"
            onClick={() => cameraInputRef.current?.click()}
          >
            <Camera size={24} />
            Take Photo
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="*/*"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          style={{ display: 'none' }}
        />
        
        <input
          ref={cameraInputRef}
          type="file"
          accept="*/*"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          style={{ display: 'none' }}
        />

        <div 
          className={`drop-zone ${dragActive ? 'active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Image size={48} />
          <p>Drag and drop images here</p>
          <span>Supports all file types (Max 50MB each)</span>
        </div>
      </div>

      {isProcessing && (
        <div className="processing-indicator">
          <Sparkles size={24} className="spinning" />
          <span>Processing image...</span>
        </div>
      )}

      {uploadedImages.length > 0 && (
        <div className="uploaded-images">
          <h4>Uploaded Images ({uploadedImages.length})</h4>
          <div className="images-grid">
            {uploadedImages.map((image) => (
              <div key={image.id} className="image-card">
                <div className="image-preview">
                  <img src={image.url} alt={image.name} />
                  <div className="image-overlay">
                    <button 
                      className="analyze-btn"
                      onClick={() => analyzeImage(image.url)}
                    >
                      <Zap size={16} />
                      Analyze
                    </button>
                    <button 
                      className="view-btn"
                      onClick={() => window.open(image.url, '_blank')}
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </div>
                </div>
                
                <div className="image-info">
                  <h5>{image.name}</h5>
                  <div className="image-meta">
                    <span className={`source-badge ${image.source}`}>
                      {image.source === 'camera' ? '📷' : '📁'} {image.source}
                    </span>
                    <span className="file-size">{formatFileSize(image.size)}</span>
                  </div>
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => removeImage(image.id)}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .image-uploader {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .upload-methods h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }

        .upload-methods p {
          color: #718096;
          margin-bottom: 2rem;
        }

        .upload-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .upload-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .file-upload {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .file-upload:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .camera-upload {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .camera-upload:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .drop-zone {
          border: 3px dashed #e2e8f0;
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #718096;
        }

        .drop-zone.active {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
          color: #ff6b6b;
        }

        .drop-zone:hover {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.02);
        }

        .drop-zone p {
          margin: 1rem 0 0.5rem;
          font-weight: 500;
          font-size: 1.125rem;
        }

        .drop-zone span {
          font-size: 0.875rem;
          opacity: 0.7;
        }

        .processing-indicator {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .spinning {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .uploaded-images h4 {
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .image-card {
          position: relative;
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .image-card:hover {
          transform: translateY(-5px);
        }

        .image-preview {
          position: relative;
          height: 150px;
          overflow: hidden;
        }

        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-card:hover .image-overlay {
          opacity: 1;
        }

        .analyze-btn, .view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .analyze-btn {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
        }

        .view-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .image-info {
          padding: 1rem;
        }

        .image-info h5 {
          margin: 0 0 0.5rem;
          font-weight: 500;
          color: #2d3748;
          font-size: 0.875rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .image-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
        }

        .source-badge {
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 500;
        }

        .source-badge.file {
          background: #e6fffa;
          color: #319795;
        }

        .source-badge.camera {
          background: #fff5f5;
          color: #e53e3e;
        }

        .file-size {
          color: #718096;
        }

        .remove-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-card:hover .remove-btn {
          opacity: 1;
        }

        .remove-btn:hover {
          background: #e53e3e;
        }

        @media (max-width: 768px) {
          .upload-buttons {
            flex-direction: column;
          }

          .images-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }

          .drop-zone {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default ImageUploader