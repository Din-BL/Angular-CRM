import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/core/validation.service';
import { Item, Title } from 'src/app/core/type.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';

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
  id!: number
  customer!: Item

  constructor(public editForm: ValidationService, private router: Router,
    private route: ActivatedRoute, private customerApi: ApiService) { }

  ngOnInit(): void {
    this.editMode = this.router.url.includes('edit')
    this.editForm.customerForm
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = (params['id']);
          this.customer = this.customerApi.getCustomer(this.id)
        })
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
