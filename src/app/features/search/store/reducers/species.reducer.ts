import * as fromSpecies from '../actions/species.action';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Species} from '@app/core/models/species.model';

export const speciesAdapter = createEntityAdapter<Species>();

export interface SpeciesState extends EntityState<Species> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  speciesForPerson: Species;
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
  filteredSpecies: [],
};

export const initialState: SpeciesState = speciesAdapter.getInitialState(
  defaultSpecies,
);

export function reducer(state = initialState,
                        action: fromSpecies.SpeciesAction): SpeciesState {
  switch (action.type) {
    case fromSpecies.LOAD_SPECIES_FOR_PERSON_SUCCESS: {
      const newState = speciesAdapter.addOne(action.payload, state);
      const speciesForPerson = action.payload;
      return {
        ...newState,
        speciesForPerson,
      };
    }
  }

  return state;
}

export const selectedSpecies = (state: SpeciesState) => state.selectedSpecies;
export const filteredSpecies = (state: SpeciesState) => state.filteredSpecies;
export const getSpeciesLoaded = (state: SpeciesState) => state.loaded;
export const getSpeciesForPerson = (state: SpeciesState) => state.speciesForPerson;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = speciesAdapter.getSelectors();
