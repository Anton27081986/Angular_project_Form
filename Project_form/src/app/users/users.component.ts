import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MessagesService } from '../services/messages.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(private messagesService: MessagesService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    // public userInfo: string = '';
    // response: any;

    // postUser() {
    //     this.messagesService.createUsers({ name: this.userInfo })
    //         .subscribe((response) => {
    //             this.response = response;
    //             console.log(this.response);
    //         })
    // }

    public getUsers() {
        this.messagesService.getUsers()
            .subscribe((data) => {
                console.log(data);
            });
    }


}
