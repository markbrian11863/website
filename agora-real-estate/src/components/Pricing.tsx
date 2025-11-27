import React from 'react'
import { Check, Star, Zap, Crown } from 'lucide-react'

interface PricingProps {
  onStartTrial?: () => void
}

const Pricing: React.FC<PricingProps> = ({ onStartTrial }) => {
  const plans = [
    {
      name: 'Free Trial',
      price: 'Free',
      period: 'for 3 weeks',
      description: 'Perfect to get started - no commitment',
      icon: <Star size={24} />,
      features: [
        'Full access for 21 days',
        'Unlimited AI completions',
        'All premium features',
        'Advanced code generation',
        'Priority support',
        'Custom themes & plugins',
        'No credit card required'
      ],
      buttonText: 'Start 3-Week Trial',
      popular: true,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Monthly Global',
      price: 'From $1',
      period: '/month',
      description: 'After free trial - affordable worldwide pricing',
      icon: <Zap size={24} />,
      features: [
        'Everything from free trial',
        'Local currency pricing',
        'KSh 100 (Kenya), ₹80 (India), ₦500 (Nigeria)',
        '$1 USD, €1 EUR, £1 GBP minimum',
        'Unlimited AI completions',
        'Advanced code generation',
        'Priority support',
        'Custom themes & plugins'
      ],
      buttonText: 'View Local Pricing',
      popular: false,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Student',
      price: 'KSh 50',
      period: '/month',
      description: 'Special rate for students with valid ID',
      icon: <Crown size={24} />,
      features: [
        'Everything in Monthly plan',
        '50% student discount',
        'Valid student ID required',
        'All premium features',
        'Priority student support',
        'Access to coding resources',
        'Career development tools',
        'Portfolio building features'
      ],
      buttonText: 'Get Student Rate',
      popular: false,
      color: 'from-purple-600 to-indigo-700'
    }
  ]

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <h2 className="section-title">Global Pricing - Local Currencies</h2>
        <p className="section-subtitle">
          Start with a full month completely free, then continue with affordable local pricing. Available in 25+ currencies worldwide.
        </p>

        <div className="pricing-toggle">
          <span className="toggle-label active">Monthly</span>
          <div className="toggle-switch">
            <input type="checkbox" id="billing-toggle" />
            <label htmlFor="billing-toggle"></label>
          </div>
          <span className="toggle-label">Annual <span className="discount">Save 20%</span></span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  Most Popular
                </div>
              )}
              
              <div className={`plan-icon bg-gradient-to-r ${plan.color}`}>
                {plan.icon}
              </div>

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  {plan.period && <span className="price-period">{plan.period}</span>}
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} plan-button`}
                onClick={() => {
                  console.log(`🎯 ${plan.buttonText} clicked!`)
                  
                  // For "Start 3-Week Trial" - instant access (free trial)
                  if (plan.buttonText === 'Start 3-Week Trial') {
                    const trialUser = {
                      id: 'trial-' + Date.now(),
                      name: 'Mark Brian',
                      email: 'trial@cursor-app.com',
                      avatar: '/mark-brian-profile.png',
                      plan: 'free' as const,
                      subscription: {
                        status: 'trial' as const,
                        nextBilling: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                        amount: 'Free Trial (21 days)',
                        planType: 'Free Trial'
                      }
                    }
                    
                    localStorage.setItem('cursor_user', JSON.stringify(trialUser))
                    localStorage.setItem('cursor_user_created', 'true')
                    console.log('✅ Free trial account created - redirecting to app...')
                    
                    window.location.href = '#ai-studio'
                    setTimeout(() => {
                      const aiStudioSection = document.getElementById('ai-studio')
                      if (aiStudioSection) {
                        aiStudioSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 500)
                    setTimeout(() => window.location.reload(), 1000)
                  } 
                  // For "View Local Pricing" and "Get Student Rate" - show signup form
                  else {
                    console.log(`Opening signup form for ${plan.name} plan verification...`)
                    if (onStartTrial) {
                      onStartTrial()
                    } else {
                      const event = new CustomEvent('openAuthModal', { 
                        detail: { 
                          tab: 'signup',
                          planType: plan.name,
                          planButton: plan.buttonText 
                        } 
                      })
                      window.dispatchEvent(event)
                    }
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>✅ <strong>3 weeks FREE trial</strong> • ✅ <strong>No credit card required</strong> • ✅ <strong>Cancel anytime</strong> • 📱 <strong>M-Pesa Paybill: 200999</strong> • 💳 <strong>Account: 0109060077244</strong></p>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .pricing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .toggle-label {
          font-weight: 500;
          transition: opacity 0.3s ease;
        }

        .toggle-label.active {
          opacity: 1;
        }

        .toggle-label:not(.active) {
          opacity: 0.7;
        }

        .discount {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          margin-left: 0.5rem;
        }

        .toggle-switch {
          position: relative;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-switch label {
          display: block;
          width: 60px;
          height: 30px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          cursor: pointer;
          position: relative;
          transition: background 0.3s ease;
        }

        .toggle-switch label::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .toggle-switch input:checked + label::after {
          transform: translateX(30px);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          color: #1a365d;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .pricing-card.popular {
          transform: scale(1.05);
          border: 3px solid #ffa726;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .plan-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 15px;
          color: white;
          margin-bottom: 1.5rem;
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .plan-description {
          color: #718096;
          margin-bottom: 1.5rem;
        }

        .plan-price {
          margin-bottom: 2rem;
        }

        .price-amount {
          font-size: 3rem;
          font-weight: 700;
          color: #1a365d;
        }

        .price-period {
          color: #718096;
          font-size: 1rem;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
          text-align: left;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #4a5568;
        }

        .feature-check {
          color: #48bb78;
          flex-shrink: 0;
        }

        .plan-button {
          width: 100%;
          padding: 1rem 2rem;
          font-weight: 600;
        }

        .pricing-note {
          text-align: center;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card.popular {
            transform: none;
          }

          .pricing-toggle {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Pricing