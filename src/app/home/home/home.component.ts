import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public companies: any[];
  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.loadServices();
  }

  public loadServices(): void {
    this.companiesService
      .getCompanies()
      .subscribe(
        (response) => {
          this.companies = response;
        }
      );
  }

}
