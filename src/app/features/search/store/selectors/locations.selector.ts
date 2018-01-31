import {Location} from '@app/core/models/location.model';
import * as fromFeature from '../reducers';
import * as fromLocations from '../reducers/locations.reducer';
import * as fromRoot from '@app/root/store';
import {createSelector} from '@ngrx/store';

export const getLocationState = createSelector(
  fromFeature.getSearchState,
  (state: fromFeature.SearchState) => state.locations,
);

export const getLocationEntities = createSelector(
  getLocationState,
  fromLocations.selectEntities,
);

export const getAllLocations = createSelector(
  getLocationState,
  fromLocations.selectAll,
);

export const getSelectedLocations = createSelector(
  getLocationState,
  fromLocations.selectedLocations,
);

export const getFilteredLocations = createSelector(
  getLocationState,
  fromLocations.filteredLocations,
);

export const getSelectedLocation = createSelector(
  getLocationEntities,
  fromRoot.getRouterState,
  (entities, router): Location => {
    return router.state && entities[router.state.params.locationId];
  }
);

export const getLocationsLoaded = createSelector(
  getLocationState,
  fromLocations.getLocationsLoaded,
);
