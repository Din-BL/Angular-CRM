import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit, AfterViewInit {

  @ViewChild('emailInput') emailFiled!: ElementRef

  signupForm!: FormGroup

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngAfterViewInit(): void {
    this.emailFiled.nativeElement.focus()
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  get email() {
    return this.signupForm.get('email')
  }
  get password() {
    return this.signupForm.get('password')
  }
  onSubmit() {
    console.log(this.signupForm);
    this.router.navigate(['/login'], { relativeTo: this.route })
  }
}

