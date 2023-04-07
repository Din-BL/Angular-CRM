import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    // CoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    // SignupComponent,
    // LoginComponent
  ]
})
export class AuthModule { }
