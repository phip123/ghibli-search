import {Action} from '@ngrx/store';
import {Location} from '@app/core/models/location.model';

export const LOAD_LOCATIONS = '[Location] Load Locations';
export const LOAD_LOCATIONS_SUCCESS = '[Location] Load Locations Success';
export const LOAD_LOCATIONS_FAIL = '[Location] Load Locations Fail';

export const LOAD_LOCATION = '[Location] Load Location';
export const LOAD_LOCATION_SUCCESS = '[Location] Load Location Success';
export const LOAD_LOCATION_FAIL = '[Location] Load Location Fail';

export const SET_LOCATIONS_FILTER = '[Location] Set Locations Filter';

export class LoadLocations implements Action {
  readonly type = LOAD_LOCATIONS;

}

export class LoadLocationsSuccess implements Action {
  readonly type = LOAD_LOCATIONS_SUCCESS;

  constructor(public payload: Location[]) {
  }

}

export class LoadLocationsFail implements Action {
  readonly type = LOAD_LOCATIONS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadLocation implements Action {
  readonly type = LOAD_LOCATION;

  constructor(public payload: string) {
  }

}

export class LoadLocationSuccess implements Action {
  readonly type = LOAD_LOCATION_SUCCESS;

  constructor(public payload: Location) {
  }

}

export class LoadLocationFail implements Action {
  readonly type = LOAD_LOCATION_FAIL;

  constructor(public payload: any) {
  }
}

export class SetLocationsFilter implements Action {
  readonly type = SET_LOCATIONS_FILTER;

  constructor(public payload: string) {
  }
}


export type LocationsAction =
  | LoadLocation
  | LoadLocationFail
  | LoadLocationSuccess
  | LoadLocations
  | LoadLocationsFail
  | LoadLocationsSuccess
  | SetLocationsFilter;
