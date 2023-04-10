import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/core/validation.service';
import { Title } from 'src/app/core/type.model';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

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

  constructor(public editForm: ValidationService, private router: Router) { }

  ngOnInit(): void {
    this.editMode = this.router.url.includes('edit')
    this.editForm.customerForm
  }

  getError(field: string): FormControl {
    return this.editForm.customerForm.get(field) as FormControl;
  }

  onSubmit() {
    console.log(this.editForm.customerForm);
  }

  onCancel() {
    this.router.navigate(['/'])
  }
}
