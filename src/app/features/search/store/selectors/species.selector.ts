import * as fromFeature from '../reducers';
import * as fromSpecies from '../reducers/species.reducer';
import {createSelector} from '@ngrx/store';
import * as fromRoot from '@app/root/store';
import {Person} from '@app/core/models/person.model';
import {Species} from '@app/core/models/species.model';

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
  getSpeciesEntities,
  fromRoot.getRouterState,
  (entities, router): Species => {
    return router.state && entities[router.state.params.speciesId];
  }
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

