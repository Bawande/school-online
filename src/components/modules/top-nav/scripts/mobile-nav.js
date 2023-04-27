document.addEventListener('DOMContentLoaded', () => {
  const $btnBurgerMenu = document.querySelector('[data-burger-toggle]');
  const $mobileMenu = document.querySelector('[data-mobile-menu]');
  const $links = $mobileMenu.querySelectorAll('a[href]');
  const classActive = 'active';

  // init

  $mobileMenu?.setAttribute('aria-hidden', 'true');
  $btnBurgerMenu?.classList.remove(classActive);
  $mobileMenu?.classList.remove(classActive);

  // logic

  const closeMobileMenu = () => {
    // enableScroll
    document.body.style.height = '';
    document.body.style.overflowY = '';

    $mobileMenu?.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      $mobileMenu?.classList.remove(classActive);
    }, 300);
  };

  const openMobileMenu = () => {
    // disableScroll
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';

    $mobileMenu?.classList.add(classActive);
    $mobileMenu?.setAttribute('aria-hidden', 'false');
  };

  const toggleButtonBurgerMenu = () => {
    if ($btnBurgerMenu.classList.contains(classActive)) {
      $btnBurgerMenu.classList.remove(classActive);
      closeMobileMenu();
    } else {
      $btnBurgerMenu.classList.add(classActive);
      openMobileMenu();
    }
  };

  // action button

  $btnBurgerMenu?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleButtonBurgerMenu();
  });

  // action links

  [].forEach.call($links, (link) => {
    link.addEventListener('click', () => {
      toggleButtonBurgerMenu();
    });
  });

  // media and resize logic

  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 640) {
        $btnBurgerMenu.classList.remove(classActive);
        closeMobileMenu();
      }
    });
  } else {
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    mediaQuery.addEventListener('change', () => {
      $btnBurgerMenu.classList.remove(classActive);
      closeMobileMenu();
    });
  }
}); // DOMContentLoaded
