import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class PaymentService {

  uri = 'http://127.0.0.1:3001/v1/product';

  constructor(private http: HttpClient) { }

  addBooking(customer_email, productId, productPrice) {
    const obj = {
      customer_email: customer_email,
      product_id: productId,
      amount: productPrice
    };
    console.log(obj, " product obj ");
    this.http.post(`${this.uri}/booking`, obj)
        .subscribe(res => console.log('Done'));
  }
}
