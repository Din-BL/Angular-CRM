import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html'
})
export class EmployeeSearchComponent implements AfterViewInit {

  constructor(private employee: HelperService) { }

  @ViewChild('search') searchField!: ElementRef

  ngAfterViewInit(): void {
    this.searchField.nativeElement.focus()
  }
  searchEmployee(event: Event) {
    const data = (<HTMLInputElement>event.target!).value;
    this.employee.searchEmployee.next(data)
  }
}
