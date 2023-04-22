import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { SessionService } from 'src/app/core/assists.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnDestroy {

  themeColor = false;
  isAuthenticated: string | null;
  username?: string | null;

  private activatedSub!: Subscription;

  constructor(private theme: SessionService, private auth: AuthService, private userApi: ApiService) {
    this.auth.authenticated.subscribe(token => {
      this.isAuthenticated = token
      this.userApi.getUser().subscribe((user) => this.username = user.username)
    });
    this.isAuthenticated = this.auth.getToken();
    if (this.isAuthenticated) this.userApi.getUser().subscribe((user) => this.username = user.username)
    this.activatedSub = this.theme.themeMode.subscribe(colorStatus => this.themeColor = colorStatus);
  }

  logOut() {
    this.auth.deleteToken()
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe()
  }

  onColorChanged(style: string) {
    return { [style]: this.themeColor ? 'black' : 'white' };
  }
}
