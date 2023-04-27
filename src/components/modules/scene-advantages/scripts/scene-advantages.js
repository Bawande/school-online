/*
* JavaScript
* Name: scene-advantages.js
* Path: src\components\modules\scene-advantages\scripts\
 */
import Parallax from 'parallax-js';
import isMobile from '../../../common/scripts/detect-mobile';

document.addEventListener('DOMContentLoaded', () => {
  const sceneHowWorks = () => {
    const $sceneAccess = document.getElementById('id-scene-access');
    const $sceneAccessPrt = document.getElementById('id-scene-access').closest('.advantages__card');

    const $sceneSchSupplies = document.getElementById('id-scene-school-supplies');
    const $sceneSchSuppliesPrt = document.getElementById('id-scene-school-supplies').closest('.advantages__card');

    const $sceneNoStress = document.getElementById('id-scene-no-stress');
    const $sceneNoStressPrt = document.getElementById('id-scene-no-stress').closest('.advantages__card');

    const $sceneProf = document.getElementById('id-scene-professionals');
    const $sceneProfPrt = document.getElementById('id-scene-professionals').closest('.advantages__card');

    const $sceneSchedule = document.getElementById('id-scene-schedule');
    const $sceneSchedulePrt = document.getElementById('id-scene-schedule').closest('.advantages__card');

    const $sceneBalance = document.getElementById('id-scene-balance');
    const $sceneBalancePrt = document.getElementById('id-scene-balance').closest('.advantages__card');

    const sceneInstance0 = $sceneAccess && new Parallax($sceneAccess, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneAccessPrt && $sceneAccessPrt,
    });

    const sceneInstance1 = $sceneSchSupplies && new Parallax($sceneSchSupplies, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneSchSuppliesPrt && $sceneSchSuppliesPrt,
    });

    const sceneInstance2 = $sceneNoStress && new Parallax($sceneNoStress, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneNoStressPrt && $sceneNoStressPrt,
    });

    const sceneInstance3 = $sceneProf && new Parallax($sceneProf, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneProfPrt && $sceneProfPrt,
    });

    const sceneInstance4 = $sceneSchedule && new Parallax($sceneSchedule, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneSchedulePrt && $sceneSchedulePrt,
    });

    const sceneInstance5 = $sceneBalance && new Parallax($sceneBalance, {
      hoverOnly: true,
      invertX: false,
      invertY: false,
      inputElement: $sceneBalancePrt && $sceneBalancePrt,
    });
  };
  // desktop only
  if (!isMobile()) sceneHowWorks();
  console.log('Файл: [scene-advantages.js] подключен!');
}); // DOMContentLoaded
