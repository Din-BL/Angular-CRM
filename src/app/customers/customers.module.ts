import { CustomerEditDetailComponent } from './customer-edit-detail/customer-edit_detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CustomerPageComponent,
    CustomerAddComponent,
    CustomerItemComponent,
    CustomerEditDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class CustomersModule { }
