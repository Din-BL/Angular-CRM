import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/core/type.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginApi: ApiService,
    private auth: AuthService, private theme: HelperService) { }

  ngOnInit(): void {
    this.auth.authenticated.next(null)
    this.theme.themeMode.subscribe(colorStatus => this.themeColor = colorStatus);
    this.themeColor = this.theme.themeCapture
  }

  @ViewChild('myForm') formField!: NgForm

  themeColor = false;
  registered = true
  errorStatus = false
  errorMsg = ""


  onBackgroundClass(theme: boolean, value?: boolean): string {
    if (value) return this.themeColor ? 'bg-dark' : 'bg-light'
    return this.theme.onBackgroundClass(theme)
  }

  onColorChanged(style: string) {
    return { [style]: this.themeColor ? 'white' : 'black' };
  }

  onInputClass(): string {
    return this.themeColor ? 'form-control bg-dark text-white' : 'form-control bg-light text-dark'
  }

  authStatus(value?: boolean): string {
    if (value) return this.registered ? 'Sign Up' : 'Log In'
    return this.registered ? 'Log In' : 'Sign Up'
  }

  authMode(): void {
    this.formField.reset()
    this.registered = !this.registered;
  }

  handleError(user: NgForm, error: any): void {
    this.errorMsg = error.error
    user.reset()
    this.errorStatus = true
    setTimeout(() => {
      this.errorStatus = false
    }, 2000);
  }

  onSubmit(user: NgForm): void {
    if (this.registered) {
      this.loginApi.loginUser(user.value.userData).subscribe({
        next: ((data: User) => {
          if (data.token) {
            this.auth.setToken(data.token)
            this.auth.authenticated.next(this.auth.getToken())
            this.router.navigate(['customers'])
          }
        }),
        error: ((error) => this.handleError(user, error)
        )
      })
    } else {
      this.loginApi.registerUser(user.value.userData).subscribe({
        next: (() => {
          user.reset()
          this.registered = true
        }),
        error: ((error) => this.handleError(user, error))
      })
    }
  }
}
