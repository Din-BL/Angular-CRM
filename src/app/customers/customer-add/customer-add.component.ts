import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/form.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  styles: [`.form-control.ng-dirty.ng-invalid.ng-touched{border: 1px solid red;}`],
  providers: [FormService]
})
export class CustomerAddComponent implements OnInit {

  constructor(public addForm: FormService) { }

  ngOnInit(): void {
    this.addForm.customerForm
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
