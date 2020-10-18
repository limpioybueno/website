import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CompaniesService {
    constructor(
        private http: HttpClient
    ) { }

    getCompanies(params?: any): Observable<any> {
        return this.http.get(`${environment.API_ENDPOINT}companies`, {
            params: {
                limit: '10'
            }
        });
    }
}
