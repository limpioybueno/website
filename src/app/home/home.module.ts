import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ServicesService } from './services/services.service';
import { CompaniesService } from './services/companies.service';
import { StoreService } from './services/store.service';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';
import { StoreComponent } from './store/store.component';
@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    StoreComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    NbCardModule,
    NbIconModule,
    ComponentsModule
  ],
  providers: [
    ServicesService,
    CompaniesService,
    StoreService
  ]
})
export class HomeModule { }
