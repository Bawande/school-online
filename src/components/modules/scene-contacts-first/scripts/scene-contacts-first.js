/*
* JavaScript
* Name: scene-contacts-first.js
* Path: src\components\modules\scene-contacts-first\scripts\
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';

document.addEventListener('DOMContentLoaded', () => {
  const sceneContactsFirst = () => {
    const $scene = document.getElementById('id-scene-contacts-first');

    const sceneInstance = new Parallax($scene, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
    });
  };

  // desktop only
  if (!isMobile()) sceneContactsFirst();
  console.log('Файл: [scene-contacts-first.js] подключен!');
}); // DOMContentLoaded
