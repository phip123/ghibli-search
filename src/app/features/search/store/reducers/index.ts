import * as fromFilms from './films.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface SearchState {
  films: fromFilms.FilmState;
}

export const reducers: ActionReducerMap<SearchState> = {
  films: fromFilms.reducer,
};

export const getSearchState = createFeatureSelector<SearchState>('search');
