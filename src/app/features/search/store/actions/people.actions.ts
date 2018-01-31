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

export const LOAD_PERSON = '[Persons] Load Person';
export const LOAD_PERSON_SUCCESS = '[Persons] Load Person Success';
export const LOAD_PERSON_FAIL = '[Persons] Load Person Fail';

export const LOAD_PEOPLE_FOR_SPECIES = '[People] Load People For Species';
export const LOAD_PEOPLE_FOR_SPECIES_FAIL = '[People] Load People For Species Fail';
export const LOAD_PEOPLE_FOR_SPECIES_SUCCESS = '[People] Load People For Species Success';

export const LOAD_PEOPLE_FOR_LOCATION = '[Location] Load People for Location';
export const LOAD_PEOPLE_FOR_LOCATION_SUCCESS = '[Location] Load People for Location Success';
export const LOAD_PEOPLE_FOR_LOCATION_FAIL = '[Location] Load People for Location Fail';


export class LoadPerson implements Action {
  readonly type = LOAD_PERSON;

  constructor(public payload: string) {
  }
}


export class LoadPersonSuccess implements Action {
  readonly type = LOAD_PERSON_SUCCESS;

  constructor(public payload: Person) {
  }
}


export class LoadPersonFail implements Action {
  readonly type = LOAD_PERSON_FAIL;

  constructor(public payload: any) {
  }
}

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

export class LoadPeopleForSpecies implements Action {
  readonly type = LOAD_PEOPLE_FOR_SPECIES;

  constructor(public payload: string) {
  }

}

export class LoadPeopleForSpeciesFail implements Action {
  readonly type = LOAD_PEOPLE_FOR_SPECIES_FAIL;

  constructor(public payload: any) {
  }

}

export class LoadPeopleForSpeciesSuccess implements Action {
  readonly type = LOAD_PEOPLE_FOR_SPECIES_SUCCESS;

  constructor(public payload: Person[]) {
  }
}

export class LoadPeopleForLocation implements Action {
  readonly type = LOAD_PEOPLE_FOR_LOCATION;

  constructor(public payload: string[]) {
  }
}

export class LoadPeopleForLocationSuccess implements Action {
  readonly type = LOAD_PEOPLE_FOR_LOCATION_SUCCESS;

  constructor(public payload: Person[]) {
  }
}

export class LoadPeopleForLocationFail implements Action {
  readonly type = LOAD_PEOPLE_FOR_LOCATION_FAIL;

  constructor(public payload: any) {
  }
}


export type PersonsActions =
  | LoadPersonsForFilm
  | LoadPersonsForFilmFail
  | LoadPersonsForFilmSuccess
  | SetPeopleFilter
  | LoadPersons
  | LoadPersonsFail
  | LoadPersonsSuccess
  | LoadPerson
  | LoadPersonFail
  | LoadPersonSuccess
  | LoadPeopleForSpecies
  | LoadPeopleForSpeciesFail
  | LoadPeopleForSpeciesSuccess
  | LoadPeopleForLocation
  | LoadPeopleForLocationFail
  | LoadPeopleForLocationSuccess;

