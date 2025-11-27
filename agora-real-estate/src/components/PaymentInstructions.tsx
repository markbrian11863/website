import React from 'react'
import { Smartphone, CreditCard, AlertCircle, CheckCircle } from 'lucide-react'

const PaymentInstructions: React.FC = () => {
  return (
    <div className="payment-instructions">
      <div className="instructions-header">
        <h3>
          <Smartphone size={24} />
          M-Pesa Payment Instructions
        </h3>
        <p>Easy step-by-step guide to pay for your Cursor AI subscription</p>
      </div>

      <div className="payment-details-card">
        <div className="detail-item primary">
          <CreditCard size={20} />
          <div className="detail-content">
            <span className="detail-label">Paybill Number</span>
            <span className="detail-value">200999</span>
          </div>
        </div>
        
        <div className="detail-item primary">
          <Smartphone size={20} />
          <div className="detail-content">
            <span className="detail-label">Account Number</span>
            <span className="detail-value">0109060077244</span>
          </div>
        </div>
        
        <div className="detail-item">
          <AlertCircle size={20} />
          <div className="detail-content">
            <span className="detail-label">Monthly Amount</span>
            <span className="detail-value">KSh 100</span>
          </div>
        </div>
      </div>

      <div className="step-by-step">
        <h4>How to Pay via M-Pesa:</h4>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h5>Open M-Pesa Menu</h5>
              <p>Dial *334# or open M-Pesa app</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h5>Select Paybill</h5>
              <p>Choose "Lipa na M-Pesa" → "Paybill"</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h5>Enter Details</h5>
              <p>Business No: <strong>200999</strong></p>
              <p>Account: <strong>0109060077244</strong></p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h5>Enter Amount</h5>
              <p>Amount: <strong>KSh 100</strong></p>
              <p>Enter your M-Pesa PIN</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h5>Confirmation</h5>
              <p>You'll receive SMS confirmation</p>
              <p>Account activated instantly!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-support">
        <div className="support-card">
          <CheckCircle size={24} className="text-green-500" />
          <div className="support-content">
            <h5>Need Help?</h5>
            <p>Contact us at <strong>11863mark@gmail.com</strong></p>
            <p>We'll help you set up your subscription</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-instructions {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .instructions-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .instructions-header h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .instructions-header p {
          color: #718096;
        }

        .payment-details-card {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .detail-item.primary {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .detail-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .detail-label {
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .detail-value {
          font-size: 1.25rem;
          font-weight: 700;
          font-family: 'Courier New', monospace;
        }

        .step-by-step h4 {
          color: #1a365d;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .step {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
        }

        .step-number {
          position: absolute;
          top: -12px;
          left: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
        }

        .step-content h5 {
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .step-content p {
          color: #4a5568;
          margin: 0.25rem 0;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .payment-support {
          background: #f0fff4;
          border: 1px solid #9ae6b4;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .support-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .support-content h5 {
          color: #1a365d;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .support-content p {
          color: #2d3748;
          margin: 0.25rem 0;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }

          .payment-details-card {
            padding: 1.5rem;
          }

          .detail-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .detail-value {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  )
}

export default PaymentInstructions