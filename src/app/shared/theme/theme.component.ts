import { Component } from '@angular/core';
import { SessionService } from 'src/app/core/assists.service';

@Component({
  selector: 'theme',
  templateUrl: './theme.component.html'
})

export class ThemeComponent {
  constructor(private theme: SessionService) { }

  darkMode = false

  toggleMode() {
    this.darkMode = !this.darkMode
    this.theme.themeMode.next(this.darkMode)
  }
}
