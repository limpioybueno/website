import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesService {
    private token = 'auth-token';
    constructor(
        private http: HttpClient
    ) { }

    getServices(params?: any): Observable<any> {
        return this.http.get(`${environment.API_ENDPOINT}services`, {
            params: {
                limit: '10'
            }
        });
    }
}
