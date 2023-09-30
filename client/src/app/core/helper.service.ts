import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Person } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService  {

  constructor(private router: Router) { }

  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean> {
    this.addCustomer.subscribe(eyeStatus => this.detailPage = eyeStatus)
    if (this.detailPage) return true
    return this.router.navigate(['/']);
  }

  onColorChanged(style: string, theme: boolean) {
    return { [style]: theme ? 'black' : 'white' };
  }

  onBackgroundClass(theme: boolean): string {
    return theme ? 'bg-light text-dark' : 'bg-dark text-white'
  }

  onInputClass(theme: boolean): string {
    return theme ? 'form-control bg-light text-dark' : 'form-control bg-dark text-white'
  }

  onThemeCapture(status: boolean): void {
    this.themeCapture = status
  }

  detailPage = false
  themeCapture = false
  themeMode = new BehaviorSubject<boolean>(false)
  addCustomer = new BehaviorSubject<boolean>(false)
  customerID = new Subject<string>()
  editCustomer = new Subject<Person>()
  searchEmployee = new Subject<string>()
}
