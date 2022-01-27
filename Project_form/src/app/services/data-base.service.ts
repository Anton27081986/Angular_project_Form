import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataBaseService {

    constructor(private http: HttpClient) { }

    public postData(object: IData): Observable<any> {
        return this.http.post<any>('https://angular-form-d3668-default-rtdb.firebaseio.com/usersData', object);
    }

}
