import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMessage } from '../models/message';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {

    constructor(private http: HttpClient) { }

    public createMessage(message: IMessage): Observable<void> {
        return this.http.post<void>(`${environment.DB_Url}`, message);
    }
}
