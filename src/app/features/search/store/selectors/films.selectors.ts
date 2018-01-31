import {createSelector} from '@ngrx/store';

import * as fromRoot from '@app/root/store';
import * as fromFeature from '../reducers';
import * as fromFilms from '../reducers/films.reducer';
import {Film} from '@app/core/models/film.model';

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

export const getSelectedFilm = createSelector(
  getFilmsEntities,
  fromRoot.getRouterState,
  (entities, router): Film => {
    return router.state && entities[router.state.params.filmId];
  }
);

export const getFilmsForLocation = createSelector(
  getFilmState,
  fromFilms.getFilmsForLocation,
);

export const getFilmsForLocationLoading = createSelector(
  getFilmState,
  fromFilms.getFilmsForLocationLoading,
);
