import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

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

  themeCapture = false
  themeMode = new Subject<boolean>()
  customerID = new Subject<string>()
  addCustomer = new Subject<boolean>()
  editCustomer = new Subject<Person>()
  searchEmployee = new Subject<string>()
}
