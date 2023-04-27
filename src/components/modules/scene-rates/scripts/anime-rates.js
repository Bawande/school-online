/*
* JavaScript
* Name: anime-rates.js
* Path: src\components\modules\scene-rates\scripts\
 */
import anime from 'animejs/lib/anime';

document.addEventListener('DOMContentLoaded', () => {
  const animeRates = () => {
    const $ratesItems = document.querySelectorAll('.scene-rates');
    // const $ratesItemsPrt = document.querySelectorAll('.scene-rates').closest('.rates-card');

    const animationItems = (targets, scale, duration, translateX) => {
      anime.remove(targets);
      anime({
        targets,
        scale,
        duration,
        translateX,
        easing: 'easeOutCubic',
      });
    };

    const startAnimation = (e) => {
      animationItems(`#${e.target.id}`, 1.02, 600, 10);
    };

    const completeAnimation = (e) => {
      animationItems(`#${e.target.id}`, 1.0, 300, 0);
    };

    $ratesItems?.forEach((e) => {
      e.addEventListener('mouseenter', startAnimation);
      e.addEventListener('mouseleave', completeAnimation);
    });
  };

  animeRates();
  console.log('Файл: [anime-rates.js] подключен!');
}); // DOMContentLoaded
