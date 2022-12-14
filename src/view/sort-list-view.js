import {renderElement} from '../render';
const createSortListTemplate = () => (
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);
export default class createSortList {
  #element;
  get element() {
    if(!this.#element) {
      this.#element = renderElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createSortListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
