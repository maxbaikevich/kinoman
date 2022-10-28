import {renderTemplate,  RenderPosition} from './render';
import {createAvatarTemplate} from './view/avatar-view';
import {createNavigationList} from './view/navigation-list-view';
import {createNavigationItem} from "./view/navigation-item-view";
import {createNavigationItemStat} from './view/navigation-item-stats-view'
import {sortListTemplate} from './view/sort-list-view'
import {filmsTemplate} from './view/films-view'
import {filmsListTemplate} from './view/films-list-view'
import {filmCardTemplate} from './view/film-card-view'
import {showMoreBtnTemplate} from './view/show-more-view'
const countFilmsCard = 5
const siteHeaderElement = document.querySelector('.header');
renderTemplate(siteHeaderElement, createAvatarTemplate(), RenderPosition.BEFOREEND);
const siteMeinElement = document.querySelector('.main')
renderTemplate(siteMeinElement, createNavigationList(), RenderPosition.BEFOREEND)
const siteNavigationList = siteMeinElement.querySelector('.main-navigation')
renderTemplate(siteNavigationList, createNavigationItem(), RenderPosition.BEFOREEND)
renderTemplate(siteNavigationList, createNavigationItemStat(), RenderPosition.BEFOREEND)
renderTemplate(siteMeinElement, sortListTemplate(), RenderPosition.BEFOREEND)
renderTemplate(siteMeinElement, filmsTemplate(), RenderPosition.BEFOREEND)
const siteFilmsContainer = siteMeinElement.querySelector('.films')
renderTemplate(siteFilmsContainer, filmsListTemplate(), RenderPosition.BEFOREEND)
const filmsListContainer  = siteMeinElement.querySelector('.films-list__container')

for(let i=0; i < countFilmsCard; i++) {
  renderTemplate(filmsListContainer, filmCardTemplate(), RenderPosition.BEFOREEND)
}
const siteFilmList = siteFilmsContainer.querySelector('.films-list')

renderTemplate(siteFilmList, showMoreBtnTemplate(), RenderPosition.BEFOREEND)



