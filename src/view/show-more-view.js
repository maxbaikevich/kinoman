import {createElement} from '../render';
const createShowMoreBtnTemplate = () => (
  `<button class="films-list__show-more">Show more</button>
  `
);

export default class showMoreBtn {
  #element;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createShowMoreBtnTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
