import { CustomerEditDetailComponent } from './customer-edit-detail/customer-edit-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CustomerPageComponent,
    CustomerAddComponent,
    CustomerEditDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ]
})
export class CustomersModule { }
