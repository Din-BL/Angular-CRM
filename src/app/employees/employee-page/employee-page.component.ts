import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Person, Title } from 'src/app/core/type.model';

@Component({
  selector: 'employee-page',
  templateUrl: './employee-page.component.html'
})
export class EmployeePageComponent implements OnInit {

  constructor(private employeeApi: ApiService) { }

  employees?: Array<Person>
  isLoading = true

  ngOnInit(): void {
    this.employeeApi.createEmployees().subscribe({
      next: (() => {
        this.employeeApi.getEmployees().subscribe({
          next: data => {
            this.employees = data
            this.isLoading = false;
          }
        })
      })
    })
  }

  getTitle: Title = {
    name: 'Contacts',
    class: 'bi bi-envelope-fill'
  }
}
