import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as fromPersons from '../actions/people.actions';
import { Person } from '@app/core/models/person.model';

export const personAdapter = createEntityAdapter<Person>();

export interface PersonState extends EntityState<Person> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  selectedPeople: Person[];
}

const defaultPerson: PersonState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  selectedPeople: [],
};

export const initialState: PersonState = personAdapter.getInitialState(
  defaultPerson,
);

export function reducer(
  state = initialState,
  action: fromPersons.PersonsActions,
): PersonState {
  switch (action.type) {
    case fromPersons.LOAD_PERSONS_FOR_FILM_SUCCESS: {
      state = personAdapter.addAll(action.payload, state);
      const selectedPeople = action.payload;
      return {
        ...state,
        selectedPeople,
      };
    }
  }

  return state;
}

export const selectedPeople = (state: PersonState) => state.selectedPeople;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = personAdapter.getSelectors();
