import React, { useState } from 'react'
import { X, Folder, Code, Globe, Smartphone, Database, Cloud, CheckCircle } from 'lucide-react'
import { showSuccess, showError } from '../utils/notifications'

interface ProjectCreatorProps {
  isOpen: boolean
  onClose: () => void
  onProjectCreated?: (project: any) => void
}

interface ProjectData {
  name: string
  description: string
  type: string
  framework: string
  language: string
  template: string
  features: string[]
  repository: string
  deployment: string
  database: string
  apiIntegration: boolean
  aiFeatures: string[]
  teamSize: string
  timeline: string
  budget: string
  priority: string
}

const ProjectCreator: React.FC<ProjectCreatorProps> = ({ isOpen, onClose, onProjectCreated }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isCreating, setIsCreating] = useState(false)
  const [projectData, setProjectData] = useState<ProjectData>({
    name: '',
    description: '',
    type: '',
    framework: '',
    language: '',
    template: '',
    features: [],
    repository: '',
    deployment: '',
    database: '',
    apiIntegration: false,
    aiFeatures: [],
    teamSize: '',
    timeline: '',
    budget: '',
    priority: 'medium'
  })

  const projectTypes = [
    { id: 'web', name: 'Web Application', icon: <Globe size={20} />, desc: 'Modern web apps with responsive design' },
    { id: 'mobile', name: 'Mobile App', icon: <Smartphone size={20} />, desc: 'Native or cross-platform mobile apps' },
    { id: 'api', name: 'API/Backend', icon: <Database size={20} />, desc: 'RESTful APIs and backend services' },
    { id: 'desktop', name: 'Desktop App', icon: <Code size={20} />, desc: 'Cross-platform desktop applications' },
    { id: 'ai', name: 'AI/ML Project', icon: <Cloud size={20} />, desc: 'Machine learning and AI projects' }
  ]

  const frameworks = {
    web: ['React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte'],
    mobile: ['React Native', 'Flutter', 'Ionic', 'Xamarin', 'Native iOS', 'Native Android'],
    api: ['Express.js', 'FastAPI', 'Django', 'Spring Boot', 'ASP.NET', 'Laravel'],
    desktop: ['Electron', 'Tauri', 'Qt', 'WPF', 'JavaFX', 'Tkinter'],
    ai: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face', 'OpenAI API']
  }

  const languages = {
    web: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Ruby', 'Go'],
    mobile: ['JavaScript', 'Dart', 'Swift', 'Kotlin', 'Java', 'C#'],
    api: ['JavaScript', 'Python', 'Java', 'C#', 'Go', 'PHP'],
    desktop: ['JavaScript', 'Python', 'C#', 'Java', 'C++', 'Rust'],
    ai: ['Python', 'R', 'JavaScript', 'Julia', 'Scala', 'C++']
  }

  const aiFeatures = [
    'Code Generation', 'Smart Autocomplete', 'Bug Detection', 'Code Review',
    'Performance Optimization', 'Documentation Generation', 'Test Generation',
    'Refactoring Suggestions', 'Security Analysis', 'API Integration'
  ]

  const handleInputChange = (field: keyof ProjectData, value: any) => {
    setProjectData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFeatureToggle = (feature: string, type: 'features' | 'aiFeatures') => {
    setProjectData(prev => ({
      ...prev,
      [type]: prev[type].includes(feature)
        ? prev[type].filter(f => f !== feature)
        : [...prev[type], feature]
    }))
  }

  const createProject = async () => {
    setIsCreating(true)
    
    try {
      // Validate required fields
      if (!projectData.name || !projectData.type || !projectData.framework) {
        showError('Please fill in all required fields')
        setIsCreating(false)
        return
      }

      // Simulate project creation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const newProject = {
        id: Date.now().toString(),
        ...projectData,
        createdAt: new Date().toISOString(),
        status: 'active',
        progress: 0
      }

      // Save to localStorage
      const existingProjects = JSON.parse(localStorage.getItem('user_projects') || '[]')
      existingProjects.push(newProject)
      localStorage.setItem('user_projects', JSON.stringify(existingProjects))

      showSuccess(`🎉 Project "${projectData.name}" created successfully!`)
      
      if (onProjectCreated) {
        onProjectCreated(newProject)
      }
      
      onClose()
      
    } catch (error) {
      console.error('Project creation error:', error)
      showError('Error creating project. Please try again.')
    } finally {
      setIsCreating(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="project-creator-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>
              <Folder className="inline mr-2" />
              Create New Project
            </h2>
            <button onClick={onClose} className="close-btn">
              <X size={24} />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="progress-steps">
            {[1, 2, 3, 4].map(step => (
              <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
                <div className="step-number">{step}</div>
                <div className="step-label">
                  {step === 1 && 'Basic Info'}
                  {step === 2 && 'Tech Stack'}
                  {step === 3 && 'Features'}
                  {step === 4 && 'Configuration'}
                </div>
              </div>
            ))}
          </div>

          <div className="modal-content">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <h3>Project Information</h3>
                
                <div className="form-group">
                  <label>Project Name *</label>
                  <input
                    type="text"
                    placeholder="My Awesome Project"
                    value={projectData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    placeholder="Describe your project..."
                    value={projectData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="form-input"
                    rows={3}
                  />
                </div>

                <div className="form-group">
                  <label>Project Type *</label>
                  <div className="type-grid">
                    {projectTypes.map(type => (
                      <div
                        key={type.id}
                        className={`type-card ${projectData.type === type.id ? 'selected' : ''}`}
                        onClick={() => handleInputChange('type', type.id)}
                      >
                        {type.icon}
                        <div className="type-info">
                          <h4>{type.name}</h4>
                          <p>{type.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Tech Stack */}
            {currentStep === 2 && (
              <div className="form-step">
                <h3>Technology Stack</h3>

                <div className="form-group">
                  <label>Framework *</label>
                  <select
                    value={projectData.framework}
                    onChange={(e) => handleInputChange('framework', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select Framework</option>
                    {projectData.type && frameworks[projectData.type as keyof typeof frameworks]?.map(fw => (
                      <option key={fw} value={fw}>{fw}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Primary Language *</label>
                  <select
                    value={projectData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select Language</option>
                    {projectData.type && languages[projectData.type as keyof typeof languages]?.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Database</label>
                  <select
                    value={projectData.database}
                    onChange={(e) => handleInputChange('database', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select Database</option>
                    <option value="postgresql">PostgreSQL</option>
                    <option value="mysql">MySQL</option>
                    <option value="mongodb">MongoDB</option>
                    <option value="sqlite">SQLite</option>
                    <option value="redis">Redis</option>
                    <option value="firebase">Firebase</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Features & AI */}
            {currentStep === 3 && (
              <div className="form-step">
                <h3>AI Features & Capabilities</h3>

                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={projectData.apiIntegration}
                      onChange={(e) => handleInputChange('apiIntegration', e.target.checked)}
                    />
                    Enable API Integration
                  </label>
                </div>

                <div className="form-group">
                  <label>AI-Powered Features</label>
                  <div className="features-grid">
                    {aiFeatures.map(feature => (
                      <div
                        key={feature}
                        className={`feature-chip ${projectData.aiFeatures.includes(feature) ? 'selected' : ''}`}
                        onClick={() => handleFeatureToggle(feature, 'aiFeatures')}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Configuration */}
            {currentStep === 4 && (
              <div className="form-step">
                <h3>Project Configuration</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Team Size</label>
                    <select
                      value={projectData.teamSize}
                      onChange={(e) => handleInputChange('teamSize', e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select Size</option>
                      <option value="solo">Solo (1 person)</option>
                      <option value="small">Small (2-5 people)</option>
                      <option value="medium">Medium (6-15 people)</option>
                      <option value="large">Large (16+ people)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Timeline</label>
                    <select
                      value={projectData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select Timeline</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="6months">6 months</option>
                      <option value="1year">1+ year</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Priority Level</label>
                  <div className="priority-options">
                    {['low', 'medium', 'high', 'urgent'].map(priority => (
                      <div
                        key={priority}
                        className={`priority-option ${projectData.priority === priority ? 'selected' : ''}`}
                        onClick={() => handleInputChange('priority', priority)}
                      >
                        <div className={`priority-dot ${priority}`}></div>
                        {priority.charAt(0).toUpperCase() + priority.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Repository URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://github.com/username/repo"
                    value={projectData.repository}
                    onChange={(e) => handleInputChange('repository', e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="modal-footer">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="btn btn-secondary"
            >
              Previous
            </button>
            
            <div className="step-info">
              Step {currentStep} of 4
            </div>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="btn btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                onClick={createProject}
                disabled={isCreating}
                className="btn btn-primary"
              >
                {isCreating ? (
                  <>
                    <CheckCircle className="animate-spin" size={16} />
                    Creating...
                  </>
                ) : (
                  'Create Project'
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
        }

        .project-creator-modal {
          background: white;
          border-radius: 16px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .modal-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 16px 16px 0 0;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          padding: 2rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
        }

        .step:not(:last-child):after {
          content: '';
          position: absolute;
          top: 15px;
          left: 60%;
          right: -40%;
          height: 2px;
          background: #e2e8f0;
          z-index: 1;
        }

        .step.active:not(:last-child):after {
          background: #667eea;
        }

        .step-number {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #e2e8f0;
          color: #718096;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .step.active .step-number {
          background: #667eea;
          color: white;
        }

        .step-label {
          font-size: 0.8rem;
          color: #718096;
          text-align: center;
        }

        .step.active .step-label {
          color: #2d3748;
          font-weight: 500;
        }

        .modal-content {
          padding: 2rem;
          min-height: 400px;
        }

        .form-step h3 {
          margin: 0 0 2rem;
          color: #2d3748;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .type-card {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .type-card:hover {
          border-color: #667eea;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
        }

        .type-card.selected {
          border-color: #667eea;
          background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
        }

        .type-info h4 {
          margin: 0 0 0.5rem;
          color: #374151;
          font-weight: 600;
        }

        .type-info p {
          margin: 0;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .feature-chip {
          background: #f1f5f9;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.75rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .feature-chip:hover {
          border-color: #667eea;
          background: #f0f4ff;
        }

        .feature-chip.selected {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .priority-options {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .priority-option {
          flex: 1;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .priority-option.selected {
          border-color: #667eea;
          background: #f0f4ff;
          color: #667eea;
        }

        .priority-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .priority-dot.low { background: #10b981; }
        .priority-dot.medium { background: #f59e0b; }
        .priority-dot.high { background: #ef4444; }
        .priority-dot.urgent { background: #8b5cf6; }

        .modal-footer {
          background: #f8fafc;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #e2e8f0;
          border-radius: 0 0 16px 16px;
        }

        .step-info {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: #e5e7eb;
          color: #374151;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #d1d5db;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .type-grid {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .priority-options {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}

export default ProjectCreator