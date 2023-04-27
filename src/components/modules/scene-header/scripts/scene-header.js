/*
* JavaScript
* Name: scene-header.js
* Path: src\components\modules\scene-header\scripts\
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';

document.addEventListener('DOMContentLoaded', () => {
  const sceneHeader = () => {
    const $sceneHeaderLeft = document.getElementById('id-scene-header-left');
    const $sceneHeaderRight = document.getElementById('id-scene-header-right');
    const $scene = document.getElementById('id-scene-header');

    const instanceHeaderLeft = $sceneHeaderLeft && new Parallax($sceneHeaderLeft, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      relativeInput: true,
      inputElement: $scene && $scene,
    });

    const instanceHeaderRight = $sceneHeaderRight && new Parallax($sceneHeaderRight, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      relativeInput: true,
      inputElement: $scene && $scene,
    });
  };
  // desktop only
  if (!isMobile()) sceneHeader();
  console.log('Файл: [scene-loved-for.js] подключен!');
}); // DOMContentLoaded
