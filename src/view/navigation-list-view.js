import {createElement} from '../render.js';
const createNavigationListTemplate = () => (
  `<nav class="main-navigation"></nav>
  `
);
export default class createNavigationListView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createNavigationListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}


