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

  //////// Token ////////

  setToken(value: string) {
    localStorage.setItem('token', value);
  }
  getToken(): string {
    return localStorage.getItem('token') as string;
  }
  deleteToken() {
    localStorage.removeItem('token');
  }

  //////// Customer ////////


  getCustomers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.server + 'customers', {
      headers: { "authorization": this.getToken() }
    })
  }
  getCustomer(id: string): Observable<Person> {
    return this.http.get<Person>(this.server + `customers/${id}`, {
      headers: { "authorization": this.getToken() }
    })
  }
  getCustomerEdit(id: string): Observable<Person> {
    return this.http.get<Person>(this.server + `customers/${id}/edit`, {
      headers: { "authorization": this.getToken() }
    })
  }
  addCustomer(customer: Person): Observable<Person> {
    return this.http.post<Person>(this.server + 'customers', customer, {
      headers: { "authorization": this.getToken() }
    })
  }
  editCustomer(id: string, data: Person): Observable<Person> {
    return this.http.put<Person>(this.server + `customers/${id}`, data, {
      headers: { "authorization": this.getToken() }
    })
  }
  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(this.server + `customers/${id}`, {
      headers: { "authorization": this.getToken() }
    })
  }

  //////// Employee ////////

  createEmployees(): Observable<void> {
    return this.http.post<void>(this.server + 'employees/init', "")
  }
  getEmployees(): Observable<Person[]> {
    return this.http.get<Person[]>(this.server + 'employees')
  }
}