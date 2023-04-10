import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeComponent } from './theme/theme.component';
import { TitleComponent } from './title/title.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ThemeComponent,
    TitleComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    TitleComponent,
    TableComponent
  ]
})
export class SharedModule { }
