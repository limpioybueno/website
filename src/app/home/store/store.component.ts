import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public store: any;
  public services: any;
  constructor(
    private router: ActivatedRoute,
    private storeService: StoreService
  ) {
    this.loadStore();
  }

  ngOnInit(): void {
  }

  loadStore(): void {
    this.router.params.subscribe(params => {
      const {storeId} = params;
      this.getStore(storeId);
      this.getServices(storeId);
    });
  }

  getStore(storeId: string): void {
    this.storeService.getStore(storeId)
      .subscribe(store => this.store = store);
  }

  getServices(storeId: string): void {
    this.storeService.getStoreServices(storeId)
      .subscribe(services => this.services = services);
  }
}
