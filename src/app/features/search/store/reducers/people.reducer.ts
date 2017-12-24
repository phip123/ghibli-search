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
}

const defaultPerson: PersonState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  selectedPeople: [],
  filteredPeople: [],
};

export const initialState: PersonState = personAdapter.getInitialState(
  defaultPerson,
);

export function reducer(state = initialState,
                        action: fromPersons.PersonsActions,): PersonState {
  switch (action.type) {
    case fromPersons.LOAD_PERSONS_FOR_FILM_SUCCESS: {
      state = personAdapter.addAll(action.payload, state);
      const selectesdPeople = action.payload;
      return {
        ...state,
        selectedPeople: selectesdPeople,
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
  }

  return state;
}

export const selectedPeople = (state: PersonState) => state.selectedPeople;
export const filteredPeople = (state: PersonState) => state.filteredPeople;
export const getPeopleLoaded = (state: PersonState) => state.loaded;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = personAdapter.getSelectors();
