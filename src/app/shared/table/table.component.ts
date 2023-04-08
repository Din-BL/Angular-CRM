import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/core/type.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`.bi {margin-left: 10px;}`]
})
export class TableComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  @Input() items?: Array<Item> = [{
    first: '',
    last: '',
    full: '',
    phone: '',
    email: '',
    birthday: ''
  }]


  onEdit() {
    this.router.navigate(['1'], { relativeTo: this.route })
  }
  onDetail() {
    // this.router.navigate(['1'], { relativeTo: this.route })
  }

  @Input() icons?: boolean
}
