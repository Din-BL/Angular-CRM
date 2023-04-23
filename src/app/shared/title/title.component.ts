import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';
import { Title } from 'src/app/core/type.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {

  constructor(private theme: HelperService) { }

  ngOnInit(): void {
    this.theme.themeMode.subscribe(theme => this.themeColor = theme)
  }

  @Input() title!: Title

  themeColor = false;

  onColorChanged(style: string, theme: boolean) {
    return this.theme.onColorChanged(style, theme);
  }
}
