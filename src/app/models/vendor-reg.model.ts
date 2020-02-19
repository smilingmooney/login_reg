import { PaymentDet } from './payment-det.model';
import { BankDet } from './bank-det.model';

export class VendorReg {
    companyName:string;
    userName:string; //email
    password:string;
    contactNumber:string;
    paymentDet:PaymentDet;
    bankDet:BankDet;
}
