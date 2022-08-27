import {Component, OnInit} from '@angular/core';
import {UpdatePersonServiceService} from "../services/update-person-service.service";
import {Store} from "@ngrx/store";
import {PersonState} from "../store/reducer/person.reducer";
import {EditPersons} from "../store/person.actions";
import {Person} from "../../models/person";


@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  public id?: number;
  public name?: string;
  public age?: number;


  constructor(private store: Store<PersonState>, private personService: UpdatePersonServiceService) {
    this.personService.currentIndex.subscribe(i => this.id = i)
    this.personService.currentPerson.subscribe(p => {
      this.name = p.name;
      this.age = p.age;
    })
  }

  public update_store(id: string, name: string, age: string) {
    let p = new Person()
    p.age = +age;
    p.name = name
    this.store.dispatch(EditPersons(+id, p))
  }

  ngOnInit(): void {
  }


}
