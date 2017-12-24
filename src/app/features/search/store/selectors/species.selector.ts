import * as fromFeature from '../reducers';
import * as fromSpecies from '../reducers/species.reducer';
import {createSelector} from '@ngrx/store';

export const getSpeciesState = createSelector(
  fromFeature.getSearchState,
  (state: fromFeature.SearchState) => state.species,
);

export const getSpeciesEntities = createSelector(
  getSpeciesState,
  fromSpecies.selectEntities,
);

export const getAllSpecies = createSelector(
  getSpeciesState,
  fromSpecies.selectAll,
);

export const getSelectedSpecies = createSelector(
  getSpeciesState,
  fromSpecies.selectedSpecies,
);

export const getFilteredSpecies = createSelector(
  getSpeciesState,
  fromSpecies.filteredSpecies,
);

export const getSpeciesForPerson = createSelector(
  getSpeciesState,
  fromSpecies.getSpeciesForPerson,
);

export const getSpeciesLoaded = createSelector(
  getSpeciesState,
  fromSpecies.getSpeciesLoaded,
);

