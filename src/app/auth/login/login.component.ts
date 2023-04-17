import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private loginApi: ApiService) { }

  errorStatus = false
  errorMsg = ""

  onSubmit(user: NgForm): void {
    this.loginApi.loginUser(user.value.userData).subscribe({
      next: (() => this.router.navigate(['customers'])),
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
