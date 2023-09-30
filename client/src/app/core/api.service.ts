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
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<User>(this.server, { headers });
  }

  //////// Customer ////////

  getCustomers(): Observable<Person[]> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person[]>(this.server + 'customers', { headers })
  }
  getCustomer(id: string): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person>(this.server + `customers/${id}`, { headers })
  }
  getCustomerEdit(id: string): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person>(this.server + `customers/${id}/edit`, { headers })
  }
  addCustomer(customer: Person): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.post<Person>(this.server + 'customers', customer, { headers })
  }
  editCustomer(id: string, data: Person): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.put<Person>(this.server + `customers/${id}`, data, { headers })
  }
  deleteCustomer(id: string): Observable<void> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.delete<void>(this.server + `customers/${id}`, { headers })
  }

  //////// Employee ////////

  createEmployees(): Observable<void> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.post<void>(this.server + 'employees/init', "", { headers })
  }
  getEmployees(): Observable<Person[]> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person[]>(this.server + 'employees', { headers })
  }
}









