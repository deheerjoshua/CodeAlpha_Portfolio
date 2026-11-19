// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Welcome message
console.log("Welcome to Joshua's Portfolio!");

// Simple animation when scrolling
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50){
    header.style.opacity = '0.95';
  } else {
    header.style.opacity = '1';
  }
});
