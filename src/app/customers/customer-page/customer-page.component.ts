import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Person, Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html'
})
export class CustomerPageComponent implements OnInit {
  constructor(public customerApi: ApiService) { }

  customers?: Person[]

  ngOnInit(): void {
    this.customerApi.getCustomers().subscribe({
      next: (data: Person[]) => this.customers = data
    })
  }

  getTitle: Title = {
    name: 'Customers',
    class: 'bi bi-person-fill'
  }

}
