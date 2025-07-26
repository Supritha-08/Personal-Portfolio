// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar');

hamburger.addEventListener('click', () => {
  menu_bar.classList.toggle('show');
});

// Navbar visibility based on section
const navbar = document.querySelector('.navbar');
const sec1 = document.querySelector('#sec-1');

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
}, { threshold: 0.5 });

observer.observe(sec1);

// ✅ Single Swiper initialization
const swiper = new Swiper('.mySwiper', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'slide', // Options: 'slide', 'fade', 'coverflow', etc.
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  }
});
