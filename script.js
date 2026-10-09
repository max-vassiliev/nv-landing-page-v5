const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

// Stagger index for list items that cascade in once their .reveal parent is visible
document.querySelectorAll('.focus-row ul, .feature-list, .tsp2-signals ol, .pub-list, .bio-edu').forEach((list) => {
  [...list.children].forEach((item, i) => item.style.setProperty('--i', i));
});

// Header gets a soft shadow once the page is scrolled
const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
