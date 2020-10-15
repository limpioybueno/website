import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public services: any[];
  constructor(
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {
    this.loadServices();
  }

  public loadServices(): void {
    this.servicesService
      .getServices()
      .subscribe(
        (response) => {
          this.services = response;
        }
      );
  }

}
