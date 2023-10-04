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
  // server = 'https://crm-angular-874ed575950d.herokuapp.com/'

  //////// User ////////

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'user_api/register', user)
  }
  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.server + 'user_api/login', user)
  }
  getUser(): Observable<User> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<User>(this.server + 'user_api', { headers });
  }

  //////// Customer ////////

  getCustomers(): Observable<Person[]> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person[]>(this.server + 'customers_api', { headers })
  }
  getCustomer(id: string): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person>(this.server + `customers_api/${id}`, { headers })
  }
  getCustomerEdit(id: string): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person>(this.server + `customers_api/${id}/edit`, { headers })
  }
  addCustomer(customer: Person): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.post<Person>(this.server + 'customers_api', customer, { headers })
  }
  editCustomer(id: string, data: Person): Observable<Person> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.put<Person>(this.server + `customers_api/${id}`, data, { headers })
  }
  deleteCustomer(id: string): Observable<void> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.delete<void>(this.server + `customers_api/${id}`, { headers })
  }

  //////// Employee ////////

  createEmployees(): Observable<void> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.post<void>(this.server + 'employees_api/init', "", { headers })
  }
  getEmployees(): Observable<Person[]> {
    const token = this.auth.getToken();
    const headers = token ? { "authorization": token } : undefined;
    return this.http.get<Person[]>(this.server + 'employees_api', { headers })
  }
}









