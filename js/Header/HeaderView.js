import { createElement } from '../helper/createElement.js';

export class HeaderView {
  constructor(controller) {
    this.controller = controller;

    this.containerElem = createElement('div', {
      className: 'container header__container',
    });

    this.titleElem = createElement('h1', {
      className: 'header__title',
      textContent: 'Brain Cards',
    });

    this.subtitleElem = createElement('h2', {
      className: 'header__subtitle',
      textContent: 'Категории',
    });

    this.headerBtnElem = createElement('button', {
      className: 'header__btn',
      textContent: 'Добавить категорию',
    });
  }

  updateTitle(title) {
    this.subtitleElem.textContent = title;
  }


  render(headerElem) {
    headerElem.append(this.containerElem);
    this.containerElem.append(
      this.titleElem,
      this.subtitleElem,
      this.headerBtnElem,
    );
  }
}
