import React, { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

const CurrencyPricing: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('Global')

  const pricingByRegion = {
    'Global': [
      { currency: 'USD', price: '$1.00', country: 'United States' },
      { currency: 'EUR', price: '€0.95', country: 'European Union' },
      { currency: 'GBP', price: '£0.85', country: 'United Kingdom' },
      { currency: 'CAD', price: 'C$1.35', country: 'Canada' },
      { currency: 'AUD', price: 'A$1.50', country: 'Australia' }
    ],
    'Africa': [
      { currency: 'KES', price: 'KSh 100', country: 'Kenya' },
      { currency: 'NGN', price: '₦500', country: 'Nigeria' },
      { currency: 'ZAR', price: 'R18', country: 'South Africa' },
      { currency: 'GHS', price: '₵6', country: 'Ghana' },
      { currency: 'UGX', price: 'USh 3,700', country: 'Uganda' }
    ],
    'Asia': [
      { currency: 'INR', price: '₹80', country: 'India' },
      { currency: 'CNY', price: '¥7', country: 'China' },
      { currency: 'JPY', price: '¥150', country: 'Japan' },
      { currency: 'KRW', price: '₩1,300', country: 'South Korea' },
      { currency: 'SGD', price: 'S$1.35', country: 'Singapore' }
    ],
    'Americas': [
      { currency: 'BRL', price: 'R$5', country: 'Brazil' },
      { currency: 'MXN', price: '$18', country: 'Mexico' },
      { currency: 'ARS', price: '$100', country: 'Argentina' },
      { currency: 'CLP', price: '$850', country: 'Chile' },
      { currency: 'COP', price: '$4,200', country: 'Colombia' }
    ],
    'Europe': [
      { currency: 'EUR', price: '€0.95', country: 'Germany/France/Italy' },
      { currency: 'PLN', price: '4 zł', country: 'Poland' },
      { currency: 'CZK', price: '23 Kč', country: 'Czech Republic' },
      { currency: 'SEK', price: '10 kr', country: 'Sweden' },
      { currency: 'NOK', price: '11 kr', country: 'Norway' }
    ]
  }

  const regions = Object.keys(pricingByRegion)

  return (
    <section className="currency-section">
      <div className="container">
        <h2 className="currency-title">
          <Globe size={32} />
          Local Pricing Worldwide
        </h2>
        <p className="currency-subtitle">
          Fair pricing adjusted for your local economy. Select your region to see pricing in your currency.
        </p>

        <div className="region-selector">
          <label htmlFor="region-select">Choose your region:</label>
          <select 
            id="region-select"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="region-dropdown"
          >
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <ChevronDown size={20} className="dropdown-icon" />
        </div>

        <div className="pricing-grid">
          {pricingByRegion[selectedRegion as keyof typeof pricingByRegion].map((item, index) => (
            <div key={index} className="currency-card">
              <div className="currency-header">
                <span className="currency-code">{item.currency}</span>
                <span className="currency-price">{item.price}</span>
              </div>
              <div className="currency-country">{item.country}</div>
              <div className="currency-note">per month after free trial</div>
            </div>
          ))}
        </div>

        <div className="currency-benefits">
          <div className="benefit-item">
            <span className="benefit-icon">🌍</span>
            <span>200+ countries supported</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💱</span>
            <span>25+ currencies available</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Automatic currency detection</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔒</span>
            <span>Secure global payments</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .currency-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 5rem 0;
        }

        .currency-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
        }

        .currency-subtitle {
          text-align: center;
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .region-selector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .region-selector label {
          font-weight: 500;
          font-size: 1.125rem;
        }

        .region-dropdown {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px 40px 12px 16px;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          appearance: none;
          cursor: pointer;
          min-width: 150px;
        }

        .region-dropdown:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .dropdown-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .currency-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .currency-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .currency-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .currency-code {
          font-weight: 700;
          font-size: 1.125rem;
          opacity: 0.8;
        }

        .currency-price {
          font-weight: 700;
          font-size: 1.5rem;
          color: #ffd700;
        }

        .currency-country {
          font-size: 0.875rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .currency-note {
          font-size: 0.75rem;
          opacity: 0.7;
          font-style: italic;
        }

        .currency-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.125rem;
          font-weight: 500;
        }

        .benefit-icon {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .currency-title {
            font-size: 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .region-selector {
            flex-direction: column;
            gap: 0.75rem;
          }

          .pricing-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
          }

          .currency-benefits {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default CurrencyPricing