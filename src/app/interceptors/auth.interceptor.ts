import { Injectable, Provider } from '@angular/core';
import { 
    HttpInterceptor, 
    HttpRequest,
    HttpHandler, 
    HttpEvent, 
    HttpResponse,
    HttpErrorResponse,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { AuthService } from '../auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ):Observable<HttpEvent<any>> {
  
    const token: string = this.authService.authToken;

    let request = req;

    if (token) {
        request = request.clone({
            headers: request.headers.set("Authorization", "Bearer " + token)
        });
    }

    request = request.clone({
        headers: request.headers.set("Accept", "application/json")
    });

    return next.handle(request).pipe(
        map((event: HttpEvent<any>)=>{
            if (event instanceof HttpResponse) {
            }
            return event;
        }),
        catchError((error: HttpErrorResponse)=>{
            return throwError(error.error);
        })
    )
  }
}

export const AuthInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}