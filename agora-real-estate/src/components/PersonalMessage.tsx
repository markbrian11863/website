import React from 'react'

const PersonalMessage: React.FC = () => {
  return (
    <section className="personal-message">
      <div className="container">
        <div className="message-content">
          <div className="message-text">
            <h2>A Personal Message from Mark Brian</h2>
            <p>
              "Welcome to Mark Brian Real Estate! With over 15 years in the industry, 
              I've dedicated my career to helping families find not just houses, but homes. 
              Your property journey is personal to me, and I'm committed to providing 
              you with exceptional service every step of the way."
            </p>
            <p>
              "Whether you're buying your first home, selling a cherished property, or 
              looking for investment opportunities, I'm here to guide you with expertise, 
              integrity, and genuine care."
            </p>
            <div className="signature">
              <span>- Mark Brian</span>
              <small>Founder & Licensed Real Estate Agent</small>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .personal-message {
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          padding: 4rem 0;
          margin: 4rem 0;
        }

        .message-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .message-text h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .message-text p {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          opacity: 0.95;
        }

        .signature {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .signature span {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .signature small {
          opacity: 0.8;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .personal-message {
            padding: 3rem 0;
          }

          .message-text h2 {
            font-size: 2rem;
          }

          .message-text p {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 480px) {
          .personal-message {
            padding: 2.5rem 0;
            margin: 2rem 0;
          }

          .message-text h2 {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }

          .message-text p {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }

          .signature {
            margin-top: 1.5rem;
          }

          .signature span {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}

export default PersonalMessage