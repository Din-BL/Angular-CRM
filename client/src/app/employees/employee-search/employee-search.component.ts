import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html',
  styles: [`.search-color{background-color: black; color: white;}`]
})
export class EmployeeSearchComponent implements OnInit, AfterViewInit {

  constructor(private employee: HelperService) { }

  themeColor = false;

  @ViewChild('search') searchField!: ElementRef

  ngOnInit(): void {
    this.themeColor = this.employee.themeCapture
  }

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
