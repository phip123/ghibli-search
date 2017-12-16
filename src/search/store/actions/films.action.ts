import {Action} from '@ngrx/store';

export const LOAD_FILMS = '[Films] Load Films';
export const LOAD_FILMS_SUCCESS = '[Films] Load Films Success';
export const LOAD_FILMS_FAIL = '[Films] Load Films Fail';
export const SET_FILM_FILTER = '[Films] Set Film Filter';

export class LoadFilms implements Action {
  readonly type = LOAD_FILMS;
}

export class LoadFilmsSuccess implements Action {
  readonly type = LOAD_FILMS_SUCCESS;

  constructor(public payload: Film[]) {
  }
}

export class LoadFilmsFail implements Action {
  readonly type = LOAD_FILMS_FAIL;

  constructor(public payload: any) {
  }
}

export class SetFilmFilter implements Action {
  readonly type = SET_FILM_FILTER;

  constructor(public payload: string) {
  }
}

export type FilmsAction =
  | LoadFilms
  | LoadFilmsSuccess
  | LoadFilmsFail
  | SetFilmFilter;
