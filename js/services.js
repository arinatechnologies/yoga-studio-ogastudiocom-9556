// Service card hover effect enhancement
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    // Add aria-label for better accessibility
    const title = card.querySelector('h3').textContent;
    card.setAttribute('aria-label', `Service: ${title}`);
    
    // Add keyboard navigation support
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const link = this.querySelector('.btn-learn-more');
        if (link) link.click();
      }
    });
  });
  
  // Set tabindex for service cards if they're interactive
  if (document.querySelectorAll('.service-card .btn-learn-more').length > 0) {
    serviceCards.forEach(card => {
      card.setAttribute('tabindex', '0');
    });
  }
});