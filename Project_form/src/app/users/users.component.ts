import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../models/user';

// export interface PeriodicElement {
//     name: string;
//     position: number;
//     weight: number;
//     symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [

// ];

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

    displayedColumns: string[] = ['name', 'email', 'phone', 'title', 'description'];
    dataSource!: MatTableDataSource<IUser>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private messagesService: MessagesService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    public getUsers() {
        this.messagesService.getUsers()
            .subscribe((data) => {
                console.log(data);
                this.dataSource = new MatTableDataSource<IUser>(Object.values(data));
                this.dataSource.paginator = this.paginator;
            });
    }

    //=========================================================================================



    // ngAfterViewInit() {
    //     this.dataSource.paginator = this.paginator;
    // }



    // public userInfo: string = '';
    // response: any;

    // postUser() {
    //     this.messagesService.createUsers({ name: this.userInfo })
    //         .subscribe((response) => {
    //             this.response = response;
    //             console.log(this.response);
    //         })
    // }
}
