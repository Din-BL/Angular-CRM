import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';

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
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60;
    const token = { value, exp };
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    const { value, exp } = JSON.parse(token);
    const now = Math.floor(Date.now() / 1000);
    if (now > exp) {
      localStorage.removeItem('token');
      return null;
    }
    return value;
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}
