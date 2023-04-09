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

  @Input() icons?: boolean

  @Input() items?: Array<Item> = [{
    first: '',
    last: '',
    full: '',
    phone: '',
    email: '',
    birthday: '',
    detail: false
  }]

  onEdit() {
    this.router.navigate(['1/edit'], { relativeTo: this.route })
  }
  onDetail(index: number) {
    if (this.router.url == '/customers/1') {
      this.router.navigate(['/'], { relativeTo: this.route })
      this.items![index].detail = !this.items![index].detail
    }
    else {
      this.router.navigate(['1'], { relativeTo: this.route })
      this.items![index].detail = !this.items![index].detail
    }
  }

  eyeToggle(index: number): string {
    if (this.items![index].detail == true) {
      return 'bi bi-eye-slash'
    } else {
      return 'bi bi-eye'
    }
  }


}
