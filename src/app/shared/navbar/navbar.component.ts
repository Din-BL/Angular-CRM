import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/session.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [`.inactive {color: rgba(255, 255, 255, 0.55);text-decoration: none; padding:5px}`]
})
export class NavbarComponent implements OnInit {
  themeColor = false
  constructor(private theme: SessionService) { }

  ngOnInit(): void {
    this.theme.themeMode.subscribe(colorStatus => {
      this.themeColor = colorStatus
    })
  }
  onColorChanged(style: string) {
    return { [style]: this.themeColor ? 'black' : 'white' };
  }
}
