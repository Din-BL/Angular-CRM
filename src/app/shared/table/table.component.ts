import { Component, Input } from '@angular/core';
import { Table } from 'src/app/core/type.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  @Input() items?: Array<Table> = [{
    first: '',
    last: '',
    full: '',
    phone: '',
    email: '',
    birthday: ''
  }]
}
