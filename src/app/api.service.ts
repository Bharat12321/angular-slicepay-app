import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  	apiURL: string = 'http://127.0.0.1:3001/v1';

  	constructor(private httpClient: HttpClient) {}

	public getProducts(){
	    return this.httpClient.get<Product[]>(`${this.apiURL}/products`);
	}

	public getOffers(){
	    return this.httpClient.get<Offer[]>(`${this.apiURL}/offers`);
	}	

	public getProductById(id: number){
	    return this.httpClient.get<Product[]>(`${this.apiURL}/product/${id}`);
	}



}
