import {createElement} from '../render.js';
const createNavigationItemTemplate = (filterDate, isChecked) => {
  const {name, count} = filterDate;
  return (
    `<a href="#${name}" class="main-navigation__item ${isChecked ? 'main-navigation__item--active' : ''}">${name} ${count !==''?`<span class="main-navigation__item-count">${count}</span>`: ''}</a>`
  );
};
export const createNavigationItemsTemplate = (navigationData) => {
  const navigationItemTemplate = navigationData
    .map((filter, index)=> createNavigationItemTemplate(filter, index === 0))
    .join('');
  return `<div class="main-navigation__items">${navigationItemTemplate}</div>`;
};

export default  class createNavigationItemsView {
  #element;
  #navigationData;

  constructor(navigationData) {
    this.#navigationData = navigationData;
  }

  get element () {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    return createNavigationItemsTemplate(this.#navigationData);
  }

  removeElement() {
    this.#element = null;
  }
}
