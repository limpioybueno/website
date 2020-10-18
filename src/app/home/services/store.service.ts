import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {
    constructor(
        private http: HttpClient
    ) { }

    getStore(storeId: string): Observable<any> {
        return this.http.get(`${environment.API_ENDPOINT}companies/${storeId}`);
    }

    getStoreServices(storeId: string): Observable<any> {
        return this.http.get(`${environment.API_ENDPOINT}companies/${storeId}/services`);
    }
}
