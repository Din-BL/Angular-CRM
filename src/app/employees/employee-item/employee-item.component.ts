import { Component } from '@angular/core';

@Component({
  selector: 'employee-item',
  templateUrl: './employee-item.component.html'
})
export class EmployeeItemComponent {
  item = {
    full: 'Mark Otto',
    phone: '050-352-3245',
    email: 'Din@Gmail.com',
    birthday: '24/05/1968'
  }
}

