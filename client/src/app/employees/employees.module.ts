import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeePageComponent,
    EmployeeSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EmployeesModule { }
