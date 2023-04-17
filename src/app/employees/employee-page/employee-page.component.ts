import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { SessionService } from 'src/app/core/session.service';
import { Item, Title } from 'src/app/core/type.model';

@Component({
  selector: 'employee-page',
  templateUrl: './employee-page.component.html'
})
export class EmployeePageComponent implements OnInit {

  constructor(private employeeApi: ApiService, private employee: SessionService) { }

  // employees?: Array<Item>

  ngOnInit(): void {
    // this.employeeApi.createEmployees()
    // this.employeeApi.getEmployees().subscribe({
    //   next: data => {
    //     this.employees = data,
    //       console.log(this.employees);
    //   },
    //   error: error => console.log(error.message)
    // })
  }

  employees?: Array<Item> = [
    {
      "full": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1 555-555-5555",
      "birthday": "1980-01-01"
    },
    {
      "full": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone": "+44 (20) 1234-5678",
      "birthday": "1990-05-10"
    },
    {
      "full": "Bob Johnson",
      "email": "bob.johnson@example.com",
      "phone": "555-555-5555",
      "birthday": "1985-11-15"
    }
  ]


  getTitle: Title = {
    name: 'Contacts',
    class: 'bi bi-envelope-fill'
  }
}
