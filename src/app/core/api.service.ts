import { Injectable } from '@angular/core';
import { Item } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  customers: Array<Item> = [
    {
      first: 'Mark',
      last: 'Otto',
      phone: '050-352-3245',
      email: 'Din@Gmail.com',
      address: 'East Main Street in Portage, Mich'
    }, {
      first: 'Dor',
      last: 'Cohen',
      phone: '050-352-3245',
      email: 'Dor@Gmail.com',
      address: '1234 E. Main St. in Portage, Mich'
    }, {
      first: 'Nitzan',
      last: 'Sigel',
      phone: '050-352-3245',
      email: 'Nitzan@Gmail.com',
      address: '2333 E. Beltline Ave. SE in Grand Rapids, Mich'
    }
  ]
  employees: Array<Item> = [
    {
      full: 'David Ben',
      phone: '050-352-3245',
      email: 'David@Gmail.com',
      birthday: '21/05/1968'
    },
    {
      first: 'Daniel',
      last: 'Cohen',
      phone: '050-352-3245',
      email: 'Dor@Gmail.com'
    },
    {
      first: 'Matan',
      last: 'Cohen',
      phone: '050-352-3245',
      email: 'Dor@Gmail.com'
    }
  ]

  getCustomer(index: number): Item {
    return this.customers[index]
  }
}
