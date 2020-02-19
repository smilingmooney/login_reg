import { Injectable } from '@angular/core';
import {Banks} from '../models/banks.model';
@Injectable({
  providedIn: 'root'
})
export class BanksProviderService {

  constructor() { }
  getBanks():Banks[]
  {
    return
    [
      new Banks(1,"Bank of Baroda"),
      new Banks(2,"Bank of India"),
      new Banks(3,"Bank of Maharashtra"),
      new Banks(4,"Canara Bank"),
      new Banks(5,"Syndicate Bank"),
      new Banks(6,"Andhra Bank"),
      new Banks(7,"State Bank of India"),
      new Banks(8,"Axis Bank"),
      new Banks(9,"ICICI"),
      new Banks(10,"HDFC"),
      new Banks(11,"IDBI"),
      new Banks(12,"IndusInd ")
    ];
  }
}
