// Toggle mobile menu visibility
function toggleMenu() {
    const navLinks = document.querySelector('.menu-links');
    navLinks.classList.toggle('active');
  }
  
  // Scroll effect for sticky navbar shadow
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 60;
  
    if (window.scrollY > scrollThreshold) {
      navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
  