import { Component } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'theme',
  templateUrl: './theme.component.html'
})

export class ThemeComponent {
  constructor(private theme: HelperService) { }

  darkMode = false

  toggleMode() {
    this.darkMode = !this.darkMode
    this.theme.themeMode.next(this.darkMode)
    this.theme.onThemeCapture(this.darkMode)
  }
}
