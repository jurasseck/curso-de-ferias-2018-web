import {FormGroup} from '@angular/forms';

export class EqualPasswordsValidator {
  public static validate(firstField, secondField) {
    return (c:FormGroup) => {       
    (c.controls && c.controls[firstField].value == c.controls[secondField].value) 
        ? c.controls[secondField].setErrors(c.controls[secondField].getError('required') ? {required: {valid:false}} : null) :
          c.controls[secondField].setErrors({passwordsEqual: {valid: false}});
    }
  }

}