import {createElement} from '../render.js';

const filmsListTemplate = () => (
  `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  </section>
  `
);
export default class createFilmsList  {
  #element;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    return filmsListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}

