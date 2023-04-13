import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { ValidationService } from 'src/app/core/validation.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  providers: [ValidationService]
})
export class CustomerAddComponent implements OnInit {

  constructor(public addForm: ValidationService, private customerApi: ApiService) { }

  ngOnInit(): void {
    this.addForm.customerForm
  }

  getError(field: string): FormControl {
    return this.addForm.customerForm.get(field) as FormControl;
  }

  onSubmit() {
    if (this.addForm.customerForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Form'
      })
    }
    else {
      this.customerApi.addCustomer(this.addForm.customerForm.value)
      this.addForm.customerForm.reset()
    }
  }
}
