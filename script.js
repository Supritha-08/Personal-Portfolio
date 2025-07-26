const hamburger=document.querySelector('.hamburger');
        const menu_bar=document.querySelector('.navbar-menu .menu-bar');
        hamburger.addEventListener('click',()=>{
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


  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });




