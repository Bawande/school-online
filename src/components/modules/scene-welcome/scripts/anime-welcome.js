/*
* JavaScript
* Name: anime-welcome.js
* Path: src\components\modules\scene-welcome\scripts\
 */
import anime from 'animejs/lib/anime';

document.addEventListener('DOMContentLoaded', () => {
  const animeWelcome = () => {
    anime({
      targets: '#scene-welcome-tablet-screen',
      delay: 1700,
      opacity: 1,
      easing: 'easeInOutBack',
    });
    anime({
      targets: '#scene-welcome-phone-2-screen',
      delay: 1900,
      opacity: 1,
      easing: 'easeInOutBack',
    });
    anime({
      targets: '#scene-welcome-phone-1-screen',
      delay: 2100,
      opacity: 1,
      easing: 'easeInOutBack',
    });
    anime({
      targets: '.loading--phone-1',
      delay: 2500,
      duration: 100,
    });
    anime({
      targets: '#scene-welcome-computer-screen',
      delay: 1000,
      opacity: 1,
      easing: 'easeInOutBack',
    });
  };

  animeWelcome();
  console.log('Файл: [anime-welcome.js] подключен!');
}); // DOMContentLoaded
