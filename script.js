const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar'); // updated selector

hamburger.addEventListener('click', () => {
  menu_bar.classList.toggle('show');
});

const navbar = document.querySelector('.navbar');
const sec1 = document.querySelector('#sec1');

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
}, { threshold: 0.5 });

observer.observe(sec1);
