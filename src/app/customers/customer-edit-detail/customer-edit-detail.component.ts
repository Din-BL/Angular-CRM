import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/core/validation.service';
import { Title } from 'src/app/core/type.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  editMode?: boolean

  constructor(public editForm: ValidationService, private router: Router) { }

  ngOnInit(): void {
    this.editMode = this.router.url.includes('edit')
    this.editForm.customerForm
  }

  onSubmit() {
    console.log(this.editForm.customerForm);
  }
}
