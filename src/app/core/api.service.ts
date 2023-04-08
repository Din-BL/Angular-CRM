import { Injectable } from '@angular/core';
import { Table } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  customers: Array<Table> = [
    {
      first: 'Mark',
      last: 'Otto',
      phone: '050-352-3245',
      email: 'Din@Gmail.com'
    }, {
      first: 'Dor',
      last: 'Cohen',
      phone: '050-352-3245',
      email: 'Dor@Gmail.com'
    }, {
      first: 'Matan',
      last: 'Levi',
      phone: '050-352-3245',
      email: 'Matan@Gmail.com'
    }, {
      first: 'Nitzan',
      last: 'Sigel',
      phone: '050-352-3245',
      email: 'Nitzan@Gmail.com'
    }
  ]

  getCustomers(): Array<Table> {
    return this.customers
  }
}
