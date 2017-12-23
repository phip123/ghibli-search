import {Action} from '@ngrx/store';
import {Person} from '@app/core/models/person.model';

export const LOAD_PERSONS = '[Persons] Load Persons';
export const LOAD_PERSONS_SUCCESS = '[Persons] Load Persons Success';
export const LOAD_PERSONS_FAIL = '[Persons] Load Persons Fail';

export const LOAD_PERSONS_FOR_FILM = '[Persons] Load Persons for Film';
export const LOAD_PERSONS_FOR_FILM_SUCCESS =
  '[Persons] Load Persons for Film Success';
export const LOAD_PERSONS_FOR_FILM_FAIL =
  '[Persons] Load Persons for Film Fail';
export const SET_PEOPLE_FILTER = '[Persons] Set Filter';

export class LoadPersons implements Action {
  readonly type = LOAD_PERSONS;

}

export class LoadPersonsSuccess implements Action {
  readonly type = LOAD_PERSONS_SUCCESS;

  constructor(public payload: Person[]) {
  }
}

export class LoadPersonsFail implements Action {
  readonly type = LOAD_PERSONS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadPersonsForFilm implements Action {
  readonly type = LOAD_PERSONS_FOR_FILM;

  constructor(public payload: string) {
  }
}

export class LoadPersonsForFilmSuccess implements Action {
  readonly type = LOAD_PERSONS_FOR_FILM_SUCCESS;

  constructor(public payload: Person[]) {
  }
}

export class LoadPersonsForFilmFail implements Action {
  readonly type = LOAD_PERSONS_FOR_FILM_FAIL;

  constructor(public payload: any) {
  }
}

export class SetPeopleFilter implements Action {
  readonly type = SET_PEOPLE_FILTER;

  constructor(public payload: string) {
  }
}

export type PersonsActions =
  | LoadPersonsForFilm
  | LoadPersonsForFilmFail
  | LoadPersonsForFilmSuccess
  | SetPeopleFilter
  | LoadPersons
  | LoadPersonsFail
  | LoadPersonsSuccess;
