/*
* JavaScript
* Name: comment.js
* Path: src\components\sections\comment\scripts\
*/
// import Swiper from 'swiper';
import Swiper from 'swiper';
// import '../../../modules/scene-comment/scripts/anime-comment';

const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,

  wrapperClass: 'swiper__wrapper',
  slideClass: 'swiper__items',

  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.btn-nav-slider--to-left',
    prevEl: '.btn-nav-slider--to-rigth',
  },

  // ARIA
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',

  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      // slidesPerView: 2,
      // spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      // slidesPerView: 3,
      // spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 1.7,
    },
    // when window width is >= 1500px
    1500: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
  },

});

console.log('Файл: [comment.js] подключен!');
