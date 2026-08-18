// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Observe gallery images
  document.querySelectorAll('.gallery img').forEach(img => observer.observe(img));
  
  // Observe animate-on-scroll elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  
  // Observe list items in cards
  document.querySelectorAll('.card ul li').forEach(li => observer.observe(li));
});

// Image hover effects (enhanced)
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', function() {
    // Expand image on click (modal-like effect)
    this.style.position = 'fixed';
    this.style.top = '50%';
    this.style.left = '50%';
    this.style.transform = 'translate(-50%, -50%)';
    this.style.zIndex = '9999';
    this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.8)';
    this.style.maxWidth = '90vw';
    
    // Click anywhere to close
    document.addEventListener('click', function closeImg(e) {
      if (e.target === img) {
        img.style.position = '';
        img.style.top = '';
        img.style.left = '';
        img.style.transform = '';
        img.style.zIndex = '';
        img.style.boxShadow = '';
        img.style.maxWidth = '';
        document.removeEventListener('click', closeImg);
      }
    });
  });
});

// Staggered reveal for cards
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrolled * 0.3}px`;
  });
}