/*
* JavaScript
* Name:
* Path:
 */
import isMobile from '../../../common/scripts/detect-mobile';
import '../../../modules/scene-loved-for/scripts/scene-loved-for';

document.addEventListener('DOMContentLoaded', () => {
  const $listItems = document.querySelector('.loved-for__list');
  const $items = $listItems?.querySelectorAll('.loved-for__item');

  const removeActiveClassOnAllItems = () => {
    [].forEach.call($items, (item) => {
      item.classList.remove('active');
    });
  };

  const addActiveClassOnItem = (item) => {
    // console.log(item);
    item.classList.add('active');
  };

  function actionItems() {
    removeActiveClassOnAllItems();
    addActiveClassOnItem(this);
    // console.log(this);
  }

  function addListenerForItem() {
    [].forEach.call($items, (item) => {
      item.addEventListener('mouseenter', actionItems);
    });
  }

  function removeListenerForItem() {
    [].forEach.call($items, (item) => {
      item.removeEventListener('mouseenter', actionItems);
    });
  }
  if (!isMobile()) {
    $listItems.addEventListener('mouseenter', addListenerForItem);
    $listItems.addEventListener('mouseleave', removeListenerForItem);
  }
}); // DOMContentLoaded
console.log('Файл: [...] подключен!');
