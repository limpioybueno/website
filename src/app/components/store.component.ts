import { Component, Input } from '@angular/core';
import { Store } from '../models/store.model';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html'
})

export class StoreComponent {
    @Input() store: Store;
}
