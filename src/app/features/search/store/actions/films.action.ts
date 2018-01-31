import {Action} from '@ngrx/store';
import {Film} from '@app/core/models/film.model';

export const LOAD_FILMS = '[Films] Load Films';
export const LOAD_FILMS_SUCCESS = '[Films] Load Films Success';
export const LOAD_FILMS_FAIL = '[Films] Load Films Fail';
export const SET_FILM_FILTER = '[Films] Set Film Filter';
export const LOAD_FILM = '[Films] Load Film';
export const LOAD_FILM_SUCCESS = '[Films] Load Film Success';
export const LOAD_FILM_FAIL = '[Films] Load Film Fail';

export const LOAD_FILMS_FOR_LOCATION = '[Location] Load Films for Location';
export const LOAD_FILMS_FOR_LOCATION_SUCCESS = '[Location] Load Films for Location Success';
export const LOAD_FILMS_FOR_LOCATION_FAIL = '[Location] Load Films for Location Fail';


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

export class LoadFilm implements Action {
  readonly type = LOAD_FILM;

  constructor(public payload: number) {
  }
}

export class LoadFilmSuccess implements Action {
  readonly type = LOAD_FILM_SUCCESS;

  constructor(public payload: Film) {
  }
}

export class LoadFilmFail implements Action {
  readonly type = LOAD_FILM_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadFilmsForLocation implements Action {
  readonly type = LOAD_FILMS_FOR_LOCATION;

  constructor(public payload: string[]) {
  }
}

export class LoadFilmsForLocationFail implements Action {
  readonly type = LOAD_FILMS_FOR_LOCATION_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadFilmsForLocationSuccess implements Action {
  readonly type = LOAD_FILMS_FOR_LOCATION_SUCCESS;

  constructor(public payload: Film[]) {
  }
}

export type FilmsAction =
  | LoadFilms
  | LoadFilmsSuccess
  | LoadFilmsFail
  | SetFilmFilter
  | LoadFilm
  | LoadFilmSuccess
  | LoadFilmFail
  | LoadFilmsForLocation
  | LoadFilmsForLocationFail
  | LoadFilmsForLocationSuccess;
