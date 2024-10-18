import { createElement } from '../render.js';

const createFilmsViewTemplate = () => `
  <section class="films"></section>
`;

export default class FilmsView {
  getTemplate() {
    return createFilmsViewTemplate();
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
