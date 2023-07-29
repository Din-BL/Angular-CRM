import { Component, OnInit } from '@angular/core';
import { HelperService } from '../core/helper.service';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(private theme: HelperService) { }

  themeColor = false

  ngOnInit(): void {
    this.theme.themeMode.subscribe(colorStatus => this.themeColor = colorStatus);
  }
}
