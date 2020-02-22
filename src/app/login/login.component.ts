import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserService} from '../services/user.service'
//import { AuthenticationService } from '../_services'

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;
    success: string;
    username:any;
    password:any;
   
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,private userdets:UserService
        
    ) {
        
       
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

       
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit(formdata:any) {
      this.submitted = true;
      //this.loginForm = this.formBuilder.group({});
      // reset alerts on submit
      this.error = null;
      this.success = null;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.loading = true;
      this.username = formdata.value.username;
      this.password = formdata.value.password;
      if(this.username.length !=0 && this.password.length !=0){
       
        this.userdets.username = this.username;
        this.router.navigate(['/profile']);
      }
      
     
  }
}