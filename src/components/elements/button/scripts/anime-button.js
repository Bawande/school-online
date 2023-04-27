/*
* JavaScript
* Name: anime-for-whom.js
* Path: src\components\modules\scene-for-whom\scripts\
 */
import anime from 'animejs/lib/anime';

document.addEventListener('DOMContentLoaded', () => {
  const animeForWhom = () => {
    const $btnScale = document.querySelectorAll('.btn-secondary[data-scale]');
    console.log($btnScale);

    const animationIcon = (targets, scale, duration) => {
      anime.remove(targets);
      anime({
        targets,
        scale,
        duration,
        // delay: 200,
        easing: 'easeInOutExpo',
      });
    };

    const startAnimation = (e) => {
      const elementId = `#${e.target.getAttribute('id')}`;
      const elementScale = +e.target.getAttribute('data-scale');
      // console.log(e.target.getAttribute('id'));
      animationIcon(elementId, elementScale, 800);
    };

    const completeAnimation = (e) => {
      const elementId = `#${e.target.getAttribute('id')}`;
      // console.log(e.target.getAttribute('id'));
      animationIcon(elementId, 1.0, 100);
    };

    $btnScale.forEach((e, i) => {
      e.setAttribute('id', `id-scale-btn-${i}`);
      e.addEventListener('mouseenter', startAnimation);
      e.addEventListener('mouseleave', completeAnimation);
    });
  };

  animeForWhom();
  console.log('Файл: [anime-for-whom.js] подключен!');
}); // DOMContentLoaded
