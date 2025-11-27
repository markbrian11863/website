import React from 'react'
import { Smartphone, CreditCard, Banknote, Shield } from 'lucide-react'

const PaymentMethods: React.FC = () => {
  const paymentOptions = [
    {
      name: 'Credit/Debit Cards',
      icon: <CreditCard size={32} />,
      description: 'Visa, Mastercard, American Express worldwide',
      details: 'Secure payment in any currency • Instant activation',
      color: 'from-blue-600 to-blue-700',
      global: true
    },
    {
      name: 'PayPal',
      icon: <Shield size={32} />,
      description: 'Pay with PayPal in 200+ countries',
      details: 'USD, EUR, GBP, KES & 25+ currencies supported',
      color: 'from-indigo-600 to-purple-700',
      global: true
    },
    {
      name: 'M-Pesa Payment (Kenya)',
      icon: <Smartphone size={32} />,
      description: 'Direct M-Pesa payment to developer account',
      details: 'Paybill: 200999 • Account: 0109060077244',
      color: 'from-green-600 to-green-700',
      region: 'Kenya'
    },
    {
      name: 'Bank Transfer',
      icon: <Banknote size={32} />,
      description: 'Direct bank transfer worldwide',
      details: 'SWIFT, SEPA, ACH, local transfers supported',
      color: 'from-orange-600 to-red-700',
      global: true
    },
    {
      name: 'Crypto Payments',
      icon: <Banknote size={32} />,
      description: 'Bitcoin, Ethereum, USDC, USDT',
      details: 'Instant confirmation • Lower fees • Global access',
      color: 'from-yellow-600 to-orange-700',
      global: true
    },
    {
      name: 'Regional Options',
      icon: <CreditCard size={32} />,
      description: 'Local payment methods by region',
      details: 'Alipay, WeChat Pay, UPI, Pix, SEPA & more',
      color: 'from-teal-600 to-cyan-700',
      global: true
    }
  ]

  const regionalMethods = [
    { region: 'Africa', methods: 'M-Pesa (Kenya), MTN Money (Ghana), Orange Money (Senegal), EcoCash (Zimbabwe)' },
    { region: 'Asia', methods: 'Alipay, WeChat Pay (China), UPI, Paytm (India), GrabPay (SE Asia)' },
    { region: 'Europe', methods: 'SEPA, Klarna, Sofort, iDEAL, Bancontact, Przelewy24' },
    { region: 'Americas', methods: 'Pix (Brazil), Interac (Canada), ACH (USA), OXXO (Mexico)' },
    { region: 'Middle East', methods: 'STC Pay (Saudi), CashU, Fawry (Egypt), Knet (Kuwait)' },
    { region: 'Oceania', methods: 'POLi, BPAY (Australia), Internet Banking (New Zealand)' }
  ]

  return (
    <section className="payment-section">
      <div className="container">
        <h2 className="payment-title">Global Payment Options</h2>
        <p className="payment-subtitle">
          Pay from anywhere in the world with your preferred method. 200+ countries supported with local currencies and payment options.
        </p>

        <div className="payment-grid">
          {paymentOptions.map((option, index) => (
            <div key={index} className="payment-card">
              <div className={`payment-icon bg-gradient-to-r ${option.color}`}>
                {option.icon}
              </div>
              <h3 className="payment-name">
                {option.name}
                {option.global && <span className="global-badge">🌍 Global</span>}
                {option.region && <span className="region-badge">🇰🇪 {option.region}</span>}
              </h3>
              <p className="payment-description">{option.description}</p>
              <div className="payment-details">{option.details}</div>
              <button className="btn btn-secondary payment-btn">
                Choose {option.name}
              </button>
            </div>
          ))}
        </div>

        <div className="regional-methods">
          <h3 className="regional-title">Regional Payment Methods</h3>
          <div className="regional-grid">
            {regionalMethods.map((region, index) => (
              <div key={index} className="regional-card">
                <h4 className="regional-name">{region.region}</h4>
                <p className="regional-list">{region.methods}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="payment-security">
          <Shield size={24} />
          <div className="security-text">
            <h4>Secure & Encrypted</h4>
            <p>All payments are processed securely. Your financial information is never stored.</p>
          </div>
        </div>

        <div className="payment-guarantee">
          <div className="guarantee-item">
            <span className="guarantee-icon">✅</span>
            <span>7-day money-back guarantee</span>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-icon">✅</span>
            <span>Cancel anytime, no questions asked</span>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-icon">✅</span>
            <span>Instant activation after payment</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-section {
          background: #f8fafc;
          padding: 4rem 0;
        }

        .payment-title {
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
          color: #1a365d;
          margin-bottom: 1rem;
        }

        .payment-subtitle {
          text-align: center;
          color: #4a5568;
          font-size: 1.125rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .payment-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
          border: 2px solid transparent;
        }

        .payment-card:hover {
          transform: translateY(-5px);
          border-color: #ff6b6b;
        }

        .payment-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          color: white;
          margin-bottom: 1.5rem;
        }

        .payment-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.75rem;
        }

        .payment-description {
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .payment-details {
          background: #edf2f7;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          color: #2d3748;
          font-family: 'Courier New', monospace;
          margin-bottom: 1.5rem;
        }

        .payment-btn {
          width: 100%;
          padding: 12px 24px;
        }

        .global-badge {
          display: inline-block;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 12px;
          margin-left: 0.5rem;
          font-weight: 500;
        }

        .region-badge {
          display: inline-block;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 12px;
          margin-left: 0.5rem;
          font-weight: 500;
        }

        .regional-methods {
          margin: 4rem 0;
        }

        .regional-title {
          font-size: 1.875rem;
          font-weight: 600;
          text-align: center;
          color: #1a365d;
          margin-bottom: 2rem;
        }

        .regional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .regional-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid #ff6b6b;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .regional-card:hover {
          transform: translateY(-3px);
        }

        .regional-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.75rem;
        }

        .regional-list {
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
          font-size: 0.875rem;
        }

        .payment-security {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .security-text h4 {
          color: #1a365d;
          margin: 0 0 0.25rem;
          font-weight: 600;
        }

        .security-text p {
          color: #4a5568;
          margin: 0;
          font-size: 0.875rem;
        }

        .payment-guarantee {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4a5568;
          font-weight: 500;
        }

        .guarantee-icon {
          color: #48bb78;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .payment-title {
            font-size: 1.875rem;
          }

          .payment-grid {
            grid-template-columns: 1fr;
          }

          .payment-guarantee {
            grid-template-columns: 1fr;
          }

          .payment-security {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default PaymentMethods