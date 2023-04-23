import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html',
  styles: [`.search-color{background-color: black; color: white;}`]
})
export class EmployeeSearchComponent implements AfterViewInit {

  constructor(private employee: HelperService) { }

  themeColor = false;

  @ViewChild('search') searchField!: ElementRef

  ngAfterViewInit(): void {
    this.employee.themeMode.subscribe(theme => this.themeColor = theme)
    this.searchField.nativeElement.focus()
  }

  onInputClass(theme: boolean): string {
    return this.employee.onInputClass(theme)
  }

  searchEmployee(event: Event) {
    const data = (<HTMLInputElement>event.target!).value;
    this.employee.searchEmployee.next(data)
  }
}
