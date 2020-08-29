import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {AuthRoutingModule} from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service'
import { AuthInterceptorProvider } from '../interceptors/auth.interceptor';

@NgModule({
  declarations: [LoginComponent, AuthComponent, RegisterComponent],
  providers: [
    AuthService,
    AuthInterceptorProvider
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class AuthModule { }
