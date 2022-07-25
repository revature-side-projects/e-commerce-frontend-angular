import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {

  
  constructor() { }

  email(input:string): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
  }

  password(input:string):boolean {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(input)
  }

  cardNumber(input:string): boolean {
    return /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(input)
  }

  cvv(input:string):boolean {
    return /\d{3}/.test(input)
  }

  cardExperationData(input:string): boolean {
    return /^((0[1-9])|(1[0-2]))[\/\.\-]*((0[8-9])|(1[1-9]))$/.test(input)
  }

  onlyLetters(input:string): boolean {
    return /^[a-zA-Z]+$/.test(input)
  }

  zipCode(input:string) :boolean {
    return /^\d{5}-?\d{4}?$/.test(input)
  }

}
