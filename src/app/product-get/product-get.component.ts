import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})

export class ProductGetComponent {

  title = 'slice-app';

  constructor(private apiService: ApiService){}

  data_products = [];
  data_offers = [];  
  
  onScroll() {
    console.log('scrolled!!');
  }

  ngOnInit(){
    this.apiService.getProducts().subscribe((res)=>{
        console.log(res['products']);
        this.data_products = res['products'];
    });

    this.apiService.getOffers().subscribe((res)=>{
        console.log(res['offers']);
        this.data_offers = res['offers'];
    });
  }

}
