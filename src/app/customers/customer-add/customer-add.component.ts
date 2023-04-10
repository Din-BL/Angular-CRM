import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/core/validation.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  providers: [ValidationService]
})
export class CustomerAddComponent implements OnInit {

  constructor(public addForm: ValidationService) { }

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
      // Create a customer
    }
  }
}
