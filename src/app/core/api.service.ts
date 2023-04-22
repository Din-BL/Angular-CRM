import { Injectable } from '@angular/core';
import { Person, User } from './type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  server = 'http://localhost:3000/'

  //////// User ////////

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'register', user)
  }
  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'login', user)
  }
  getUser(): Observable<User> {
    return this.http.get<User>(this.server, {
      headers: { "authorization": this.auth.getToken() }
    })
  }

  //////// Customer ////////

  getCustomers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.server + 'customers', {
      headers: { "authorization": this.auth.getToken() }
    })
  }
  getCustomer(id: string): Observable<Person> {
    return this.http.get<Person>(this.server + `customers/${id}`, {
      headers: { "authorization": this.auth.getToken() }
    })
  }
  getCustomerEdit(id: string): Observable<Person> {
    return this.http.get<Person>(this.server + `customers/${id}/edit`, {
      headers: { "authorization": this.auth.getToken() }
    })
  }
  addCustomer(customer: Person): Observable<Person> {
    return this.http.post<Person>(this.server + 'customers', customer, {
      headers: { "authorization": this.auth.getToken() }
    })
  }
  editCustomer(id: string, data: Person): Observable<Person> {
    return this.http.put<Person>(this.server + `customers/${id}`, data, {
      headers: { "authorization": this.auth.getToken() }
    })
  }
  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(this.server + `customers/${id}`, {
      headers: { "authorization": this.auth.getToken() }
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