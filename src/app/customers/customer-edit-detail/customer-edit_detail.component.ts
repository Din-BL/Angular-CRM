import { Component } from '@angular/core';
import { Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-edit-detail',
  templateUrl: './customer-edit-detail.component.html'
})
export class CustomerEditDetailComponent {
  getTitle: Title = {
    name: 'Edit Customers',
    class: 'bi bi-pencil-fill'
  }
}
