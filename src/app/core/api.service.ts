import { Injectable } from '@angular/core';
import { Item } from './type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //////// Customer ////////

  server = 'http://localhost:3000/'

  getCustomers(): Observable<Item[]> {
    return this.http.get<Item[]>(this.server + 'customers')
  }
  getCustomer(id: string): Observable<Item> {
    return this.http.get<Item>(this.server + `customers/${id}`)
  }
  getCustomerEdit(id: string): Observable<Item> {
    return this.http.get<Item>(this.server + `customers/${id}/edit`)
  }
  addCustomer(customer: Item): Observable<Item> {
    return this.http.post<Item>(this.server + 'customers', customer)
  }
  editCustomer(id: string, data: Item): Observable<Item> {
    return this.http.put<Item>(this.server + `customers/${id}`, data)
  }
  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(this.server + `customers/${id}`)
  }

  //////// Employee ////////

  createEmployees() {
    this.http.post<void>(this.server + 'employees/init', "").subscribe({
      next: data => console.log(data),
      error: error => console.log(error.message)
    })
  }
  getEmployees(): Observable<Item[]> {
    return this.http.get<Item[]>(this.server + 'employees')
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
