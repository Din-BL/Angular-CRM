import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/form.service';
import { Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-edit-detail',
  templateUrl: './customer-edit-detail.component.html',
  styles: [`.form-control.ng-dirty.ng-invalid.ng-touched{border: 1px solid red;}`]
})
export class CustomerEditDetailComponent implements OnInit {
  getTitle: Title = {
    name: 'Edit Customers',
    class: 'bi bi-pencil-fill'
  }

  constructor(public editForm: FormService) { }

  ngOnInit(): void {
    this.editForm.customerForm
  }

  onSubmit() {
    console.log(this.editForm.customerForm);
  }
}
