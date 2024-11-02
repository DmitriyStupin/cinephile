import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmButtonMoreView from '../view/film-button-show-more-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmDetailsView from '../view/film-details-view.js';

import {render} from '../render.js';

import {FILM_COUNT} from '../const.js';

export default class FilmsPresenter {
  sortComponent = new SortView();
  filmsComponent = new FilmsView();
  filmListComponent = new FilmListView();
  filmListContainerComponent = new FilmListContainerView();
  filmButtonMoreComponent = new FilmButtonMoreView();

  init = (container, filmsModel) => {
    this.container = container;
    this.filmsModel = filmsModel;
    this.boardFilms = [...this.filmsModel.getFilms()];

    render(this.sortComponent, this.container);
    render(this.filmsComponent, this.container);
    render(this.filmListComponent, this.filmsComponent.getElement());
    render(this.filmListContainerComponent, this.filmListComponent.getElement());

    for (let i = 0; i < FILM_COUNT; i++) {
      render(new FilmCardView(), this.filmListContainerComponent.getElement());
    }

    render(this.filmButtonMoreComponent, this.filmListComponent.getElement());

    render(new FilmDetailsView(), this.container.parentElement);
  };
}
