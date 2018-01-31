import * as fromLocations from '../actions/locations.action';
import {Location} from '@app/core/models/location.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const locationAdapter = createEntityAdapter<Location>();

export interface LocationState extends EntityState<Location> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  selectedLocations: Location[];
  filteredLocations: Location[];
}

const defaultLocation: LocationState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  selectedLocations: [],
  filteredLocations: [],
};

export const initialState: LocationState = locationAdapter.getInitialState(
  defaultLocation,
);

export function reducer(state = initialState,
                        action: fromLocations.LocationsAction): LocationState {
  switch (action.type) {

    case fromLocations.LOAD_LOCATIONS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromLocations.LOAD_LOCATION_SUCCESS: {
      const changes = action.payload;
      const id = changes.id;
      return locationAdapter.addOne({id, ...changes}, state);
    }

    case fromLocations.LOAD_LOCATIONS_SUCCESS: {
      const locations = action.payload;
      const newState = locationAdapter.addAll(locations, state);
      let filteredLocations = [];

      if (newState.filter === '') {
        filteredLocations = locations;
      }

      return {
        ...newState,
        loading: false,
        loaded: true,
        filteredLocations
      };
    }

    case fromLocations.SET_LOCATIONS_FILTER: {
      let filter;

      if (!action.payload) {
        filter = '';
      } else {
        filter = action.payload;
      }

      const filteredLocations = selectAll(state).filter(
        l => l.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1,
      );


      return {
        ...state,
        filter: action.payload,
        filteredLocations,
      };
    }
  }
  return state;
}

export const selectedLocations = (state: LocationState) => state.selectedLocations;
export const filteredLocations = (state: LocationState) => state.filteredLocations;
export const getLocationsLoaded = (state: LocationState) => state.loaded;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = locationAdapter.getSelectors();

