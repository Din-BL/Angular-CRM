// import { Component, OnInit } from '@angular/core';
// import { ValidationService } from 'src/app/core/validation.service';
// import { Item, Title } from 'src/app/core/type.model';
// import { ActivatedRoute, Params, Router } from '@angular/router';
// import { FormControl } from '@angular/forms';
// import { ApiService } from 'src/app/core/api.service';

// @Component({
//   selector: 'customer-edit-detail',
//   templateUrl: './customer-edit-detail.component.html',
//   providers: [ValidationService]
// })
// export class CustomerEditDetailComponent implements OnInit {

//   getTitle: Title = {
//     name: 'Edit Customers',
//     class: 'bi bi-pencil-fill'
//   }

//   editMode?: boolean
//   id!: number
//   customer!: Item

//   constructor(public editForm: ValidationService, private router: Router,
//     private route: ActivatedRoute, private customerApi: ApiService) { }

//   ngOnInit(): void {
//     this.editMode = this.router.url.includes('edit')
//     this.editForm.customerForm

//     this.route.params
//       .subscribe(
//         (params: Params) => {
//           this.id = (params['id']);
//           this.customer = this.customerApi.getCustomer(this.id)
//           this.editForm.customerForm.get('first')!.setValue(this.customer.first)
//           this.editForm.customerForm.get('last')!.setValue(this.customer.last)
//           this.editForm.customerForm.get('email')!.setValue(this.customer.email)
//           this.editForm.customerForm.get('phone')!.setValue(this.customer.phone)
//           this.editForm.customerForm.get('address')!.setValue(this.customer.first)
//         })
//   }

//   getError(field: string): FormControl {
//     return this.editForm.customerForm.get(field) as FormControl;
//   }

//   onSubmit() {
//     this.router.navigate(['/'])
//   }

//   onCancel() {
//     this.router.navigate(['/'])
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/core/validation.service';
import { Item, Title } from 'src/app/core/type.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'customer-edit-detail',
  templateUrl: './customer-edit-detail.component.html',
  providers: [ValidationService]
})
export class CustomerEditDetailComponent implements OnInit {

  getTitle: Title = {
    name: 'Edit Customers',
    class: 'bi bi-pencil-fill'
  }

  editMode?: boolean
  id!: number
  customer!: Item

  constructor(public editForm: ValidationService, private router: Router,
    private route: ActivatedRoute, private customerApi: ApiService) { }

  fields: Array<string> = ['first', 'last', 'email', 'phone', 'address']

  ngOnInit(): void {
    this.editMode = this.router.url.includes('edit')
    this.editForm.customerForm

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = (params['id']);
          this.customer = this.customerApi.getCustomer(this.id)
          this.fields.forEach((field) => {
            this.setFormValue(field, this.customer[field] as Item)
          })
        })
  }

  setFormValue(field: string, value: any) {
    this.editForm.customerForm.get(field)!.setValue(value)
  }

  getError(field: string): FormControl {
    return this.editForm.customerForm.get(field) as FormControl;
  }

  onSubmit() {
    this.router.navigate(['/'])
  }

  onCancel() {
    this.router.navigate(['/'])
  }
}
