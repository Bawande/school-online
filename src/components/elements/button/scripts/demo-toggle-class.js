function demoToggleClass(elementID, toggleClass = 'active') {
  const $element = document.getElementById(elementID);
  $element.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle(toggleClass);
  });
}
demoToggleClass('id-hamburger-menu-icon');
