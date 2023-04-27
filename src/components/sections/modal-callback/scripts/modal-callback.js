/*
* JavaScript
* Name:
* Path:
 */
import Select from '../../../common/libs/Select/select';
import RModal from '../../../common/libs/RModal/Rmodal.es';
import { disableScroll, enableScroll } from '../../../common/libs/disable-scroll/disable-scroll';

// modal.open();

const $buttonsOpenModal = document.querySelectorAll('[data-mmodal-trigger="id-modal-callback"]');
const $buttonsCloseModal = document.querySelectorAll('[data-mmodal-close="id-modal-callback"]');
const $modal = document.getElementById('id-modal-callback');

const selectSingle = new Select('#id-modal-classes', {
  placeholderText: 'Класс',
});

const modalCallback = new RModal($modal, {
  afterOpen: () => {
    // disableScroll
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    $modal.setAttribute('aria-hidden', false);
  },
  afterClose: () => {
    // enableScroll
    document.body.style.height = '';
    document.body.style.overflowY = '';
    $modal.setAttribute('aria-hidden', true);
  },

});

function handlerModalClick(event) {
  event.stopPropagation();
  if (event.target.matches('[data-mmodal-close="id-modal-callback"]')) {
    modalCallback.close();
  }
}

[].forEach.call($buttonsOpenModal, ($buttonOpen) => {
  $buttonOpen.addEventListener('click', () => {
    modalCallback.open();
  });
});

[].forEach.call($buttonsCloseModal, ($buttonClose) => {
  $buttonClose.addEventListener('click', (event) => {
    handlerModalClick(event);
  });
});

// console.log('Файл: [...] подключен!');
