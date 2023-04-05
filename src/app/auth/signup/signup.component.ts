import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements AfterViewInit {

  @ViewChild('emailInput') emailFiled!: ElementRef

  ngAfterViewInit(): void {
    this.emailFiled.nativeElement.focus()
  }
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private router: Router, private route: ActivatedRoute) { }

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
  onSubmit() {
    console.log(this.form);
    this.router.navigate(['/login'], { relativeTo: this.route })
  }
}

