class Accordion {
  constructor(selector, userOptions) {
    const defaultsOptions = {
      ariaEnabled: true, // добавить элементы ARIA в структуру HTML {boolean}
      showMultiple: false, // показывать несколько элементов одновременно {boolean}
      showOnInit: [0], // показывать элементы аккордеона во время инициализации {array}
      titleClass: 'accordion__title', // класс триггера {string}
      contentClass: 'accordion__content', // класс панели {string}
      activeClass: 'active', // класс активного элемента {string}
      toggleChildClasses: [], // подклассы элемента titleClass {array}
      onOpen: () => {}, // вызывается при открытии элемента {function}
      onClose: () => {}, // вызывается, когда элемент закрыт {function}
    };

    // Расширить параметры по умолчанию
    this.options = Object.assign(defaultsOptions, userOptions);

    this.$accordion = document.querySelector(selector);

    this.$titlesAccordion = this.$accordion?.querySelectorAll(`.${this.options.titleClass}`);

    this.$contentAccordion = this.$accordion?.querySelectorAll(`.${this.options.contentClass}`);

    this.titleIndex = -1;

    this.render();
  }

  render() {
    this.initEventOnTitle();

    this.hideAllContent();

    this.showOnInitContent();

    this.addARIA();
  }

  initEventOnTitle() {
    this.handlerClickTitle = this.handlerClickTitle.bind(this);
    this.handleKeydownTitle = this.handleKeydownTitle.bind(this);
    this.$titlesAccordion.forEach((title, index) => {
      title.index = index;
      title.addEventListener('click', this.handlerClickTitle);
      title.addEventListener('keydown', this.handleKeydownTitle);
    });
  }

  handlerClickTitle(event) {
    this.titleIndex = event.currentTarget.index;

    this.toggleContent(this.titleIndex);
  }

  handleKeydownTitle(event) {
    this.titleIndex = event.currentTarget.index;

    switch (event.key) {
      case 'Enter':
        return this.toggleContent(event.currentTarget.index);
      case ' ':
        return this.toggleContent(event.currentTarget.index);
      default:
        return null;
    }
  }

  toggleContent(n) {
    if (this.isOpenContent(n)) {
      this.hideContent(n);
      this.changeHideARIA(n);
    } else {
      this.showContent(n);
      this.changeShowARIA(n);
    }
  }

  isOpenContent(n) {
    const { activeClass } = this.options;
    return this.$titlesAccordion[n].classList.contains(activeClass);
  }

  hideContent(n) {
    const $title = this.$titlesAccordion[n];
    const $content = this.$contentAccordion[n];
    const { activeClass, toggleChildClasses, onClose } = this.options;

    $title.classList.remove(activeClass);
    $content.style.maxHeight = 0;
    $content.style.opacity = 0;

    if (this.isСhildClass()) {
      toggleChildClasses.forEach((childClass) => {
        this.removeСhildClass($title, childClass);
        this.removeСhildClass($content, childClass);
      });
    }

    onClose($title);
  }

  showContent(n) {
    const $title = this.$titlesAccordion[n];
    const $content = this.$contentAccordion[n];
    const {
      activeClass, showMultiple, toggleChildClasses, onOpen,
    } = this.options;

    if (!showMultiple) { this.hideIsActiveContent(); }

    $title.classList.add(activeClass);
    $content.style.maxHeight = `${$content.scrollHeight}px`;
    $content.style.opacity = 1;

    if (this.isСhildClass()) {
      toggleChildClasses.forEach((childClass) => {
        this.addСhildClass($title, childClass);
        this.addСhildClass($content, childClass);
      });
    }
    onOpen($title);
  }

  hideAllContent() {
    this.$titlesAccordion.forEach((title, index) => {
      this.hideContent(index);
    });
  }

  hideIsActiveContent() {
    const { activeClass } = this.options;
    this.$titlesAccordion.forEach((title, index) => {
      if (title.closest(`.${activeClass}`)) {
        this.hideContent(index);
      }
    });
  }

  showOnInitContent() {
    const { showMultiple, showOnInit } = this.options;

    if (!showMultiple && showOnInit.length > 1) {
      console.log('attention: function showMultiple disabled!');
      return;
    }

    if (Array.isArray(showOnInit) && showOnInit.length > 0) {
      showOnInit.forEach((e) => {
        this.showContent(e);
      });
    }
  }

  isСhildClass() {
    const toggleChildClasses = Array.from(this.options.toggleChildClasses);
    return (Array.isArray(toggleChildClasses) && toggleChildClasses.length > 0);
  }

  addСhildClass(parentElements, classСhild) {
    const { activeClass } = this.options;
    parentElements.querySelectorAll(classСhild)
      ?.forEach((element) => {
        element.classList.add(activeClass);
      });
  }

  removeСhildClass(parentElements, classСhild) {
    const { activeClass } = this.options;
    parentElements.querySelectorAll(classСhild)
      ?.forEach((element) => {
        element.classList.remove(activeClass);
      });
  }

  addARIA() {
    const { ariaEnabled, activeClass } = this.options;
    if (ariaEnabled) {
      const $titles = this.$titlesAccordion;
      const $contents = this.$contentAccordion;

      $titles.forEach((title, index) => {
        const isActive = title.closest(`.${activeClass}`);
        const ariaExpanded = !!isActive;
        const ariaHidden = !isActive;

        title.setAttribute('role', 'button');
        title.setAttribute('tabindex', '0');
        title.setAttribute('aria-expanded', ariaExpanded);

        $contents[index].setAttribute('role', 'region');
        $contents[index].setAttribute('aria-hidden', ariaHidden);
      });
    }
  }

  removeARIA() {
    const $titles = this.$titlesAccordion;
    const $contents = this.$contentAccordion;

    $titles.forEach((title, index) => {
      title.removeAttribute('role');
      title.removeAttribute('tabindex');
      title.removeAttribute('aria-expanded');

      $contents[index].removeAttribute('role');
      $contents[index].removeAttribute('aria-hidden');
    });
  }

  changeShowARIA(n) {
    const { ariaEnabled } = this.options;
    if (ariaEnabled) {
      const $title = this.$titlesAccordion[n];
      const $content = this.$contentAccordion[n];

      $title.setAttribute('aria-expanded', true);
      $content.setAttribute('aria-hidden', false);
    }
  }

  changeHideARIA(n) {
    const { ariaEnabled } = this.options;
    if (ariaEnabled) {
      const $title = this.$titlesAccordion[n];
      const $content = this.$contentAccordion[n];

      $title.setAttribute('aria-expanded', false);
      $content.setAttribute('aria-hidden', true);
    }
  }

  destroyEventOnTitle() {
    this.$titlesAccordion.forEach((title) => {
      title.removeEventListener('click', this.handlerClickTitle);
      title.removeEventListener('keydown', this.handleKeydownTitle);
    });
  }
}

export default Accordion;
