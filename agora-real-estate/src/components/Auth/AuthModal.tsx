import React, { useState } from 'react'
import { X, Eye, EyeOff, Mail, Lock, User, Github, Chrome } from 'lucide-react'
import { useUser } from './UserContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: 'login' | 'signup'
  planType?: string
  planButton?: string
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialTab = 'login', planType, planButton }) => {
  const { login } = useUser()
  const [activeTab, setActiveTab] = useState(initialTab)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false,
    // Additional fields for special plans
    studentId: '',
    university: '',
    country: '',
    phone: '',
    organization: ''
  })

  // Reset form and error state when modal opens
  React.useEffect(() => {
    console.log('🎯 AuthModal useEffect triggered. isOpen:', isOpen, 'initialTab:', initialTab)
    if (isOpen) {
      console.log('✅ AuthModal is opening with tab:', initialTab)
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        agreeToTerms: false,
        studentId: '',
        university: '',
        country: '',
        phone: '',
        organization: ''
      })
      setError('')
      setIsLoading(false)
      setActiveTab(initialTab) // Ensure tab is set correctly
    }
  }, [isOpen, initialTab])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  if (!isOpen) {
    console.log('🚫 AuthModal not rendering - isOpen is false')
    return null
  }
  
  console.log('🎯 AuthModal rendering with activeTab:', activeTab, 'isOpen:', isOpen)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      if (activeTab === 'login') {
        // Mock login - validate basic requirements
        if (!formData.email || !formData.password) {
          setError('Please fill in all required fields.')
          setIsLoading(false)
          return
        }

        setTimeout(() => {
          try {
            const mockUser = {
              id: '1',
              name: 'Mark Brian',
              email: formData.email,
              avatar: '/mark-brian-profile.png',
              plan: 'pro' as const,
              subscription: {
                status: 'active' as const,
                nextBilling: '2024-02-15',
                amount: '$1.00'
              }
            }
            
            // Use UserContext login instead of manual localStorage + reload
            login(mockUser)
            setIsLoading(false)
            onClose()
          } catch (loginError) {
            console.error('Login error:', loginError)
            setError('Login failed. Please try again.')
            setIsLoading(false)
          }
        }, 1000)
      } else {
        // Mock signup - validate requirements
        // Validation for required fields
        const requiredFields = ['email', 'password', 'firstName', 'lastName']
        
        // Add additional required fields based on plan type
        if (planType === 'Student') {
          requiredFields.push('studentId', 'university')
        } else if (planType === 'Monthly Global') {
          requiredFields.push('country', 'phone')
        }
        
        const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
        if (missingFields.length > 0) {
          setError(`Please fill in all required fields: ${missingFields.join(', ')}.`)
          setIsLoading(false)
          return
        }

        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match.')
          setIsLoading(false)
          return
        }

        if (!formData.agreeToTerms) {
          setError('Please agree to the Terms of Service.')
          setIsLoading(false)
          return
        }

        // Additional validation for student ID
        if (planType === 'Student' && formData.studentId.length < 5) {
          setError('Please provide a valid student ID.')
          setIsLoading(false)
          return
        }

        setTimeout(() => {
          try {
            const trialEndDate = new Date()
            trialEndDate.setDate(trialEndDate.getDate() + 21) // 3 weeks trial

            const mockUser = {
              id: String(Date.now()),
              name: 'Mark Brian',
              email: formData.email,
              avatar: '/mark-brian-profile.png',
              plan: 'free' as const,
              subscription: {
                status: 'trial' as const,
                nextBilling: trialEndDate.toISOString().split('T')[0],
                amount: 'Free Trial (21 days)'
              }
            }
            
            // Use UserContext login instead of manual localStorage + reload
            login(mockUser)
            setIsLoading(false)
            onClose()
          } catch (signupError) {
            console.error('Signup error:', signupError)
            setError('Account creation failed. Please try again.')
            setIsLoading(false)
          }
        }, 1000)
      }
    } catch (err) {
      console.error('Authentication error:', err)
      setError('Authentication failed. Please try again.')
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true)
    setTimeout(() => {
      try {
        const trialEndDate = new Date()
        trialEndDate.setDate(trialEndDate.getDate() + 21) // 3 weeks trial

        const mockUser = {
          id: provider + '-' + Date.now(),
          name: 'Mark Brian',
          email: `user@${provider}.com`,
          avatar: '/mark-brian-profile.png',
          plan: 'free' as const,
          subscription: {
            status: 'trial' as const,
            nextBilling: trialEndDate.toISOString().split('T')[0],
            amount: 'Free Trial (21 days)'
          }
        }
        
        // Use UserContext login instead of manual localStorage + reload
        login(mockUser)
        setIsLoading(false)
        onClose()
      } catch (socialLoginError) {
        console.error('Social login error:', socialLoginError)
        setError(`${provider} login failed. Please try again.`)
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="auth-header">
          <h2>{activeTab === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
          <p>
            {activeTab === 'login' 
              ? 'Sign in to access your AI coding assistant' 
              : 'Join thousands of developers using Cursor AI'
            }
          </p>
        </div>

        <div className="auth-tabs">
          <button 
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Sign In
          </button>
          <button 
            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="social-auth">
          <button className="social-button google" onClick={() => handleSocialLogin('google')}>
            <Chrome size={20} />
            Continue with Google
          </button>
          <button className="social-button github" onClick={() => handleSocialLogin('github')}>
            <Github size={20} />
            Continue with GitHub
          </button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          {activeTab === 'signup' && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <div className="input-wrapper">
                  <User size={20} className="input-icon" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="John"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <div className="input-wrapper">
                  <User size={20} className="input-icon" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <Mail size={20} className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {activeTab === 'signup' && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          )}

          {activeTab === 'signup' && (
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                />
                <span className="checkmark"></span>
                I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
              </label>
            </div>
          )}

          <button type="submit" className="auth-submit" disabled={isLoading}>
            {isLoading ? (
              <span>
                {activeTab === 'login' ? 'Signing In...' : 'Creating Account...'}
              </span>
            ) : (
              activeTab === 'login' ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>

        {activeTab === 'login' && (
          <div className="auth-links">
            <a href="#forgot-password" className="forgot-password">
              Forgot your password?
            </a>
          </div>
        )}

        <div className="auth-footer">
          <p>
            {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button"
              className="switch-auth"
              onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
            >
              {activeTab === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transform: scale(1);
          animation: slideIn 0.3s ease;
          z-index: 10000;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #718096;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: #f7fafc;
          color: #2d3748;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: #718096;
          font-size: 1rem;
        }

        .auth-tabs {
          display: flex;
          background: #f7fafc;
          border-radius: 12px;
          margin-bottom: 2rem;
          padding: 4px;
        }

        .tab-button {
          flex: 1;
          padding: 12px 24px;
          border: none;
          background: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button.active {
          background: white;
          color: #ff6b6b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .social-auth {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 24px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .social-button:hover {
          border-color: #ff6b6b;
          background: #fff5f5;
        }

        .social-button.google {
          color: #4285f4;
        }

        .social-button.github {
          color: #333;
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 2rem 0;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e2e8f0;
        }

        .divider span {
          background: white;
          padding: 0 1rem;
          color: #718096;
          font-size: 0.875rem;
        }

        .auth-form {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: #718096;
          z-index: 1;
        }

        .input-wrapper input {
          width: 100%;
          padding: 12px 12px 12px 48px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #ff6b6b;
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #718096;
          cursor: pointer;
          padding: 4px;
        }

        .checkbox-group {
          margin-bottom: 2rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .checkbox-label input[type="checkbox"] {
          display: none;
        }

        .checkmark {
          width: 20px;
          height: 20px;
          border: 2px solid #e2e8f0;
          border-radius: 4px;
          flex-shrink: 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .checkbox-label input[type="checkbox"]:checked + .checkmark {
          background: #ff6b6b;
          border-color: #ff6b6b;
        }

        .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
          content: '✓';
          position: absolute;
          top: -2px;
          left: 3px;
          color: white;
          font-size: 14px;
          font-weight: bold;
        }

        .checkbox-label a {
          color: #ff6b6b;
          text-decoration: none;
        }

        .checkbox-label a:hover {
          text-decoration: underline;
        }

        .auth-submit {
          width: 100%;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .auth-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .error-message {
          background: #fed7d7;
          color: #c53030;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          text-align: center;
        }

        .auth-links {
          text-align: center;
          margin-bottom: 1rem;
        }

        .forgot-password {
          color: #ff6b6b;
          text-decoration: none;
          font-size: 0.875rem;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        .auth-footer {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .auth-footer p {
          color: #718096;
          margin: 0;
        }

        .switch-auth {
          background: none;
          border: none;
          color: #ff6b6b;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
        }

        .switch-auth:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .modal-content {
            padding: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .auth-header h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AuthModal