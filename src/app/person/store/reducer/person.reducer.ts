import {Action, createReducer, on} from '@ngrx/store';
import {Person} from "../../../models/person";
import * as PersonAction from '../person.actions';
import {EditPersons} from "../person.actions";

export const personFeatureKey = 'person';

export interface PersonState {
  persons: Person[]
}

export const initialState: PersonState = {
  persons: [{'name' : 'oussama' , 'age' : 12}]
};

export const personReducer = createReducer(
  initialState,
  on(PersonAction.AddPersons,
    (state: PersonState, {person}) => ({
      ...state, persons: [...state.persons, person]
    })),

  on(PersonAction.DeletePersons,
    (state: PersonState, {index}) => ({
      ...state, persons: [...state.persons.slice(0, index), ...state.persons.slice(index + 1)]
    })
  ),
  on(PersonAction.EditPersons,
    (state: PersonState, {index, person}) => ({
      ...state, persons: [...state.persons.slice(0, index) , person,  ...state.persons.slice(index+1)]
    }))

);

export function reducer(state: PersonState | undefined, action: Action): any {
  return personReducer(state, action);
}
