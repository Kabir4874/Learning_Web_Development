// Swiper 
var swiper = new Swiper(".mySwiper", {
    spaceBetween:24,
    speed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:2,
        }
    }
  });
  console.log("hello")