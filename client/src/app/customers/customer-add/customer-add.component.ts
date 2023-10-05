import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { Person } from 'src/app/core/type.model';
import { ValidationService } from 'src/app/core/validation.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  providers: [ValidationService],
  styleUrls: ['./customer-add.component.scss']
})

export class CustomerAddComponent implements OnInit {

  @Input() users?: Array<Person>

  constructor(public addForm: ValidationService, private customerApi: ApiService, private propertyStatus: HelperService) { }

  addStatus?: boolean
  themeColor = false;
  isSmallScreen = window.innerWidth < 477;

  ngOnInit(): void {
    this.addForm.customerForm
    this.propertyStatus.addCustomer.subscribe(status => this.addStatus = status)
    this.propertyStatus.themeMode.subscribe(theme => this.themeColor = theme)
    this.themeColor = this.propertyStatus.themeCapture
  }

  onInputClass(theme: boolean): string {
    return this.propertyStatus.onInputClass(theme)
  }

  getError(field: string): FormControl {
    return this.addForm.customerForm.get(field) as FormControl;
  }

  onSubmit() {
    this.customerApi.addCustomer(this.addForm.customerForm.value).subscribe({
      next: (data: Person) => {
        this.users?.push(data),
          this.addForm.customerForm.reset()
      },
      error: (error) => {
        let errorMsg: string = error.error[0].message ? error.error[0].message : error.error
        if (errorMsg.includes('E11000 duplicate key')) errorMsg = 'Email already exist'
        Swal.fire({
          icon: 'error',
          title: errorMsg
        })
      }
    })
  }
}

