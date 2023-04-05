import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CustomerPageComponent,
    CustomerAddComponent,
    CustomerItemComponent,
    CustomerEditComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class CustomersModule { }
