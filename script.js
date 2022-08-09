/**
 * Перелистывание страниц
 * 
 * Добавить дата атрибуты: 
 * [data-pages-parent] к родителю,
 * [data-pages-element="page-name"] на страницу, на которую будем переключаться,
 * [data-pages-button="page-name"] на кнопку, по которой переключается страница,
 * [data-pages-back] на кнопку, по которой возвращаемся на предыдущую страницу
 */
class Pages {
  constructor() {
    // DOM элемент родителя
    this.parentsNode = document.querySelectorAll('[data-pages-parent]')

    this._init();
  }

  _init() {
    this.parentsNode.forEach(parent => {
      // DOM элемент кнопок перелистывания
      const openButtonNodes = parent.querySelectorAll('[data-pages-button]');

      // DOM элемент кнопок закрытия страницы
      const closeButtonNodes = parent.querySelectorAll('[data-pages-back]');

      openButtonNodes.forEach(button => {
        this.bindOpenPageButton(button, parent)
      });

      closeButtonNodes.forEach(button => {
        this.bindButtonBack(button);
      });
    });
  }

  // Добавляем активный класс по нажатию кнопки
  bindOpenPageButton(button, parent) {
    button.addEventListener('click', () => {
      parent.querySelector(`[data-pages-element="${button.dataset.pagesButton}"]`).classList.add('is-active');
    })
  }

  // Убираем активный класс у родителя по нажатию кнопки
  bindButtonBack(button) {
    button.addEventListener('click', () => {
      button.closest('[data-pages-element]').classList.remove('is-active');
    })
  }
}

new Pages();