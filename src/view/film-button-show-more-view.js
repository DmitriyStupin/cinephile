import { createElement } from '../render.js';

const createFilmShowMoreButton = () => '<button class="films-list__show-more">Show more</button>';

export default class FilmShowMoreButtonView {
  getTemplate() {
    return createFilmShowMoreButton();
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
