/*
* JavaScript
* Name: scene-loved-for.js
* Path: src\components\modules\scene-loved-for\
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';
// import './anime-loved-for';

document.addEventListener('DOMContentLoaded', () => {
  const $sceneLovedFor = document.getElementById('id-scene-loved-for');

  // desktop only
  if (!isMobile()) {
    const parallaxSceneLovedForInstance = $sceneLovedFor && new Parallax($sceneLovedFor, {

      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneLovedFor.closest('.loved-for__container'),
    });
  }
  console.log('Файл: [scene-loved-for.js] подключен!');
}); // DOMContentLoaded
