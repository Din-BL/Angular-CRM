import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupForm!: FormGroup

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6), Validators.pattern(/^\S+@\S+\.\S+$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  constructor(private router: Router, private registerApi: ApiService) { }

  get name() {
    return this.signupForm.get('name')
  }
  get email() {
    return this.signupForm.get('email')
  }
  get password() {
    return this.signupForm.get('password')
  }
  onSubmit() {
    this.registerApi.registerUser(this.signupForm.value).subscribe({
      next: (() => this.router.navigate(['login']))
    })
  }
}

