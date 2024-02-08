// Add an event listener to the window's scroll event
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
  
    // Add or remove the "scrolled" class based on the scroll position
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  