/*
* JavaScript
* Name: scene-welcome.js
* Path: src\components\modules\scene-welcome\scene-welcome.js
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';
import './anime-welcome';

document.addEventListener('DOMContentLoaded', () => {
  const sceneWelcome = () => {
    const $scene = document.getElementById('id-scene-welcome');

    const sceneInstance = $scene && new Parallax($scene, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
    });
  };
  // desktop only
  if (!isMobile()) sceneWelcome();
  console.log('Файл: [scene-welcome.js] подключен!');
}); // DOMContentLoaded
