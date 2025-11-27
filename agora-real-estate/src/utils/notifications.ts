// Utility functions for user notifications and feedback

export const showSuccess = (message: string) => {
  // Create a simple success notification
  const notification = document.createElement('div')
  notification.className = 'success-notification'
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `
  
  document.body.appendChild(notification)
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease'
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

export const showError = (message: string) => {
  // Create a simple error notification
  const notification = document.createElement('div')
  notification.className = 'error-notification'
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(245, 101, 101, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `
  
  document.body.appendChild(notification)
  
  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease'
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

// Add CSS animations
if (!document.querySelector('#notification-styles')) {
  const styles = document.createElement('style')
  styles.id = 'notification-styles'
  styles.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(styles)
}