import {createEntityAdapter, EntityState} from '@ngrx/entity';
import * as fromFilms from '../actions/films.action';
import {Film} from '@app/core/models/film.model';

export const filmAdapter = createEntityAdapter<Film>();

export interface FilmState extends EntityState<Film> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  filteredFilms: Film[];
  filmsForLocation: Film[];
  filmsForLocationLoading: boolean;
}

const defaultFilm: FilmState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  filteredFilms: [],
  filmsForLocation: [],
  filmsForLocationLoading: false,
};

export const initialState: FilmState = filmAdapter.getInitialState(defaultFilm);

export function reducer(state = initialState,
                        action: fromFilms.FilmsAction): FilmState {
  switch (action.type) {
    case fromFilms.LOAD_FILMS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromFilms.LOAD_FILMS_SUCCESS: {
      const films = action.payload;
      const newState = filmAdapter.addAll(films, state);
      let filteredFilms = [];

      if (newState.filter === '') {
        filteredFilms = films;
      }

      return {
        ...newState,
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

    case fromFilms.LOAD_FILM_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromFilms.LOAD_FILM_SUCCESS: {
      const changes = action.payload;
      const id = changes.id;
      state = filmAdapter.addOne({id, ...changes}, state);
      return {
        ...state
      };
    }

    case fromFilms.LOAD_FILMS_FOR_LOCATION: {
      return {
        ...state,
        filmsForLocationLoading: true
      };
    }

    case fromFilms.LOAD_FILMS_FOR_LOCATION_SUCCESS: {
      const newstate = filmAdapter.addAll(action.payload, state);
      const filmsForLocation = action.payload;
      return {
        ...newstate,
        filmsForLocation,
        filmsForLocationLoading: false
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
export const getFilmsForLocation = (state: FilmState) => state.filmsForLocation;
export const getFilmsForLocationLoading = (state: FilmState) => state.filmsForLocationLoading;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = filmAdapter.getSelectors();
