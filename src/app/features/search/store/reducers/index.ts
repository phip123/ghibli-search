import * as fromFilms from './films.reducer';
import * as fromPeople from './people.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface SearchState {
  films: fromFilms.FilmState;
  people: fromPeople.PersonState;
}

export const reducers: ActionReducerMap<SearchState> = {
  films: fromFilms.reducer,
  people: fromPeople.reducer
};

export const getSearchState = createFeatureSelector<SearchState>('search');
