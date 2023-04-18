import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { SessionService } from 'src/app/core/assists.service';
import { Person } from 'src/app/core/type.model';

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
          const index = this.users?.findIndex((item) => item._id === customer._id);
          if (index !== -1) this.users![index as number] = customer;
        })
    } else {
      this.employeeList = this.users
      this.itemInfo.searchEmployee.subscribe((data) => {
        this.users = this.employeeList?.filter((employee) =>
          employee.full?.toLowerCase().startsWith(data.toLowerCase()) ||
          employee.full?.toUpperCase().startsWith(data.toUpperCase())
        );
      })
    }
  }

  customerId = ''
  employeeList?: Array<Person>

  constructor(private router: Router, private route: ActivatedRoute,
    private api: ApiService, private itemInfo: SessionService) { }

  @Input() icons?: boolean

  @Input() users?: Array<Person>

  onEdit(item: Person) {
    if (this.router.url.includes('edit') || this.router.url.length > 10) "";
    else {
      this.router.navigate([`${item._id}/edit`], { relativeTo: this.route })
      this.itemInfo.addCustomer.next(true)
    }
  }
  onDetail(item: Person, index: number) {
    if (this.router.url.includes('edit')) ""
    else {
      if (this.customerId) {
        if (this.customerId !== item._id) ""
        else {
          this.router.navigate(['/'], { relativeTo: this.route })
          this.users![index].detail = !this.users![index].detail
          this.itemInfo.addCustomer.next(this.users![index].detail as boolean)
          this.customerId = ""
        }
      }
      else {
        this.router.navigate([`${item._id}`], { relativeTo: this.route })
        this.users![index].detail = !this.users![index].detail
        this.itemInfo.addCustomer.next(this.users![index].detail as boolean)
      }
    }
  }

  onDelete(item: Person) {
    if (this.router.url.includes('edit') || this.router.url.length > 10) "";
    else {
      this.api.deleteCustomer(item._id as string).subscribe({
        next: () => this.users = this.users?.filter(customer => customer._id !== item._id)
      })
    }
  }

  eyeToggle(index: number): string {
    if (this.users![index].detail == true) {
      return 'bi bi-eye-slash'
    } else {
      return 'bi bi-eye'
    }
  }
}
