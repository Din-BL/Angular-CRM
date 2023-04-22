import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/assists.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnDestroy {

  themeColor = false;
  isAuthenticated: string | null;

  private activatedSub!: Subscription;

  constructor(private theme: SessionService, private auth: AuthService) {
    this.isAuthenticated = this.auth.getToken();
    this.auth.authenticated.subscribe(token => this.isAuthenticated = token);
    this.activatedSub = this.theme.themeMode.subscribe(colorStatus => this.themeColor = colorStatus);
  }

  logOut() {
    this.auth.deleteToken()
    this.isAuthenticated = this.auth.getToken();
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe()
  }

  onColorChanged(style: string) {
    return { [style]: this.themeColor ? 'black' : 'white' };
  }
}
