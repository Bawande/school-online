document.addEventListener('DOMContentLoaded', () => {
  const $logoRow = document.getElementById('id-logo-row');
  const $navBar = document.getElementById('id-nav-bar');
  const $mobileNav = document.querySelector('.mobile-nav');
  const windowHeight = window.screen.availHeight;
  const windowWidth = window.screen.availWidth;

  let prevScrollpos = window.pageYOffset;
  let stepScroll = 0;
  const onNavBar = !(windowWidth < 640);

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if ($mobileNav.classList.contains('active')) {
      return;
    }

    if (currentScrollPos > windowHeight) {
      $logoRow?.classList.add('fixed');
      if (onNavBar) $navBar?.classList.add('fixed');

      if (prevScrollpos > currentScrollPos && stepScroll > 20) {
        $logoRow?.classList.add('scroll-back');
        if (onNavBar) $navBar?.classList.add('scroll-back');
      }
      if (prevScrollpos < currentScrollPos && stepScroll < -20) {
        $logoRow?.classList.remove('scroll-back');
        if (onNavBar) $navBar?.classList.remove('scroll-back');
      }
    }
    if (currentScrollPos <= windowHeight / 2) {
      $logoRow?.classList.remove('scroll-back');
      if (onNavBar) $navBar?.classList.remove('scroll-back');
    }

    if (currentScrollPos <= windowHeight / 4) {
      $logoRow?.classList.remove('fixed');
      if (onNavBar) $navBar?.classList.remove('fixed');
    }
    stepScroll = prevScrollpos - currentScrollPos;
    prevScrollpos = currentScrollPos;
  });
}); // DOMContentLoaded
