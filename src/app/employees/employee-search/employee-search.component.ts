import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SessionService } from 'src/app/core/assists.service';

@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html'
})
export class EmployeeSearchComponent implements AfterViewInit {

  constructor(private employee: SessionService) { }

  @ViewChild('search') searchField!: ElementRef

  ngAfterViewInit(): void {
    this.searchField.nativeElement.focus()
  }
  searchEmployee(event: Event) {
    const data = (<HTMLInputElement>event.target!).value;
    this.employee.searchEmployee.next(data)
  }
}
