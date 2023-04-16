import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { SessionService } from 'src/app/core/session.service';
import { Item } from 'src/app/core/type.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`.bi {margin-left: 10px;}`]
})
export class TableComponent implements OnInit {

  ngOnInit(): void {
    this.customerUrl.customerID.subscribe((id) => {
      this.customerId = id
      console.log(this.customerId);
    })
  }

  customerId = ''

  constructor(private router: Router, private route: ActivatedRoute,
    private api: ApiService, private customerUrl: SessionService) { }

  @Input() icons?: boolean

  @Input() items?: Array<Item>

  onEdit(item: Item) {
    if (this.router.url.includes('edit') || this.router.url.length > 10) "";
    else {
      this.router.navigate([`${item._id}/edit`], { relativeTo: this.route })
    }
  }
  onDetail(item: Item, index: number) {

    if (this.router.url.includes('edit')) ""
    else {
      if (this.customerId) {
        if (this.customerId !== item._id) ""
        else {
          this.router.navigate(['/'], { relativeTo: this.route })
          this.items![index].detail = !this.items![index].detail
          this.customerId = ""
        }
      }
      else {
        this.router.navigate([`${item._id}`], { relativeTo: this.route })
        this.items![index].detail = !this.items![index].detail
      }
    }
  }

  onDelete(item: Item) {
    this.api.deleteCustomer(item._id as string).subscribe({
      next: () => this.items = this.items?.filter(customer => customer._id !== item._id),
      error: error => console.log(error.message)
    })
  }

  eyeToggle(index: number): string {
    if (this.items![index].detail == true) {
      return 'bi bi-eye-slash'
    } else {
      return 'bi bi-eye'
    }
  }
}
