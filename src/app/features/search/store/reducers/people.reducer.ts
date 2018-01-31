import {createEntityAdapter, EntityState} from '@ngrx/entity';
import * as fromPersons from '../actions/people.actions';
import {Person} from '@app/core/models/person.model';

export const personAdapter = createEntityAdapter<Person>();

export interface PersonState extends EntityState<Person> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  selectedPeople: Person[];
  filteredPeople: Person[];
  peopleForSpecies: Person[];
  peopleForLocation: Person[];
  peopleForSpeciesLoading: boolean;
  peopleForLocationLoading: boolean;
  peopleForFilmLoading: boolean;
}


const defaultPerson: PersonState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  selectedPeople: [],
  filteredPeople: [],
  peopleForSpecies: [],
  peopleForLocation: [],
  peopleForSpeciesLoading: false,
  peopleForLocationLoading: false,
  peopleForFilmLoading: false,
};

export const initialState: PersonState = personAdapter.getInitialState(
  defaultPerson,
);

export function reducer(state = initialState,
                        action: fromPersons.PersonsActions): PersonState {
  switch (action.type) {

    case fromPersons.LOAD_PERSONS_FOR_FILM: {
      return {
        ...state,
        peopleForFilmLoading: true,
      };
    }

    case fromPersons.LOAD_PERSONS_FOR_FILM_SUCCESS: {
      state = personAdapter.addAll(action.payload, state);
      const selectesdPeople = action.payload;
      return {
        ...state,
        selectedPeople: selectesdPeople,
        peopleForFilmLoading: false
      };
    }

    case fromPersons.LOAD_PEOPLE_FOR_SPECIES: {
      return {
        ...state,
        peopleForSpeciesLoading: true,
      };
    }

    case fromPersons.LOAD_PEOPLE_FOR_SPECIES_SUCCESS: {
      state = personAdapter.addAll(action.payload, state);
      const peopleForSpecies = action.payload;
      return {
        ...state,
        peopleForSpecies,
        peopleForSpeciesLoading: false,
      };
    }

    case fromPersons.SET_PEOPLE_FILTER: {
      let filter;

      if (!action.payload) {
        filter = '';
      } else {
        filter = action.payload;
      }

      const filteredPersons = selectAll(state).filter(
        p => p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1,
      );

      return {
        ...state,
        filter: action.payload,
        filteredPeople: filteredPersons,
      };
    }

    case fromPersons.LOAD_PERSONS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPersons.LOAD_PERSONS_SUCCESS: {
      const people = action.payload;
      const newState = personAdapter.addAll(people, state);
      let filteredPeople = [];

      if (newState.filter === '') {
        filteredPeople = people;
      }

      return {
        ...newState,
        loading: false,
        loaded: true,
        filteredPeople
      };
    }

    case fromPersons.LOAD_PERSON_SUCCESS: {
      const changes = action.payload;
      const id = changes.id;
      state = personAdapter.addOne({id, ...changes}, state);
      return {
        ...state
      };
    }

    case fromPersons.LOAD_PEOPLE_FOR_LOCATION: {
      return {
        ...state,
        peopleForLocationLoading: true,
      };
    }

    case fromPersons.LOAD_PEOPLE_FOR_LOCATION_SUCCESS: {
      state = personAdapter.addAll(action.payload, state);
      const peopleForLocation = action.payload;
      return {
        ...state,
        peopleForLocation,
        peopleForLocationLoading: false,
      };
    }
  }

  return state;
}

export const selectedPeople = (state: PersonState) => state.selectedPeople;
export const getPeopleForFilmLoading = (state: PersonState) => state.peopleForFilmLoading;
export const filteredPeople = (state: PersonState) => state.filteredPeople;
export const getPeopleLoaded = (state: PersonState) => state.loaded;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = personAdapter.getSelectors();
export const getPeopleForSpecies = (state: PersonState) => state.peopleForSpecies;
export const getPeopleForSpeciesLoading = (state: PersonState) => state.peopleForSpeciesLoading;
export const getPeopleForLocation = (state: PersonState) => state.peopleForLocation;
export const getPeopleForLocationLoading = (state: PersonState) => state.peopleForLocationLoading;
