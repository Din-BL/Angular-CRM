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
    if (this.router.url.includes('customers')) {
      this.itemInfo.customerID.subscribe((id) => this.customerId = id),
        this.itemInfo.editCustomer.subscribe((customer) => {
          const index = this.items?.findIndex((item) => item._id === customer._id);
          if (index !== -1) this.items![index as number] = customer;
        })
    } else {
      this.employeeList = this.items
      this.itemInfo.searchEmployee.subscribe((data) => {
        this.items = this.employeeList?.filter((employee) =>
          employee.full?.toLowerCase().startsWith(data.toLowerCase()) ||
          employee.full?.toUpperCase().startsWith(data.toUpperCase())
        );
      })
    }
  }

  customerId = ''
  employeeList?: Array<Item>

  constructor(private router: Router, private route: ActivatedRoute,
    private api: ApiService, private itemInfo: SessionService) { }

  @Input() icons?: boolean

  @Input() items?: Array<Item>

  onEdit(item: Item) {
    if (this.router.url.includes('edit') || this.router.url.length > 10) "";
    else {
      this.router.navigate([`${item._id}/edit`], { relativeTo: this.route })
      this.itemInfo.addCustomer.next(true)
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
          this.itemInfo.addCustomer.next(this.items![index].detail as boolean)
          this.customerId = ""
        }
      }
      else {
        this.router.navigate([`${item._id}`], { relativeTo: this.route })
        this.items![index].detail = !this.items![index].detail
        this.itemInfo.addCustomer.next(this.items![index].detail as boolean)
      }
    }
  }

  onDelete(item: Item) {
    if (this.router.url.includes('edit') || this.router.url.length > 10) "";
    else {
      this.api.deleteCustomer(item._id as string).subscribe({
        next: () => this.items = this.items?.filter(customer => customer._id !== item._id),
        error: error => console.log(error.message)
      })
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
