import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivateChild {

  constructor(private router: Router) { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean> {
    if (this.getToken()) return true
    return this.router.navigate(['login']);
  }
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
