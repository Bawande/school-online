/*
* JavaScript
* Name: scene-offer.js
* Path: src\components\modules\scene-offer\scene-offer.js
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';

document.addEventListener('DOMContentLoaded', () => {
  // desktop only
  if (!isMobile()) {
    const $sceneReadBoy = document
      .getElementById('id-scene-offer-read-boy');

    const $sceneReadGirl = document
      .getElementById('id-scene-offer-read-girl');

    const instanceSceneReadBoy = $sceneReadBoy && new Parallax($sceneReadBoy, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneReadBoy.closest('.offer'),
    });

    const instanceSceneReadgirl = $sceneReadGirl && new Parallax($sceneReadGirl, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneReadGirl.closest('.offer'),

    });
  } // isMobile()
  console.log('Файл: [scene-offer.js] подключен!');
}); // DOMContentLoaded
