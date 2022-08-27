import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {PersonState} from "../store/reducer/person.reducer";
import {Person} from "../../models/person";
import {AddPersons} from "../store/person.actions";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  constructor(private store: Store<PersonState>) {
  }

  addPerson(personName: string, personAge: string) {
    let p = new Person();
    p.name = personName;
    p.age = Number(personAge) ;
    this.store.dispatch(AddPersons(p));
  }

  ngOnInit(): void {
  }

}
