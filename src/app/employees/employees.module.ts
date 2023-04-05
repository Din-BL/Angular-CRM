import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EmployeePageComponent,
    EmployeeSearchComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EmployeesModule { }
