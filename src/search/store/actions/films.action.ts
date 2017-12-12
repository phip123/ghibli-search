import {Action} from '@ngrx/store';

export const LOAD_FILMS = '[Films] Load Films';
export const LOAD_FILMS_SUCCESS = '[Films] Load Films Success';
export const LOAD_FILMS_FAIL = '[Films] Load Films Fail';

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


export type FilmsAction =
  | LoadFilms
  | LoadFilmsSuccess
  | LoadFilmsFail
