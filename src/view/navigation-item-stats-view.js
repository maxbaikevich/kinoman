import {createElement} from '../render.js';
const createNavigationItemStatTemplate = () => (
  `<a href="#stats" class="main-navigation__additional">Stats</a>
  `
);
export default class createNavigationItemStat {
  #element;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createNavigationItemStatTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}

