/*
* JavaScript
* Name: section-how-works.js
* Path: src\components\modules\scene-how-works\scripts\
 */

import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';

document.addEventListener('DOMContentLoaded', () => {
  const sceneHowWorks = () => {
    const $sceneMaterials = document.getElementById('id-scene-additional-materials');
    const $sceneHomework = document.getElementById('id-scene-homework');
    const $sceneLiveLessons = document.getElementById('id-scene-live-lessons');
    const $sceneVerEval = document.getElementById('id-scene-verification-evaluation');

    const sceneInstance0 = $sceneMaterials && new Parallax($sceneMaterials, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneMaterials.closest('.how-works__card'),
    });

    const sceneInstance1 = $sceneHomework && new Parallax($sceneHomework, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneHomework.closest('.how-works__card'),
    });

    const sceneInstance2 = $sceneLiveLessons && new Parallax($sceneLiveLessons, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneLiveLessons.closest('.how-works__card'),
    });

    const sceneInstance3 = $sceneVerEval && new Parallax($sceneVerEval, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneVerEval.closest('.how-works__card'),
    });
  };
  // desktop only
  if (!isMobile()) sceneHowWorks();
  console.log('Файл: [section-how-works.js] подключен!');
}); // DOMContentLoaded
