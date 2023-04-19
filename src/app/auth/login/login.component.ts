import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { User } from 'src/app/core/type.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authApi: ApiService) { }

  ngOnInit(): void {
    this.emailField?.nativeElement.focus()
  }

  @ViewChild('emailRef') emailField?: ElementRef

  registered = true
  errorStatus = false
  errorMsg = ""

  authStatus(value?: boolean): string {
    if (value) {
      return this.registered ? 'Sign Up' : 'Log In'
    }
    return this.registered ? 'Log In' : 'Sign Up'
  }


  authMode(): boolean {
    if (this.emailField && this.emailField.nativeElement) {
      this.emailField.nativeElement.className = 'form-control.ng-invalid';
    }
    return this.registered = !this.registered
  }

  onSubmit(user: NgForm): void {
    if (this.registered) {
      this.authApi.loginUser(user.value.userData).subscribe({
        next: ((data: User) => {
          if (data.token) this.authApi.setToken(data.token)
          this.router.navigate(['customers'])
        }),
        error: ((error) => {
          this.errorMsg = error.error
          user.reset(),
            this.errorStatus = true
          setTimeout(() => {
            this.errorStatus = false
          }, 2000);
        })
      })
    } else {
      this.authApi.registerUser(user.value.userData).subscribe({
        next: (() => {
          user.reset()
          this.registered = true
        }),
        error: ((error) => {
          this.errorMsg = error.error
          user.reset(),
            this.errorStatus = true
          setTimeout(() => {
            this.errorStatus = false
          }, 2000);
        })
      })
    }

  }
}
