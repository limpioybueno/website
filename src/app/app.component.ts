import { Component } from '@angular/core';
import { Store } from './models/store.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Limpio y bueno';

  stores: Store[] = [
    {
      id: '1',
      name: 'Store test 1',
      image: 'assets/images/store_test.jpg',
      category: 'Limpieza de interiores',
      available: true
    },
    {
      id: '2',
      name: 'Store test 2',
      image: 'assets/images/store_test.jpg',
      category: 'Limpieza de cortinas',
      available: true
    },
    {
      id: '3',
      name: 'Store test 2',
      image: 'assets/images/store_test.jpg',
      category: 'Limpieza de interiores',
      available: true
    },
    {
      id: '4',
      name: 'Store test 2',
      image: 'assets/images/store_test.jpg',
      category: 'Limpieza de auto',
      available: true
    }
  ];
}
