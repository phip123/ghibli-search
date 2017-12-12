import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import * as fromFilms from '../actions/films.action';

export const filmAdapter = createEntityAdapter<Film>();

export interface FilmState extends EntityState<Film> {
  loaded: boolean;
  loading: boolean;
}

const defaultFilm: FilmState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false
};

export const initialState: FilmState = filmAdapter.getInitialState(defaultFilm);

export function reducer(
  state = initialState,
  action: fromFilms.FilmsAction
): FilmState {
  switch (action.type) {
  case fromFilms.LoadFilms


  }
  return initialState;
}
