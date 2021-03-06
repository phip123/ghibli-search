import {Action} from '@ngrx/store';
import {Species} from '@app/core/models/species.model';

export const LOAD_SPECIES_FOR_PERSON = '[Species] Load Species for Person';
export const LOAD_SPECIES_FOR_PERSON_SUCCESS = '[Species] Load Species for Person Success';
export const LOAD_SPECIES_FOR_PERSON_FAIL = '[Species] Load Species for Person Fail';

export const LOAD_SPECIES = '[Species] Load Species';
export const LOAD_SPECIES_SUCCESS = '[Species] Load Species Success';
export const LOAD_SPECIES_FAIL = '[Species] Load Species Fail';

export const LOAD_SPECIES_DETAIL = '[Species] Load Species Detail';
export const LOAD_SPECIES_DETAIL_SUCCESS = '[Species] Load Species Detail Success';
export const LOAD_SPECIES_DETAIL_FAIL = '[Species] Load Species Detail Fail';

export const SET_SPECIES_FILTER = '[Species] Set Species Filter';

export class LoadSpecies implements Action {
  readonly type = LOAD_SPECIES;
}

export class LoadSpeciesSuccess implements Action {
  readonly type = LOAD_SPECIES_SUCCESS;

  constructor(public payload: Species[]) {
  }
}

export class LoadSpeciesFail implements Action {
  readonly type = LOAD_SPECIES_FAIL;

  constructor(public payload: any) {
  }
}

export class SetSpeciesFilter implements Action {
  readonly type = SET_SPECIES_FILTER;

  constructor(public payload: string) {
  }
}

export class LoadSpeciesForPerson implements Action {
  readonly type = LOAD_SPECIES_FOR_PERSON;

  constructor(public payload: string) {
  }
}

export class LoadSpeciesForPersonSuccess implements Action {
  readonly type = LOAD_SPECIES_FOR_PERSON_SUCCESS;

  constructor(public payload: Species) {
  }
}

export class LoadSpeciesForPersonFail implements Action {
  readonly type = LOAD_SPECIES_FOR_PERSON_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadSpeciesDetails implements Action {
  readonly type = LOAD_SPECIES_DETAIL;

  constructor(public payload: string) {
  }

}

export class LoadSpeciesDetailsSuccess implements Action {
  readonly type = LOAD_SPECIES_DETAIL_SUCCESS;

  constructor(public payload: Species) {
  }

}

export class LoadSpeciesDetailsFail implements Action {
  readonly type = LOAD_SPECIES_DETAIL_FAIL;

  constructor(public payload: any) {
  }

}

export type SpeciesAction =
  | LoadSpeciesForPerson
  | LoadSpeciesForPersonSuccess
  | LoadSpeciesForPersonFail
  | SetSpeciesFilter
  | LoadSpecies
  | LoadSpeciesSuccess
  | LoadSpeciesFail
  | LoadSpeciesDetails
  | LoadSpeciesDetailsSuccess
  | LoadSpeciesDetailsFail;
