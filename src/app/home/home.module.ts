import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';
import { BusinessCardComponent } from '../components/business-card/business-card.component';
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [
    HomeComponent,
    MainLayoutComponent,
    HeaderMenuComponent,
    BusinessCardComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  providers: [
    ServicesService
  ]
})
export class HomeModule { }
