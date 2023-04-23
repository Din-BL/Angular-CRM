import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { Person, Title } from 'src/app/core/type.model';

@Component({
  selector: 'employee-page',
  templateUrl: './employee-page.component.html'
})
export class EmployeePageComponent implements OnInit {

  constructor(private employeeApi: ApiService, private theme: HelperService) { }

  employees?: Array<Person>
  isLoading = true
  themeColor = false;

  onBackgroundClass(theme: boolean): string {
    return this.theme.onBackgroundClass(theme)
  }

  ngOnInit(): void {
    this.theme.themeMode.subscribe(theme => this.themeColor = theme)
    this.employeeApi.createEmployees().subscribe({
      next: (() => {
        this.employeeApi.getEmployees().subscribe({
          next: (data: Person[]) => {
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
