/*
* JavaScript
* Name: scene-contacts-second.js
* Path: src\components\modules\scene-contacts-second\scripts\
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';

document.addEventListener('DOMContentLoaded', () => {
  const sceneContactsSecond = () => {
    const $scene = document.getElementById('id-scene-contacts-second');

    const sceneInstance = new Parallax($scene, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
    });
  };

  // desktop only
  if (!isMobile()) sceneContactsSecond();
  console.log('Файл: [scene-contacts-second.js] подключен!');
}); // DOMContentLoaded
