import { Injectable } from '@angular/core';
import { Person, User } from './type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  server = 'http://localhost:3000/'

  //////// User ////////

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'register', user)
  }
  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'login', user)
  }

  //////// Customer ////////


  getCustomers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.server + 'customers')
  }
  getCustomer(id: string): Observable<Person> {
    return this.http.get<Person>(this.server + `customers/${id}`)
  }
  getCustomerEdit(id: string): Observable<Person> {
    return this.http.get<Person>(this.server + `customers/${id}/edit`)
  }
  addCustomer(customer: Person): Observable<Person> {
    return this.http.post<Person>(this.server + 'customers', customer)
  }
  editCustomer(id: string, data: Person): Observable<Person> {
    return this.http.put<Person>(this.server + `customers/${id}`, data)
  }
  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(this.server + `customers/${id}`)
  }

  //////// Employee ////////

  createEmployees(): Observable<void> {
    return this.http.post<void>(this.server + 'employees/init', "")
  }
  getEmployees(): Observable<Person[]> {
    return this.http.get<Person[]>(this.server + 'employees')
  }
}