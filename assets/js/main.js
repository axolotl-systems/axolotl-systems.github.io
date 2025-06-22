// Enhanced JavaScript for color-coded service sections
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Email button click tracking
  const emailBtn = document.querySelector('.contact__email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('click', function() {
      // Optional: Add analytics tracking here
      console.log('Email CTA clicked');
    });
  }
  
  // Notification system
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('notification--show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.classList.remove('notification--show');
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }
  
  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.feature-card, .process-step, .experience-card, .problem-card');
  animateElements.forEach(el => observer.observe(el));
  
  // Hero stats hover effects  
  const statItems = document.querySelectorAll(".stat-item");
  statItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });
    
    item.addEventListener("mouseleave", function() {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
  
  // Service section reveal on scroll
  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('service--visible');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });
  
  const serviceElements = document.querySelectorAll('.service');
  serviceElements.forEach(el => serviceObserver.observe(el));
});

// Add CSS for notifications and animations
const style = document.createElement('style');
style.textContent = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    max-width: 300px;
  }
  
  .notification--success {
    background: linear-gradient(135deg, #10B981, #34D399);
  }
  
  .notification--error {
    background: linear-gradient(135deg, #EF4444, #F87171);
  }
  
  .notification--show {
    transform: translateX(0);
  }
  
  .animate-in {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .service {
    opacity: 0.95;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
  }
  
  .service--visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    .notification {
      right: 10px;
      left: 10px;
      max-width: none;
      transform: translateY(-100%);
    }
    
    .notification--show {
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);