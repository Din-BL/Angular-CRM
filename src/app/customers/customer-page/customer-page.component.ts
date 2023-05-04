import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { Person, Title } from 'src/app/core/type.model';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html'
})
export class CustomerPageComponent implements OnInit, OnDestroy {
  constructor(public customerApi: ApiService,
    private router: Router, private theme: HelperService) { }

  customers?: Person[]
  themeColor = false;
  nullifyTheme?: Subscription

  ngOnInit(): void {
    // this.router.navigate(['/']);
    this.customerApi.getCustomers().subscribe((data: Person[]) => this.customers = data)
    this.nullifyTheme = this.theme.themeMode.subscribe(theme => this.themeColor = theme)
    this.themeColor = this.theme.themeCapture
  }

  ngOnDestroy(): void {
    this.nullifyTheme?.unsubscribe()
  }

  onBackgroundClass(theme: boolean): string {
    return this.theme.onBackgroundClass(theme)
  }

  getTitle: Title = {
    name: 'Customers',
    class: 'bi bi-person-fill'
  }
}
