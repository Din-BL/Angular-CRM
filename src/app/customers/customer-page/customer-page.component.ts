import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { Person, Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html'
})
export class CustomerPageComponent implements OnInit {
  constructor(public customerApi: ApiService, private theme: HelperService) { }

  customers?: Person[]
  themeColor = false;

  ngOnInit(): void {
    this.customerApi.getCustomers().subscribe((data: Person[]) => this.customers = data)
    this.theme.themeMode.subscribe(theme => this.themeColor = theme)
  }

  onBackgroundClass(theme: boolean): string {
    return this.theme.onBackgroundClass(theme)
  }

  getTitle: Title = {
    name: 'Customers',
    class: 'bi bi-person-fill'
  }

}
