import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Item, Title } from 'src/app/core/type.model';

@Component({
  selector: 'employee-page',
  templateUrl: './employee-page.component.html'
})
export class EmployeePageComponent implements OnInit {

  constructor(private employeeApi: ApiService) { }

  employees?: Array<Item>

  ngOnInit(): void {
    this.employeeApi.createEmployees()
    this.employeeApi.getEmployees().subscribe({
      next: data => this.employees = data,
      error: error => console.log(error)
    })
  }

  getTitle: Title = {
    name: 'Contacts',
    class: 'bi bi-envelope-fill'
  }
}
