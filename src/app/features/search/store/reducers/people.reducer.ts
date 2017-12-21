import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Person } from '../../../app/core/models/person.model';
import * as fromPersons from '../actions/people.actions';
import { filmAdapter } from './films.reducer';

export const personAdapter = createEntityAdapter<Person>();

export interface PersonState extends EntityState<Person> {
  loaded: boolean;
  loading: boolean;
  filter: string;
  filteredPersons: Person[];
}

const defaultPerson: PersonState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
  filter: '',
  filteredPersons: [],
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

      return {
        ...state,
      };
    }
  }

  return state;
}
