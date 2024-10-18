import {createElement} from '../render.js';

const createFilmListViewTemplate = () =>
  `
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </div>
  `;

export default class FilmListView {
  getTemplate() {
    return createFilmListViewTemplate();
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
