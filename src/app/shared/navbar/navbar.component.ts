import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  themeColor = false;
  isAuthenticated: string | null;
  username?: string | null;

  constructor(private theme: HelperService, private auth: AuthService, private userApi: ApiService) {
    this.auth.authenticated.subscribe(token => {
      this.isAuthenticated = token
      this.userApi.getUser().subscribe((user) => this.username = user.username)
    });
    this.isAuthenticated = this.auth.getToken();
    if (this.isAuthenticated) this.userApi.getUser().subscribe((user) => this.username = user.username)
    this.theme.themeMode.subscribe(colorStatus => this.themeColor = colorStatus);
  }

  logOut() {
    this.auth.deleteToken()
  }

  onClassChanged() {
    return this.themeColor ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-light bg-light'
  }
}
