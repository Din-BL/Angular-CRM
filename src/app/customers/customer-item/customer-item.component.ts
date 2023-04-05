import { Component } from '@angular/core';

@Component({
  selector: 'customer-item',
  templateUrl: './customer-item.component.html',
  styles: [`.bi {margin-left: 10px;}`]
})
export class CustomerItemComponent {
  item = {
    first: 'Mark',
    last: 'Otto',
    phone: '050-352-3245',
    email: 'Din@Gmail.com'
  }
}
