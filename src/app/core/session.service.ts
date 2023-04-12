import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  homeRedirect() {
    this.router.navigate(['customers'])
  }

  themeMode = new Subject<boolean>()
}
