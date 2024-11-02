import { generateFilm } from '../mock/film';

export default class FilmsModel{
  films = Array.from({ length: 10 }, generateFilm);

  getFilms() {
    return this.films;
  }
}
