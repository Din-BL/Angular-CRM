import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { Person } from 'src/app/core/type.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`.bi {margin-left: 10px;} @media (max-width: 579px){.bi {margin-left: 0;}}`]
})
export class TableComponent implements OnInit {

  ngOnInit(): void {
    this.themeColor = this.personInfo.themeCapture
    this.personInfo.themeMode.subscribe(theme => this.themeColor = theme)
    if (this.router.url.includes('customers')) {
      this.personInfo.customerID.subscribe((id) => this.customerId = id),
        this.personInfo.editCustomer.subscribe((customer: Person) => {
          const index = this.users?.findIndex((user) => user._id === customer._id);
          if (index !== -1) this.users![index as number] = customer;
        })
    } else {
      this.employeeList = this.users
      this.personInfo.searchEmployee.subscribe((data) => {
        this.users = this.employeeList?.filter((employee) =>
          employee.full?.toLowerCase().startsWith(data.toLowerCase()) ||
          employee.full?.toUpperCase().startsWith(data.toUpperCase())
        );
      })
    }
  }

  themeColor = false;
  customerId = ''
  employeeList?: Array<Person>

  constructor(private router: Router, private route: ActivatedRoute,
    private api: ApiService, private personInfo: HelperService) { }

  @Input() icons?: boolean

  @Input() users?: Array<Person>

  onEdit(item: Person) {
    if (this.router.url.includes('edit') || this.router.url.length > 10) "";
    else {
      this.router.navigate([`${item._id}/edit`], { relativeTo: this.route })
      this.personInfo.addCustomer.next(true)
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
          this.personInfo.addCustomer.next(this.users![index].detail as boolean)
          this.customerId = ""
        }
      }
      else {
        this.router.navigate([`${item._id}`], { relativeTo: this.route })
        this.users![index].detail = !this.users![index].detail
        this.personInfo.addCustomer.next(this.users![index].detail as boolean)
      }
    }
  }

  onDelete(item: Person) {
    if (this.router.url.includes('edit') || this.router.url.length > 10) "";
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.api.deleteCustomer(item._id as string).subscribe({
            next: () => this.users = this.users?.filter(customer => customer._id !== item._id)
          })
          Swal.fire(
            'Deleted!',
            `${item['email']} has been deleted`,
            'success'
          )
        }
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
