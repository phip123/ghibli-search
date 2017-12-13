import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
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
  loading: false,
};

export const initialState: FilmState = filmAdapter.getInitialState(defaultFilm);

export function reducer(
  state = initialState,
  action: fromFilms.FilmsAction,
): FilmState {
  switch (action.type) {
    case fromFilms.LOAD_FILMS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromFilms.LOAD_FILMS_SUCCESS: {
      const films = action.payload;
      state = filmAdapter.addAll(films, state);

      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromFilms.LOAD_FILMS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }
  return initialState;
}

export const getFilmsLoading = (state: FilmState) => state.loading;
export const getFilmsLoaded = (state: FilmState) => state.loaded;
export const getFilmsEntities = (state: FilmState) => state.entities;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = filmAdapter.getSelectors();
