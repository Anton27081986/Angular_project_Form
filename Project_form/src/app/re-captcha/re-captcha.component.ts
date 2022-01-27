import { Component } from '@angular/core';
import { RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
    selector: 'app-re-captcha',
    templateUrl: './re-captcha.component.html',
    styleUrls: ['./re-captcha.component.css']
})

export class ReCaptchaComponent {

    public resolved(captchaResponse: string): void {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }

    public onError(errorDetails: RecaptchaErrorParameters): void {
        console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    }

}
