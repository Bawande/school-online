/*
* JavaScript
* Name: anime-for-whom.js
* Path: src\components\modules\scene-for-whom\scripts\
 */
import anime from 'animejs/lib/anime';

document.addEventListener('DOMContentLoaded', () => {
  const animeForWhom = () => {
    const $forWhomItems = document.querySelectorAll('.for-whom__card');

    const animationIcon = (targets, scale, duration) => {
      anime.remove(targets);
      anime({
        targets,
        scale,
        duration,
        easing: 'easeOutCubic',
      });
    };

    const startAnimation = (event) => {
      const itemScale = event.target.querySelector('.scene-for-whom').id;
      animationIcon(`#${itemScale}`, 1.1, 600);
    };

    const completeAnimation = (event) => {
      const itemScale = event.target.querySelector('.scene-for-whom').id;
      animationIcon(`#${itemScale}`, 1.0, 200);
    };

    [].forEach.call($forWhomItems, (item) => {
      item.addEventListener('mouseenter', startAnimation);
      item.addEventListener('mouseleave', completeAnimation);
    });
  };

  animeForWhom();
  console.log('Файл: [anime-for-whom.js] подключен!');
}); // DOMContentLoaded
