import { Component } from '@angular/core';

@Component({
  selector: 'theme',
  templateUrl: './theme.component.html'
})
export class ThemeComponent {
  darkMode = true
  toggleMode() {
    this.darkMode = !this.darkMode
  }
}
