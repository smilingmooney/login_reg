import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {ConfirmPasswordValidator} from '../helpers/must-match.validator';
import {BanksProviderService} from '../services/banks-provider.service';
import {Banks} from '../models/banks.model';
import {ConfirmAccountValidator} from '../helpers/account-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  banks:Banks[]=[];
  
  cities = ['Mumbai','New Delhi','Benguluru','Hyderabad',
   'Chennai','Kolkata','Ahmedabad','Pune',
  'Cochin','Nagpur','Jaipur','Surat',
   'Kanpur','Noida','Chandigarh','Bhubaneshwar',
  'Shimla','Patna','Bhopal','Guwahati',
  'Kohima','Shillong','Itanagar','Kohima','Gangtok'];
 
  constructor(private fb:FormBuilder,private bankProviderService:BanksProviderService) { }
   registrationForm = this.fb.group(
     { companyName:[" ",Validators.required],
      userName:["",Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      password:["",[Validators.required,Validators.minLength(6)]],
      confirmPassword:["",Validators.required],
      mobile:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      bankDet:this.fb.group(
        {
        accountNumber:["",Validators.required],
        confirmAccountNumber:["",Validators.required],
        bankName:["ICICI",Validators.required],
        bankIFSC:["",Validators.required]
        }
      ),
      paymentDet:this.fb.group({
        gstNum:["",Validators.required],
        panNum:["",Validators.required],
        address:this.fb.group({
          hno:["",Validators.required],
          locality:["",Validators.required],
          cities:["Hyderabad",Validators.required],
          state:["",Validators.required],
          pincode:["",Validators.required]
        })

      })
      
      

    },{ validator: ConfirmPasswordValidator.MatchPassword}
    );
    
    get f() { return this.registrationForm.controls; }
    get password()
    {
      return this.registrationForm.get('password');
    }
    get mobile()
    {
      return this.registrationForm.get('mobile');
    }
    get userName()
    {
      return this.registrationForm.get('userName');
    }
    
  ngOnInit() {
    this.banks=this.bankProviderService.getBanks();
    console.log(this.banks);
  }

  onSubmit()
    {
      console.log("hi");
      console.log(this.banks);
    }
   
}
