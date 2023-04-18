import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/assists.service';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit, OnDestroy {

    constructor(private theme: SessionService) { }

    private activatedSub!: Subscription

    themeColor = false

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