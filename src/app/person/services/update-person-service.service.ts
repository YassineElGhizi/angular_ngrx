import {Injectable} from '@angular/core';
import {Person} from "../../models/person";
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdatePersonServiceService {
  public person = new BehaviorSubject(new Person());
  currentPerson = this.person.asObservable();
  public index = new BehaviorSubject(0);
  currentIndex = this.index.asObservable();

  constructor() {
  }

  public setPersonForUpdate(index: number, p: Person) {
    this.person.next(p);
    this.index.next(index);

  }

}
