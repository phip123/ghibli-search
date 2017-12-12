import * as fromFilms from './films.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface SearchState {
  films: fromFilms.FilmState;
}

export const reducers: ActionReducerMap<SearchState> = {
  films: fromFilms.reducer;
}
