import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Item } from 'src/app/core/type.model';
import { ValidationService } from 'src/app/core/validation.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  providers: [ValidationService]
})
export class CustomerAddComponent implements OnInit {

  @Input() items?: Array<Item>

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
      this.customerApi.addCustomer(this.addForm.customerForm.value).subscribe({
        next: data => this.items?.push(data),
        error: error => console.log(error)
      })
      this.addForm.customerForm.reset()
    }
  }
}
