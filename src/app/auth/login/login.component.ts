import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('myForm') formData!: NgForm

  onSubmit(model: NgForm): void {
    console.log(model);
    this.formData.reset()
  }
}
