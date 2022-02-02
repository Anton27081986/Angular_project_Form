import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMessage } from '../models/message';
import { IUser } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {

    constructor(private http: HttpClient) { }

    // public createMessage(message: IMessage): Observable<void> {
    //     return this.http.post<void>(`${environment.DB_Url}`, message);
    // }

    public createUsers(userInfo: IUser): Observable<void> {
        return this.http.post<void>('https://angular-form-d3668-default-rtdb.firebaseio.com/users.json', userInfo)
    }

    public getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('https://angular-form-d3668-default-rtdb.firebaseio.com/users.json')
    }


}
