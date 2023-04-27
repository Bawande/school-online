/*
* JavaScript
* Name: faq.js
* Path: src\components\sections\faq\scripts\
 */
import Accordion from '../../../common/libs/Accordion/Accordion';

const accordion = new Accordion('.accordion', {
  toggleChildClasses: ['.accordion__inner'],

  onOpen: (element) => {
    element.querySelector('.accordion-icon')?.classList.add('active');
    element.parentElement?.classList.add('active');
  },

  onClose: (element) => {
    element.querySelector('.accordion-icon')?.classList.remove('active');
    element.parentElement?.classList.remove('active');
  },

  onFocus: (element) => {
    if (element.closest('.focus-visible')) {
      element.parentElement?.classList.add('focus-visible');
      // element.style.outline = 0;
      element.setAttribute('style', 'outline: 0px');
    }
    // console.log(element);
  },

  onBlur: (element) => {
    if (element.parentElement?.closest('.focus-visible')) {
      element.parentElement?.classList.remove('focus-visible');
      element.removeAttribute('style');
    }
    // console.log(element);
  },
});
console.log('Файл: [faq.js] подключен!');
