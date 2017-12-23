import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFilms from '../actions/films.action';
import { getAllFilms } from '../selectors';
import {Film} from '@app/core/models/film.model';

export const filmAdapter = createEntityAdapter<Film>();

export interface FilmState extends EntityState<Film> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  filteredFilms: Film[];
}

const defaultFilm: FilmState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  filteredFilms: [],
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
      let filteredFilms = [];

      if (state.filter == '') {
        filteredFilms = films;
      }

      return {
        ...state,
        loading: false,
        loaded: true,
        filteredFilms,
      };
    }

    case fromFilms.LOAD_FILMS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromFilms.SET_FILM_FILTER: {
      let filter;

      if (!action.payload) {
        filter = '';
      } else {
        filter = action.payload;
      }

      const filteredFilms = selectAll(state).filter(
        f => f.title.toUpperCase().indexOf(filter.toUpperCase()) !== -1,
      );

      return {
        ...state,
        filter: action.payload,
        filteredFilms,
      };
    }

    case fromFilms.LOAD_FILM_SUCCESS: {
      const changes = action.payload;
      const id = changes.id;
      state = filmAdapter.addOne({ id, ...changes }, state);
      return {
        ...state
      };
    }
  }
  return state;
}

export const getFilmsLoading = (state: FilmState) => state.loading;
export const getFilmsLoaded = (state: FilmState) => state.loaded;
export const getFilmsEntities = (state: FilmState) => state.entities;
export const getFilmFilter = (state: FilmState) => state.filter;
export const getFilterFilms = (state: FilmState) => state.filteredFilms;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = filmAdapter.getSelectors();
