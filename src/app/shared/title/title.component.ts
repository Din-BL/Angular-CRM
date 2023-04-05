import { Component, Input } from '@angular/core';
import { Title } from 'src/app/core/type.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title: Title = {
    name: '',
    class: ''
  }
}
