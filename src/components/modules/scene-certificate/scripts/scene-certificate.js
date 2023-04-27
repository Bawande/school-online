/*
* JavaScript
* Name: scene-certificate.js
* Path: src\components\modules\scene-certificate\scripts\
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';

document.addEventListener('DOMContentLoaded', () => {
  const sceneCertificate = () => {
    const $scene = document.getElementById('id-scene-certificate');

    const sceneInstance = $scene && new Parallax($scene, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $scene.closest('.certificate'),
    });
  };

  // desktop only
  if (!isMobile()) sceneCertificate();
  console.log('Файл: [scene-certificate.js] подключен!');
}); // DOMContentLoaded
