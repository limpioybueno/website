import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-business-card',
    templateUrl: './business-card.component.html',
    styleUrls: ['./business-card.component.scss']
})

export class BusinessCardComponent {
    @Input() company: any;
    constructor(){
        console.log(this.company);
    }
}
