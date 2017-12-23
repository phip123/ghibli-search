import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromPeople from '../reducers/people.reducer';

export const getPeopleState = createSelector(
  fromFeature.getSearchState,
  (state: fromFeature.SearchState) => state.people,
);

export const getPeopleEntities = createSelector(
  getPeopleState,
  fromPeople.selectEntities,
);

export const getAllPeople = createSelector(
  getPeopleState,
  fromPeople.selectAll,
);

export const getSelectedPeople = createSelector(
  getPeopleState,
  fromPeople.selectedPeople,
);

export const getFilteredPeople = createSelector(
  getPeopleState,
  fromPeople.filteredPeople,
);
