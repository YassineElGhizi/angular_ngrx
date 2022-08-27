import {createAction, props} from '@ngrx/store';
import {Person} from "../../models/person";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

export const AddPersons = createAction(
  '[Person] Add Persons',
  (person: Person) => ({person})
);

export const DeletePersons = createAction(
  '[Person] Delete Persons',
  (index: number) => ({index})
);

export const EditPersons = createAction(
  '[Person] Edit Persons',
  (index: number, person: Person) => ({index, person})
);

