import React from 'react'
import { Code2, Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Github, MessageSquare } from 'lucide-react'

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Download', href: '#download' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Changelog', href: '#changelog' },
      { name: 'Roadmap', href: '#roadmap' }
    ],
    developers: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Extensions', href: '#extensions' },
      { name: 'Themes', href: '#themes' },
      { name: 'Shortcuts', href: '#shortcuts' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Community', href: '#community' },
      { name: 'Discord', href: '#discord' },
      { name: 'GitHub Issues', href: '#github' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  }

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#facebook', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#twitter', name: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#instagram', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#linkedin', name: 'LinkedIn' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Code2 size={32} />
              <span>Cursor</span>
              <Zap size={20} className="ai-icon" />
            </div>
            <p className="footer-description">
              The AI-first code editor that understands your code. Write, edit, and debug 
              faster than ever with intelligent assistance.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>11863mark@gmail.com</span>
              </div>
              <div className="contact-item">
                <Github size={16} />
                <span>github.com/getcursor</span>
              </div>
              <div className="contact-item">
                <MessageSquare size={16} />
                <span>Join our Discord</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Product</h3>
            <ul className="footer-links">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Developers</h3>
            <ul className="footer-links">
              {footerLinks.developers.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Cursor Technologies Inc. All rights reserved.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1a202c;
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section {
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .footer-description {
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #a0aec0;
          font-size: 0.875rem;
        }

        .footer-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #a0aec0;
          transition: color 0.3s ease;
          font-size: 0.875rem;
        }

        .footer-links a:hover {
          color: #667eea;
        }

        .footer-bottom {
          border-top: 1px solid #2d3748;
          padding-top: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .copyright {
          color: #a0aec0;
          font-size: 0.875rem;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #2d3748;
          border-radius: 50%;
          color: #a0aec0;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 2rem;
          }

          .footer-section:nth-child(4),
          .footer-section:nth-child(5) {
            grid-column: 2 / -1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-section:nth-child(4),
          .footer-section:nth-child(5) {
            grid-column: 1;
            display: block;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .contact-info {
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer