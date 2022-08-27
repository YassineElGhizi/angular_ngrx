import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonViewComponent} from './person-view/person-view.component';
import {PersonAddComponent} from './person-add/person-add.component';
import {StoreModule} from "@ngrx/store";
import {personFeatureKey, reducer} from "./store/reducer/person.reducer";
import { PersonEditComponent } from './person-edit/person-edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PersonViewComponent,
    PersonAddComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(personFeatureKey, reducer),
    FormsModule
  ],
  exports: [
    PersonViewComponent,
    PersonAddComponent,
    PersonEditComponent
  ]
})
export class PersonModule {
}
