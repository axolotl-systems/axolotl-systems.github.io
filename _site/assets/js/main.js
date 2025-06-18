// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('nav__menu--open');
      navToggle.classList.toggle('nav__toggle--open');
      
      // Update aria attributes
      const isOpen = navMenu.classList.contains('nav__menu--open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('nav__menu--open')) {
        navMenu.classList.remove('nav__menu--open');
        navToggle.classList.remove('nav__toggle--open');
        navToggle.setAttribute('aria-expanded', false);
      }
    });
  });
  
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
  
  // Form submission handling
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      
      // Basic form validation
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Show success message (in a real implementation, you'd send this to a server)
      alert('Thank you for your message! We\'ll get back to you soon.');
      this.reset();
    });
  }
});