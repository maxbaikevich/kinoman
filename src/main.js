import {createAvatarTemplate} from './view/avatar-view'
import {renderTemplate,  RenderPosition} from './render'
const siteHeaderElement = document.querySelector('.header');
renderTemplate(siteHeaderElement, createAvatarTemplate(), RenderPosition.BEFOREEND);
