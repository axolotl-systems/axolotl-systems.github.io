// Enhanced JavaScript for sticky-below-nav tabs
document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality for services
  const tabButtons = document.querySelectorAll('.tabs__button');
  const tabPanels = document.querySelectorAll('.tabs__panel');
  const tabsNav = document.querySelector('.tabs__nav');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('tabs__button--active'));
      tabPanels.forEach(panel => panel.classList.remove('tabs__panel--active'));
      
      // Add active class to clicked button and corresponding panel
      this.classList.add('tabs__button--active');
      document.getElementById(targetTab).classList.add('tabs__panel--active');
    });
  });
  
  // Sticky tabs functionality - positioned below nav
  if (tabsNav) {
    const tabsSection = document.querySelector('.services-tabs');
    const header = document.querySelector('.header-simple');
    const headerHeight = header ? header.offsetHeight : 80;
    
    let tabsNavOriginalOffsetTop = null;
    
    function initializeStickyTabs() {
      // Calculate the original offset when the page loads or resizes
      tabsNavOriginalOffsetTop = tabsSection.offsetTop + (tabsNav.offsetTop - tabsSection.offsetTop);
    }
    
    function handleStickyTabs() {
      if (tabsNavOriginalOffsetTop === null) {
        initializeStickyTabs();
      }
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const tabsSectionRect = tabsSection.getBoundingClientRect();
      const isInTabsSection = tabsSectionRect.top <= headerHeight && tabsSectionRect.bottom > headerHeight + 100;
      
      if (isInTabsSection && scrollTop > tabsNavOriginalOffsetTop - headerHeight - 10) {
        tabsNav.classList.add('tabs__nav--sticky');
      } else {
        tabsNav.classList.remove('tabs__nav--sticky');
      }
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    function throttledStickyHandler() {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleStickyTabs();
          ticking = false;
        });
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', throttledStickyHandler);
    window.addEventListener('resize', () => {
      tabsNavOriginalOffsetTop = null; // Reset on resize
      throttledStickyHandler();
    });
    
    // Initialize on load
    initializeStickyTabs();
  }
  
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