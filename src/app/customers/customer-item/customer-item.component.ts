import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Table } from 'src/app/core/type.model';

@Component({
  selector: 'customer-item',
  templateUrl: './customer-item.component.html',
  styles: [`.bi {margin-left: 10px;}`]
})
export class CustomerItemComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

  customers?: Table[]

  ngOnInit(): void {
    this.customers = this.api.customers
    console.log(this.customers);

  }

  onEdit() {
    this.router.navigate(['1'], { relativeTo: this.route })
  }
  onDetail() {
    // this.router.navigate(['1'], { relativeTo: this.route })
  }
}
