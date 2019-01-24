import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductGetComponent } from './product-get/product-get.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CreditCardDirectivesModule } from 'angular-cc-library';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { SignupComponent } from './signup/signup.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { PaymentService } from './payment.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductGetComponent,
    PaymentComponent,
    SuccessComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    CreditCardDirectivesModule,
    ReactiveFormsModule,
    FormsModule,
    SlimLoadingBarModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
