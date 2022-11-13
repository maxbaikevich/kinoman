import {createElement} from '../render';
const filmsTemplate = () => (
  `<section class="films">
   </section>
  `
);
export default class createFilms {
  #element;

  get element () {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return filmsTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
