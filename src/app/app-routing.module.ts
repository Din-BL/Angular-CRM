import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerPageComponent } from './customers/customer-page/customer-page.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { EmployeePageComponent } from './employees/employee-page/employee-page.component';


const routes: Routes = [
  {
    path: 'customers', component: CustomerPageComponent,
    children: [{ path: ':id', component: CustomerEditComponent },
    { path: ':id', component: CustomerDetailComponent }]
  },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeePageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
