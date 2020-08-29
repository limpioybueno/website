import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: string[];
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeForm()
   }

  initializeForm(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', Validators.required],
      identification: ['', Validators.required],
      telephone: ['', Validators.minLength(7)]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.errors = [];
    this.authService.register(
      this.registerForm.value
    )
    .subscribe(
      res =>{
        this.router.navigate(['auth', 'login'], {
          queryParams: {
            registered: true,
            mail: res.email
          }
        })
      },
      error =>{
        this.errors = error.message;
      }
    )
  }
}
