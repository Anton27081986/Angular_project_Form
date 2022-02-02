import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { MessagesService } from '../services/messages.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    public form: FormGroup;
    public name = new FormControl('', [Validators.required, Validators.minLength(3)]);
    public email = new FormControl('', [Validators.required, Validators.email]);
    public phone = new FormControl('', [Validators.required, Validators.minLength(10)]);
    public title = new FormControl('', Validators.required);
    public description = new FormControl('');
    public phoneMask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

    public reCaptcha = new FormControl('', Validators.required);

    constructor(public messagesService: MessagesService) {
        this.form = new FormGroup({
            name: this.name,
            email: this.email,
            phone: this.phone,
            title: this.title,
            description: this.description
        })

    }

    // public get _name() {
    //     return this.form.get('name')!;
    // }

    ngOnInit(): void {

    }

    // public checkForLength(control: FormControl) {
    //     if (control.value.length <= 3) {
    //         return {
    //             'lengthError': true
    //         }
    //     }
    //     return null;
    // }

    public submit() {
        console.log(this.form);

        this.messagesService.createUsers(this.form.value)
            .subscribe((data) => {
                console.log(data);

            });
    }

}

