import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
    selector: 'app-re-captcha',
    templateUrl: './re-captcha.component.html',
    styleUrls: ['./re-captcha.component.css']
})

export class ReCaptchaComponent implements OnInit {

    public aFormGroup!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.aFormGroup = this.formBuilder.group({
            recaptcha: ['', Validators.required]
        });
    }

    public siteKey: string = '6LdJ-DMeAAAAAJuPltGkvTWcch_7DPSClgGQKc-a';



    // public resolved(captchaResponse: string): void {
    //     console.log(`Resolved captcha with response: ${captchaResponse}`);
    // }

    // public onError(errorDetails: RecaptchaErrorParameters): void {
    //     console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    // }

}
