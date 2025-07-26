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
  navbar.style.display = entry.isIntersecting ? 'flex' : 'none';
}, { threshold: 0.5 });

observer.observe(sec1);

// ✅ Single Swiper Initialization
const swiper = new Swiper('.mySwiper', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  effect: 'slide',
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
  },
  on: {
    slideChangeTransitionStart: () => {
      document.querySelectorAll('.swiper-slide').forEach(slide =>
        slide.classList.remove('animate')
      );
    },
    slideChangeTransitionEnd: () => {
      const activeSlide = document.querySelector('.swiper-slide-active');
      if (activeSlide) activeSlide.classList.add('animate');
    }
  }
});

// Initial animation on page load
window.addEventListener('load', () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) activeSlide.classList.add('animate');
});
swiper.on('slideChangeTransitionStart', () => {
  document.querySelectorAll('.swiper-slide').forEach(slide =>
    slide.classList.remove('animate')
  );
});

swiper.on('slideChangeTransitionEnd', () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) activeSlide.classList.add('animate');
});

window.addEventListener('load', () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) activeSlide.classList.add('animate');
});
