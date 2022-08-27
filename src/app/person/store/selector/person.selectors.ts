import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPerson from '../reducer/person.reducer';


export const selectPersonState = createFeatureSelector<fromPerson.PersonState>(
  fromPerson.personFeatureKey,
);

export const selectPersons = createSelector(
  selectPersonState,
  (state: fromPerson.PersonState) => state.persons
);


