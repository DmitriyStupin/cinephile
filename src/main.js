import HeaderProfileView from './view/header-profile-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import FilterView from './view/filter-view.js';
import FilmsModel from './model/films-model.js';

import FilmsPresenter from './presenter/films-presenter.js';

import {render} from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer__statistics');
const siteMainElement = document.querySelector('.main');

const filmsModel = new FilmsModel();
const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), siteHeaderElement);
render(new FooterStatisticsView(), siteFooterElement);
render(new FilterView(), siteMainElement);

filmsPresenter.init(siteMainElement, filmsModel);
