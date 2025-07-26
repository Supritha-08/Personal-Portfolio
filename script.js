const hamburger = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu-bar'); // updated selector

hamburger.addEventListener('click', () => {
  menu_bar.classList.toggle('show');
});

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



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
    }
  });


