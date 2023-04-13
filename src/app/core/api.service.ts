import { Injectable } from '@angular/core';
import { Item } from './type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

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

  getCustomerId(index: number): Item {
    return this.customers[index]
  }

  //////// Http Request ////////

  server = 'http://localhost:3000/'

  getCustomer(): Observable<Item[]> {
    return this.http.get<Item[]>(this.server + 'customers')
  }

  addCustomer(customer: Item) {
    this.http.post<Item>(this.server + 'customers', customer).subscribe({
      next: data => this.customers?.push(data),
      error: error => console.log(error)
    })
  }













  // POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
  //   return this.http.post<DynamicType>(
  //     `${this.server}${endpoint}`,
  //     data,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-auth-token': this.getToken()
  //       }
  //     }
  //   )
  // }

  // addProject(customer: Item): Observable<Item> {
  //   return this.POST<Item>('customers', customer);
  // }
}
