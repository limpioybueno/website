import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  params: any = {};
  error: string;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeForm();
    this.checkRegister();
  }

  initializeForm(): void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  checkRegister(): void{
    this.activatedRoute.queryParams.subscribe(
      params => {
        if (params && params.registered){
          this.params = params;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  submit(): void{
    this.authService.login(
      this.loginForm.value
    )
    .subscribe(
      res => {
        this.authService.setAuth(res);
        this.router.navigate(['']);
      },
      err => {
        this.error = err.message;
      }
    );
  }
}
