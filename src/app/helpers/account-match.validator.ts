import { AbstractControl } from '@angular/forms';
export class ConfirmAccountValidator {
  static MatchAccount(control: AbstractControl) {
    let accountNumber = control.get('accountNumber').value;
    let confirmAccountNumber = control.get('confirmAccountNumber').value;
    if (accountNumber != confirmAccountNumber) {
      control.get('confirmAccountNumber').setErrors({ confirmAccountNumber: true });
    }
    else {
      return null;
    }
  }
}