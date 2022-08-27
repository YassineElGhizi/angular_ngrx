import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../models/person";
import {select, Store} from "@ngrx/store";
import {PersonState} from "../store/reducer/person.reducer";
import {selectPersons} from "../store/selector/person.selectors";
import {AddPersons, DeletePersons} from "../store/person.actions";
import {UpdatePersonServiceService} from "../services/update-person-service.service";

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  public persons$: Observable<Person[]>

  constructor(private store: Store<PersonState>, private personService: UpdatePersonServiceService) {
    this.persons$ = this.store.pipe(select(selectPersons))
  }

  public deletePerson(index: number) {
    this.store.dispatch(DeletePersons(index));
  }

  public updatePerson(index: number, person: Person) {
    this.personService.setPersonForUpdate(index, person)
    console.log('THIS ==>' , this.personService)
  }


  ngOnInit(): void {
  }

}
