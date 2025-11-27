import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/Auth/UserContext'
import Header from './components/Header'
import AuthModal from './components/Auth/AuthModal'
import NavigationControls from './components/NavigationControls'
import Dashboard from './components/Dashboard'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CurrencyPricing from './components/CurrencyPricing'
import PaymentMethods from './components/PaymentMethods'
import Download from './components/Download'
import AIStudio from './components/AI/AIStudio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TeamWorkspace from './components/Collaboration/TeamWorkspace'
import EnhancedCodeCompletion from './components/AI/EnhancedCodeCompletion'
import LargeProjectManager from './components/ProjectManagement/LargeProjectManager'
import CursorIgnoreEditor from './components/ProjectManagement/CursorIgnoreEditor'
import CodeReviewRefine from './components/AI/CodeReviewRefine'
import AdvancedFeatures from './components/AdvancedFeatures'
import AnalyticsDashboard from './components/DataVisualization/AnalyticsDashboard'
import CursorAnalyzer from './components/DataVisualization/CursorAnalyzer'
import './styles/App.css'

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login')

  // Handle trial signup from Hero component
  const handleStartTrial = (planType?: string) => {
    console.log('🎯 Trial signup triggered!', planType ? `Plan: ${planType}` : '')
    setAuthModalTab('signup')
    setIsAuthModalOpen(true)
  }

  return (
    <UserProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero onStartTrial={handleStartTrial} />
                <Features />
                <Services />
                <Pricing onStartTrial={handleStartTrial} />
                <CurrencyPricing />
                <PaymentMethods />
                <AIStudio />
                <AdvancedFeatures />
                <Download />
                <Contact />
              </>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/analyzer" element={<CursorAnalyzer />} />
          </Routes>
        </main>
        <Footer />
        
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialTab={authModalTab}
        />
        
        {/* Navigation Controls */}
        <NavigationControls 
          position="floating"
          showLabels={true}
        />
      </div>
    </UserProvider>
  )
}

export default App