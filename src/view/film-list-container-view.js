import {createElement} from '../render.js';

const createFilmListContainerViewTemplate = () => '<div class="films-list__container"></div>';

export default class FilmListContainerView {
  getTemplate() {
    return createFilmListContainerViewTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
