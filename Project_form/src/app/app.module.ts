import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
// import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ReCaptchaComponent } from './re-captcha/re-captcha.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { UsersComponent } from './users/users.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  { path: '', component: FormComponent },
  { path: 'users', component: UsersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReCaptchaComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule,
    // RecaptchaModule,
    // RecaptchaFormsModule,
    TextMaskModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
