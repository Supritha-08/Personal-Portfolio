const hamburger=document.querySelector('.hamburger');
        const menu_bar=document.querySelector('.navbar-menu .menu-bar');
        hamburger.addEventListener('click',()=>{
            menu_bar.classList.toggle('show');
        });

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




