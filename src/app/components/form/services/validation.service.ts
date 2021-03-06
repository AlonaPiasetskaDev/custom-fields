import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public regex = {
    email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
    name: '^[a-zA-Z ]{3,}$', //min 3, only letters, latin
    customComment: '.{20,}$', //min 20
  }

  getValidationErrors(group: FormGroup, validationMessages: Object): any {
    let formErrors = {};

    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      formErrors[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {
        const messages = validationMessages[key];

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        let groupError = this.getValidationErrors(abstractControl, validationMessages);
        formErrors = { ...formErrors, ...groupError }
      }
    });
    return formErrors
  }
}
