import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Item } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  homeRedirect() {
    this.router.navigate(['customers'])
  }

  themeMode = new Subject<boolean>()
  customerID = new Subject<string>()
  addCustomer = new Subject<boolean>()
  editCustomer = new Subject<Item>()
  searchEmployee = new Subject<string>()
}
