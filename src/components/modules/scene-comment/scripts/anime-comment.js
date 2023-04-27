/*
* JavaScript
* Name: anime-comment.js
* Path: src\components\modules\scene-comment\scripts\
 */
import anime from 'animejs/lib/anime';
import isMobile from '../../../common/scripts/detect-mobile';
import isInViewport from '../../../common/scripts/is-in-viewport';

document.addEventListener('DOMContentLoaded', () => {
  const $animeComment = document.querySelector('#id-scene-comment-wrap');

  const completeAnimation = () => {
    anime.remove('#id-scene-comment-background');
  };

  const startAnimation = () => {
    anime({
      targets: '#id-scene-comment-background',
      d: [
        { value: 'M354.011 32.1652C433.65 29.9441 512.519 50.0211 572.427 98.5819C636.457 150.483 678.13 222.04 685.056 300.505C692.597 385.951 680.265 481.06 611.238 538.309C544.102 593.99 444 587.2 337 563C250.54 543.446 183.781 525.574 120.5 463.5C60.7635 404.903 27.2718 348.281 30.0004 272C32.6512 197.895 66.4351 146.848 128 98.5819C195.616 45.5723 276.994 34.3131 354.011 32.1652Z' },

        { value: 'M354.011 21.4999C438.28 30.8867 483.055 55.8582 549 117C614.42 177.654 665.97 213.359 685.056 300.505C705.573 394.189 695.527 481.751 626.5 539C559.364 594.681 463.018 592.431 354.011 575.063C264.917 560.868 203.942 541.451 145.5 490C85.7153 437.367 57.9535 375.18 42.1482 300.505C19.5 193.5 60.9996 117 145.5 70.0003C210.527 33.8321 270.922 12.2445 354.011 21.4999Z' },

        { value: 'M354.011 32.1654C467.749 14.7824 586.092 22.9388 646 71.4996C710.03 123.401 700.551 212.05 682.555 301.005C664.59 389.81 633.606 439.845 560 498C490.78 552.691 441.965 568.239 354.011 575.063C249.759 583.151 147.942 584.951 89.4999 533.5C29.7151 480.867 26.3635 392.004 42.1482 300.505C56.6058 216.699 84.1286 166.116 148.387 110.408C213.306 54.128 269.079 45.1458 354.011 32.1654Z' },
      ],
      easing: 'easeOutQuad',
      direction: 'alternate',
      duration: 10000,
      loop: true,
    });
  };

  // animation desktop only
  if (!isMobile()) {
  // animation in Viewport only
    isInViewport(
      $animeComment,
      () => {
      // inViewCallback
        startAnimation();
      // console.log('Теперь элемент виден!');
      },
      () => {
      // outOfViewCallback
        completeAnimation();
      // console.log('Теперь элемент скрыт.');
      },
    );
  }
  console.log('Файл: [anime-comment.js] подключен!');
}); // DOMContentLoaded
