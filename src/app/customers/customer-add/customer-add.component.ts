import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { SessionService } from 'src/app/core/assists.service';
import { Person } from 'src/app/core/type.model';
import { ValidationService } from 'src/app/core/validation.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  providers: [ValidationService]
})
export class CustomerAddComponent implements OnInit {

  @Input() users?: Array<Person>

  constructor(public addForm: ValidationService, private customerApi: ApiService, private btnStatus: SessionService) { }

  addStatus?: boolean
  errorMsg?: string

  ngOnInit(): void {
    this.addForm.customerForm
    this.btnStatus.addCustomer.subscribe(status => this.addStatus = status)
  }

  getError(field: string): FormControl {
    return this.addForm.customerForm.get(field) as FormControl;
  }

  errorCase(msg?: string, field?: string, option?: boolean, length?: string): string {
    if (msg) {
      return `"${msg}" is not allowed to be empty`
    } else {
      if (option) {
        return `${field} is required `;
      }
      return `${field} must be at least ${length} characters long `;
    }
  }

  lengthError(field: string, length: string): string {
    return `"${field}" length must be at least ${length} characters long`
  }

  onSubmit() {
    this.customerApi.addCustomer(this.addForm.customerForm.value).subscribe({
      next: (data: Person) => {
        this.users?.push(data),
          this.addForm.customerForm.reset()
      },
      error: (error) => {
        this.errorMsg = error.error[0].message ? error.error[0].message : error.error
        switch (this.errorMsg) {
          case this.errorCase('first_name'):
            this.errorMsg = this.errorCase(undefined, 'First name', true);
            break;
          case this.lengthError("first_name", "2"):
            this.errorMsg = this.errorCase(undefined, 'First name', undefined, '2');
            break;
          case this.errorCase('last_name'):
            this.errorMsg = this.errorCase(undefined, 'Last name', true);
            break;
          case this.lengthError("last_name", "2"):
            this.errorMsg = this.errorCase(undefined, 'Last name', undefined, '2');
            break;
          case this.errorCase('phone'):
            this.errorMsg = this.errorCase(undefined, 'Phone', true);
            break;
          case this.lengthError("phone", "9"):
            this.errorMsg = this.errorCase(undefined, 'Phone', undefined, '9');
            break;
          case this.errorCase('email'):
            this.errorMsg = this.errorCase(undefined, 'Email', true);
            break;
          case `"email" must be a valid email`:
            this.errorMsg = 'Email is not valid'
            break;
        }
        Swal.fire({
          icon: 'error',
          title: this.errorMsg
        })
      }
    })
  }
}

