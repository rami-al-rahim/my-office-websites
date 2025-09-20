// Newsletter subscription
document.getElementById('sub').addEventListener('click', handleSubscription);
const subscribeStatus = document.getElementById('subscribe-status');

async function handleSubscription() {
  const emailInput = document.getElementById('subInput');
  const email = emailInput.value.trim();
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showStatus('Please enter a valid email address', 'text-danger');
    return;
  }

  // Show loading status
  showStatus('Subscribing, please wait...', 'text-info');
  
  const url = `https://api.rami-dev.com/email/${email}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Subscription response:', data);
    
    // Clear input field and show success message
    emailInput.value = '';
    showStatus('Thanks for subscribing to our newsletter!', 'text-success');
    
  } catch (error) {
    console.error('Subscription error:', error);
    showStatus(`Failed to subscribe: ${error.message}`, 'text-danger');
  }
}

function showStatus(message, className) {
  subscribeStatus.textContent = message;
  subscribeStatus.className = 'mt-2 small ' + className;
  
  // Clear status message after 5 seconds if it's a success or error message
  if (className.includes('success') || className.includes('danger')) {
    setTimeout(() => {
      subscribeStatus.textContent = '';
    }, 5000);
  }
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
    
    // Reset form
    this.reset();
  });
}

// Add project click handlers
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Only trigger if not clicking on a link or button
    if (!e.target.closest('a') && !e.target.closest('button')) {
      const link = this.querySelector('a.ms-auto');
      if (link) {
        window.open(link.href, '_blank');
      }
    }
  });
  
  // Add cursor pointer style
  card.style.cursor = 'pointer';
});

// Document ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any components that need it
  console.log('Portfolio loaded successfully');
});