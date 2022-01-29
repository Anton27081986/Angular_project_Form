import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { DataBaseService } from '../services/data-base.service';

// export interface FormModel {
//     captcha?: string;
// }

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {



    // public formModel: FormModel = {};
    public form: FormGroup;
    public name = new FormControl('', [Validators.required, Validators.minLength(2)]);
    public email = new FormControl('', [Validators.required, Validators.email]);
    public phone = new FormControl('', [Validators.required, Validators.minLength(3)]);
    public phoneMask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

    constructor() {
        this.form = new FormGroup({
            name: this.name,
            email: this.email,
            phone: this.phone
        })

    }

    ngOnInit(): void {

    }
}



    // public postData(): void {
    //     console.log(this.form);
    //     this.dataBaseService.postData(this.form.value)
    //         .subscribe(data => {
    //             console.log(data);
    //         });
    // }

