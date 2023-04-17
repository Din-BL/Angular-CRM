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

  employees?: Array<Item>
  searchEmployee?: string

  ngOnInit(): void {
    this.employeeApi.createEmployees()
    this.employeeApi.getEmployees().subscribe({
      next: data => {
        this.employees = data,
          console.log(this.employees);
      },
      error: error => console.log(error.message)
    })
    this.employee.searchEmployee.subscribe((data) => this.searchEmployee = data)
  }

  getTitle: Title = {
    name: 'Contacts',
    class: 'bi bi-envelope-fill'
  }
}
