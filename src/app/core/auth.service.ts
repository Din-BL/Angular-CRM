import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticated = new Subject<string | null>()

  setToken(value: string) {
    localStorage.setItem('token', value);
  }
  getToken(): string {
    return localStorage.getItem('token') as string;
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
}
