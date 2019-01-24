import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class SignupService {

  uri = 'http://127.0.0.1:3001/v1/user';

  constructor(private http: HttpClient) { }

  addRegistration( customer_email, customer_name, password, address_1, address_2, zip_code, phone_number ) {
    const obj = {
      customer_email: customer_email,
      customer_name: customer_name,
      phone_number: phone_number,
      zip_code: zip_code,
      password: password,
      address_1: address_1,
      address_2: address_2
    };
    this.http.post(`${this.uri}/signup`, obj)
        .subscribe(res => console.log('Done'));
  }
  
  getLogin(customer_email_chk, password_chk){
    const obj = {
      customer_email: customer_email_chk,
      password: password_chk
    };
    this.http.post(`${this.uri}/login`, obj)
        .subscribe(res => console.log('Done'));
  }
}
