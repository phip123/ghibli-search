import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromFilms from '../reducers/films.reducer';
import { getFilmFilter } from '../reducers/films.reducer';

export const getFilmState = createSelector(
  fromFeature.getSearchState,
  (state: fromFeature.SearchState) => state.films,
);

export const getFilmsEntities = createSelector(
  getFilmState,
  fromFilms.selectEntities,
);

export const getAllFilms = createSelector(getFilmState, fromFilms.selectAll);

export const getFilmsLoaded = createSelector(
  getFilmState,
  fromFilms.getFilmsLoaded,
);

export const getFilmsLoading = createSelector(
  getFilmState,
  fromFilms.getFilmsLoading,
);

export const getFilteredFilms = createSelector(
  getFilmState,
  fromFilms.getFilterFilms

);
