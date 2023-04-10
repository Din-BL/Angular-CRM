import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Item } from 'src/app/core/type.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`.bi {margin-left: 10px;}`]
})
export class TableComponent implements OnInit {

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

  id?: number

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id']);
        })
  }

  onEdit() {
    if (this.router.url.includes('edit') || this.router.url.includes('id')) ""
    else {
      this.router.navigate(['id/edit'], { relativeTo: this.route })
    }
  }
  onDetail(index: number) {
    if (this.router.url.includes('edit')) ""
    else {
      if (this.router.url == '/customers/id') {
        this.router.navigate(['/'], { relativeTo: this.route })
        this.items![index].detail = !this.items![index].detail
      }
      else {
        this.router.navigate(['id'], { relativeTo: this.route })
        this.items![index].detail = !this.items![index].detail
      }
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
