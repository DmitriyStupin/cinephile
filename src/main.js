import HeaderProfileView from './view/header-profile-view.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.header');

render(new HeaderProfileView(), siteHeaderElement);
