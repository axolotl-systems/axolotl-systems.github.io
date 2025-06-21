// Enhanced JavaScript for conversion-focused website
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
  
  // Sticky tabs functionality
  if (tabsNav) {
    const tabsSection = document.querySelector('.services-tabs');
    const tabsNavOffsetTop = tabsNav.offsetTop;
    
    function handleStickyTabs() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const tabsSectionRect = tabsSection.getBoundingClientRect();
      const isInTabsSection = tabsSectionRect.top <= 0 && tabsSectionRect.bottom > 100;
      
      if (isInTabsSection && scrollTop > tabsNavOffsetTop - 20) {
        tabsNav.classList.add('tabs__nav--sticky');
      } else {
        tabsNav.classList.remove('tabs__nav--sticky');
      }
    }
    
    window.addEventListener('scroll', handleStickyTabs);
    window.addEventListener('resize', handleStickyTabs);
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
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
      // Remove active class from all items
      timelineItems.forEach(ti => ti.classList.remove('timeline-item--active'));
      // Add active class to hovered item
      this.classList.add('timeline-item--active');
    });
  });
  
  // Reset to first item when mouse leaves timeline area
  const heroTimeline = document.querySelector('.hero__timeline');
  if (heroTimeline) {
    heroTimeline.addEventListener('mouseleave', function() {
      timelineItems.forEach(ti => ti.classList.remove('timeline-item--active'));
      if (timelineItems[0]) {
        timelineItems[0].classList.add('timeline-item--active');
      }
    });
  }
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
