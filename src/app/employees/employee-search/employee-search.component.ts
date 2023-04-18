import { Component } from '@angular/core';
import { SessionService } from 'src/app/core/assists.service';

@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html'
})
export class EmployeeSearchComponent {

  constructor(private employee: SessionService) { }

  searchEmployee(event: Event) {
    const data = (<HTMLInputElement>event.target!).value;
    this.employee.searchEmployee.next(data)
  }
}
