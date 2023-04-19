import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerPageComponent } from './customers/customer-page/customer-page.component';
import { EmployeePageComponent } from './employees/employee-page/employee-page.component';
import { CustomerEditDetailComponent } from './customers/customer-edit-detail/customer-edit-detail.component';


const routes: Routes = [
  {
    path: 'customers', component: CustomerPageComponent,
    children: [{ path: ':id/edit', component: CustomerEditDetailComponent },
    { path: ':id', component: CustomerEditDetailComponent }]
  },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  // { path: 'logout', component: },
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
