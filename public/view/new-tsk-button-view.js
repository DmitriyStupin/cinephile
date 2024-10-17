// Вспомогательная функция для превращения строки с HTML в DOM-элементы
import {createElement} from '../render.js';

// Функция, которая будет возвращать строку с HTML-разметкой компонента
const createNewTaskButtonView = () => '...';

// Класc - он же сам компонент
export default class NewTaskButtonView {
  getTemplate() {
    return createNewTaskButtonView(); // Кстати, можно не создавать отдельную createTemplate функцию, а сразу возвращать строку с HTML-разметкой компонента из метода класса
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
