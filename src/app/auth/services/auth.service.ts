import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
    private token: string = 'auth-token';
    constructor(
        private http: HttpClient
    ){}

    register(body:any): Observable<any>{
        return this.http.post(`${environment.API_ENDPOINT}auth/register`, body);
    }

    setAuthToken(token: string): void{
        localStorage.setItem(this.token, token);
    }

    get authToken(): string{
        return localStorage.getItem(this.token);
    }
}