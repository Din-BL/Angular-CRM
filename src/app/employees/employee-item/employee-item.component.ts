import { Component } from '@angular/core';
import { Table } from 'src/app/core/type.model';

@Component({
  selector: 'employee-item',
  templateUrl: './employee-item.component.html'
})
export class EmployeeItemComponent {
  items: Array<Table> = [{
    full: 'Mark Otto',
    phone: '050-352-3245',
    email: 'Din@Gmail.com',
    birthday: '24/05/1968'
  }, {
    full: 'David Ben',
    phone: '050-352-3245',
    email: 'David@Gmail.com',
    birthday: '21/05/1968'
  }]
}

