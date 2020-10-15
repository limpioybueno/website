import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-business-card',
    templateUrl: './business-card.component.html',
    styleUrls: ['./business-card.component.css']
})

export class BusinessCardComponent {
    @Input() id: string;
    @Input() name: string;
    @Input() image: string;
    @Input() price: number | string;
    @Input() duration: string;
    @Input() categories: any[];
}
