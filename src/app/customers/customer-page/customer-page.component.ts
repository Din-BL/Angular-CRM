import { Component } from '@angular/core';
import { Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html'
})
export class CustomerPageComponent {

  constructor() { }

  getTitle: Title = {
    name: 'Customers',
    class: 'bi bi-person-fill'
  }

}
