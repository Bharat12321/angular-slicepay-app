import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { CustomValidator } from './../custom_validator';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  angForm: FormGroup;
  angFormLogin: FormGroup;

  constructor(private fb: FormBuilder, private ss: SignupService, private router: Router) {
    this.createForm();
    this.loginForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      customer_email: ['', Validators.required ],
      customer_name: ['', Validators.required ],
      password: ['', Validators.required ],
      address_1: ['', [Validators.required ] ],
      address_2: ['', [Validators.required ] ],
      zip_code: ['', [Validators.required , CustomValidator.numberValidator] ],
      phone_number: ['', [Validators.required , CustomValidator.numberValidator]],
    });
  }

  loginForm() {
    this.angFormLogin = this.fb.group({
      customer_email_chk: ['', Validators.required ],
      password_chk: ['', Validators.required ],
    });
  }

  addRegistration( customer_email, customer_name, password, address_1, address_2, zip_code, phone_number  ) {
    this.ss.addRegistration( customer_email, customer_name, password, address_1, address_2, zip_code, phone_number );
    this.router.navigate(['']);
  }

  getLogin(customer_email_chk, password_chk){
    this.ss.getLogin( customer_email_chk, password_chk);
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
