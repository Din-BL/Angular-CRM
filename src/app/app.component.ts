import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SessionService } from '././core/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  constructor(private session: SessionService) { }

  title = 'Angular-Project';

  ngAfterViewInit(): void {
    // this.session.homeRedirect()
  }
}
