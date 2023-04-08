import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Item, Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html'
})
export class CustomerPageComponent implements OnInit {
  constructor(public api: ApiService) { }

  customers?: Item[]

  ngOnInit(): void {
    this.customers = this.api.customers

  }
  getTitle: Title = {
    name: 'Customers',
    class: 'bi bi-person-fill'
  }

}
