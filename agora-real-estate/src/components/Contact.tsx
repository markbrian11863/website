import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Support',
      details: ['11863mark@gmail.com', 'support@cursor-ai.com'],
      description: '24/7 email support'
    },
    {
      icon: <Phone size={24} />,
      title: 'Live Chat',
      details: ['Available in app', 'Instant responses'],
      description: 'Real-time assistance'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Community',
      details: ['Discord Server', 'GitHub Discussions'],
      description: 'Join our community'
    },
    {
      icon: <Clock size={24} />,
      title: 'Documentation',
      details: ['Getting Started Guide', 'API Reference'],
      description: 'Self-service help'
    }
  ]

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get Support</h2>
        <p className="section-subtitle">
          Have questions about Cursor AI? Our support team is here to help you get the most out of your coding experience
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <h3 className="contact-title">{info.title}</h3>
                  <div className="contact-details">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                  <p className="contact-description">{info.description}</p>
                </div>
              ))}
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={48} />
                <p>Interactive Map</p>
                <p className="map-note">Click to view our location</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Subscriptions</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="enterprise">Enterprise Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your issue or question..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: #f8fafc;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .contact-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 0.75rem;
        }

        .contact-details p {
          color: #4a5568;
          margin: 0.25rem 0;
          font-weight: 500;
        }

        .contact-description {
          color: #718096;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .map-container {
          grid-column: 1 / -1;
        }

        .map-placeholder {
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
          color: white;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
        }

        .map-note {
          font-size: 0.875rem;
          opacity: 0.9;
          margin: 0;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #ff6b6b;
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          gap: 0.5rem;
          width: 100%;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-cards {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-card {
            padding: 1.25rem;
          }

          .contact-form {
            padding: 1.25rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 12px;
            font-size: 16px; /* Prevent zoom on iOS */
            min-height: 44px;
          }

          .form-group textarea {
            min-height: 120px;
          }

          .submit-btn {
            min-height: 50px;
            font-size: 1.125rem;
          }

          .map-placeholder {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact