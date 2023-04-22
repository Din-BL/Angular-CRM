import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/core/validation.service';
import { Person, Title } from 'src/app/core/type.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { SessionService } from 'src/app/core/assists.service';

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
  customer!: Person

  constructor(public editForm: ValidationService, private router: Router,
    private route: ActivatedRoute, private customerApi: ApiService, private customerInfo: SessionService) { }

  fields: Array<string> = ['first_name', 'last_name', 'email', 'phone', 'address']

  ngOnInit(): void {
    this.editMode = this.router.url.includes('edit')
    this.editForm.customerForm

    this.route.params.subscribe(
      (params: Params) => {
        this.id = (params['id']);
        if (this.router.url.includes('edit')) {
          this.customer = this.customerApi.getCustomerEdit(this.id).subscribe({
            next: (data: Person) => {
              this.customer = data,
                this.fields.forEach((field) => {
                  this.setFormValue(field, this.customer[field] as Person)
                })
            }
          })
        } else {
          this.customerInfo.customerID.next(this.id)
          this.customer = this.customerApi.getCustomer(this.id).subscribe({
            next: (data: Person) => this.customer = data
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
      next: (data: Person) => {
        this.customerInfo.editCustomer.next(data),
          this.customerInfo.addCustomer.next(false)
        this.router.navigate([''])
      }
    })
  }

  onCancel() {
    this.router.navigate(['/'])
    this.customerInfo.addCustomer.next(false)
  }
}
