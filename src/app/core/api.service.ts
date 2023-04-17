import { Injectable } from '@angular/core';
import { Item, User } from './type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //////// User ////////

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'register', user)
  }
  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'login', user)
  }

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

  createEmployees(): Observable<void> {
    return this.http.post<void>(this.server + 'employees/init', "")
  }
  getEmployees(): Observable<Item[]> {
    return this.http.get<Item[]>(this.server + 'employees')
  }
}