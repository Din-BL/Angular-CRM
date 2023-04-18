import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/assists.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

  themeColor = false

  constructor(private theme: SessionService) { }

  private activatedSub!: Subscription

  ngOnInit(): void {
    this.theme.themeMode.subscribe(colorStatus => {
      this.themeColor = colorStatus
    })
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe()
  }
  onColorChanged(style: string) {
    return { [style]: this.themeColor ? 'black' : 'white' };
  }
}
