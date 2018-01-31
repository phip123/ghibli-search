import * as fromFilms from './films.reducer';
import * as fromPeople from './people.reducer';
import * as fromSpecies from './species.reducer';
import * as fromLocations from './locations.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface SearchState {
  films: fromFilms.FilmState;
  people: fromPeople.PersonState;
  locations: fromLocations.LocationState;
  species: fromSpecies.SpeciesState;
}

export const reducers: ActionReducerMap<SearchState> = {
  films: fromFilms.reducer,
  people: fromPeople.reducer,
  locations: fromLocations.reducer,
  species: fromSpecies.reducer,
};

export const getSearchState = createFeatureSelector<SearchState>('search');
