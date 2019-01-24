import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { CustomValidator } from './../custom_validator';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  angForm: FormGroup;
  product_det;
  product_data = []


  constructor(private fb: FormBuilder, private ps: PaymentService, private route: ActivatedRoute, private apiService: ApiService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      productId: ['', '' ],
      productPrice: ['', '' ],
      card_name: ['', Validators.required ],
      card_number: ['', [Validators.required , CustomValidator.numberValidator]],
      card_expiry: ['', [Validators.required ] ],
      card_cvv: ['', [Validators.required , CustomValidator.numberValidator] ],
      customer_email: ['', [Validators.required ] ],
    });
  }

  addBooking(customer_email, productId, productPrice) {
    this.ps.addBooking( customer_email, productId, productPrice );
    this.router.navigate(['/success']);
  }

  ngOnInit() {
    this.product_det = this.route.snapshot.queryParamMap.get("product_id")
    this.route.queryParamMap.subscribe(queryParams => {
      this.product_det = queryParams.get("product_id")
    })
  
    this.apiService.getProductById(this.product_det).subscribe((res)=>{
      this.product_data = res['products'];
    });
  }

}
