import { Component } from '@angular/core';
import { Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent {
  getTitle: Title = {
    name: 'Edit Customers',
    class: 'bi bi-pencil-fill'
  }
}
