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

  onSubmit() {
    this.customerApi.addCustomer(this.addForm.customerForm.value).subscribe({
      next: data => {
        this.users?.push(data),
          this.addForm.customerForm.reset()
      },
      error: error => {
        this.errorMsg = error.error[0].message
        Swal.fire({
          icon: 'error',
          title: this.errorMsg
        })
      }
    })
  }
}

