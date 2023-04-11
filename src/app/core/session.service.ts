import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  homeRedirect() {
    this.router.navigate(['customers'])
  }

  themeMode = new EventEmitter<boolean>()
}
