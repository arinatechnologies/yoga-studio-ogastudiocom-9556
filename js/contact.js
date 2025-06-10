document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // In a real implementation, you would send the form data to a server here
      console.log('Form submitted:', {
        name,
        email,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message
      });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});