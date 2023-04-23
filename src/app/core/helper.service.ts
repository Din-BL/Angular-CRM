import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  themeMode = new Subject<boolean>()
  customerID = new Subject<string>()
  addCustomer = new Subject<boolean>()
  editCustomer = new Subject<Person>()
  searchEmployee = new Subject<string>()
}
