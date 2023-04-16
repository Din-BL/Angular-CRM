import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/core/validation.service';
import { Item, Title } from 'src/app/core/type.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { SessionService } from 'src/app/core/session.service';

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
  id!: string
  customer!: Item

  constructor(public editForm: ValidationService, private router: Router,
    private route: ActivatedRoute, private customerApi: ApiService, private customerInfo: SessionService) { }

  fields: Array<string> = ['first', 'last', 'email', 'phone', 'address']

  ngOnInit(): void {
    this.editMode = this.router.url.includes('edit')
    this.editForm.customerForm

    this.route.params.subscribe(
      (params: Params) => {
        this.id = (params['id']);
        if (this.router.url.includes('edit')) {
          this.customer = this.customerApi.getCustomerEdit(this.id).subscribe({
            next: data => {
              this.customer = data,
                this.fields.forEach((field) => {
                  this.setFormValue(field, this.customer[field] as Item)
                })
            },
            error: error => console.log(error.message)
          })
        } else {
          this.customerInfo.customerID.next(this.id)
          this.customer = this.customerApi.getCustomer(this.id).subscribe({
            next: data => this.customer = data,
            error: error => console.log(error.message)
          })
        }
      })
  }

  setFormValue(field: string, value: any) {
    this.editForm.customerForm.get(field)!.setValue(value)
  }

  getError(field: string): FormControl {
    return this.editForm.customerForm.get(field) as FormControl;
  }

  onSubmit() {
    this.customerApi.editCustomer(this.id, this.editForm.customerForm.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: error => console.log(error.message),
    })
  }

  onCancel() {
    this.router.navigate(['/'])
    this.customerInfo.addCustomer.next(false)
  }
}
