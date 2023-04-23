import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './core/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  constructor(private auth: AuthService) { }

  title = 'Angular-Project';

  ngAfterViewInit(): void {
    this.auth.homeRedirect()
  }
}
