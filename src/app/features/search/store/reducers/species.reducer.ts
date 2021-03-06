import * as fromSpecies from '../actions/species.action';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Species} from '@app/core/models/species.model';

export const speciesAdapter = createEntityAdapter<Species>();

export interface SpeciesState extends EntityState<Species> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  speciesForPerson: Species;
  speciesForPersonLoading: boolean;
  selectedSpecies: Species[];
  filteredSpecies: Species[];
}

const EMPTY_SPECIES: Species = {
  id: '',
  classification: '',
  eye_colors: [],
  films: [],
  hair_colors: [],
  name: '',
  people: [],
};

const defaultSpecies: SpeciesState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  selectedSpecies: [],
  speciesForPerson: EMPTY_SPECIES,
  speciesForPersonLoading: false,
  filteredSpecies: [],
};

export const initialState: SpeciesState = speciesAdapter.getInitialState(
  defaultSpecies,
);

export function reducer(state = initialState,
                        action: fromSpecies.SpeciesAction): SpeciesState {
  switch (action.type) {

    case fromSpecies.LOAD_SPECIES_FOR_PERSON: {
      return {
        ...state,
        speciesForPersonLoading: true,
      };
    }

    case fromSpecies.LOAD_SPECIES_FOR_PERSON_SUCCESS: {
      const newState = speciesAdapter.addOne(action.payload, state);
      const speciesForPerson = action.payload;
      return {
        ...newState,
        speciesForPerson,
        speciesForPersonLoading: false,
      };
    }

    case fromSpecies.LOAD_SPECIES_FOR_PERSON_FAIL: {
      return {
        ...state,
        speciesForPersonLoading: false,
      };
    }

    case fromSpecies.SET_SPECIES_FILTER: {
      let filter;

      if (!action.payload) {
        filter = '';
      } else {
        filter = action.payload;
      }

      const filteredSpecies = selectAll(state).filter(
        p => p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1,
      );

      return {
        ...state,
        filter: action.payload,
        filteredSpecies
      };
    }

    case fromSpecies.LOAD_SPECIES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSpecies.LOAD_SPECIES_SUCCESS: {
      const species = action.payload;
      const newState = speciesAdapter.addAll(species, state);
      let filteredSpecies = [];

      if (newState.filter === '') {
        filteredSpecies = species;
      }

      return {
        ...newState,
        loaded: true,
        loading: false,
        filteredSpecies
      };
    }

    case fromSpecies.LOAD_SPECIES_DETAIL_SUCCESS: {
      const changes = action.payload;
      const id = changes.id;
      state = speciesAdapter.addOne({id, ...changes}, state);
      return {
        ...state
      };
    }
  }

  return state;
}

export const selectedSpecies = (state: SpeciesState) => state.selectedSpecies;
export const filteredSpecies = (state: SpeciesState) => state.filteredSpecies;
export const getSpeciesLoaded = (state: SpeciesState) => state.loaded;
export const getSpeciesForPerson = (state: SpeciesState) => state.speciesForPerson;
export const getSpeciesForPersonLoading = (state: SpeciesState) => state.speciesForPersonLoading;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = speciesAdapter.getSelectors();
