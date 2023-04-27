/*
* JavaScript
* Name: scene-comparison-boys.js
* Path: src\components\modules\scene-comparison-boys\scene-comparison-boys.js
 */
import Parallax from 'parallax-js';
import anime from 'animejs/lib/anime';

const $sceneBoysRight = document.getElementById('id-scene-comparison-boys-right');
const $sceneBoysRightAction = $sceneBoysRight
  .closest('.comparison__schools-wrap')
  .querySelector('.online-school');

const $sceneBoysLeft = document.getElementById('id-scene-comparison-boys-left');
const $sceneBoysLeftAction = $sceneBoysLeft
  .closest('.comparison__schools-wrap')
  .querySelector('.regular-school');

const parallaxSceneBoysRightInstance = $sceneBoysRight && new Parallax($sceneBoysRight, {
  hoverOnly: true,
  inputElement: $sceneBoysRightAction,
});

const parallaxSceneBoysLeftInstance = $sceneBoysLeft && new Parallax($sceneBoysLeft, {
  hoverOnly: true,
  inputElement: $sceneBoysLeftAction,
});

console.log('Файл: [scene-comparison-boys.js] подключен!');
