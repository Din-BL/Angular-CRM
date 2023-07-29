import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

    constructor(private theme: HelperService) { }

    themeColor = false

    ngOnInit(): void {
        this.theme.themeMode.subscribe(colorStatus => this.themeColor = colorStatus)
    }
    onClassChanged() {
        return this.themeColor ? 'bg-dark text-white py-3' : 'bg-light text-dark py-3'
    }

}