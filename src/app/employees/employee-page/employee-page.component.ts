import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Item, Title } from 'src/app/core/type.model';

@Component({
  selector: 'employee-page',
  templateUrl: './employee-page.component.html'
})
export class EmployeePageComponent implements OnInit {

  constructor(private api: ApiService) { }

  employees?: Array<Item>

  ngOnInit(): void {
    this.employees = this.api.employees
  }

  getTitle: Title = {
    name: 'Contacts',
    class: 'bi bi-envelope-fill'
  }
}
