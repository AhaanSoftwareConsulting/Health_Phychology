// testimonial.js
const testimonialSwiper = new Swiper('.testimonialSwiper', {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    0:   { slidesPerView: 1, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    992: { slidesPerView: 3, spaceBetween: 32 }
  }
});