import {createElement} from '../render';
const topRatedTemplate = () => (
  `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
  </section>`
);
export default class TopRated {
  #element;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return topRatedTemplate();
  }
}
