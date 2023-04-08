import { Injectable } from '@angular/core';
import { Item } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  customers: Array<Item> = [
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
      first: 'Nitzan',
      last: 'Sigel',
      phone: '050-352-3245',
      email: 'Nitzan@Gmail.com'
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

}
