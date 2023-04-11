import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  customerForm = new FormGroup({
    first: new FormControl<string | undefined>('', [Validators.required, Validators.minLength(2)]),
    last: new FormControl<string | undefined>('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl<string | undefined>('', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]),
    email: new FormControl<string | undefined>('', [Validators.required, Validators.email, Validators.minLength(6)]),
    address: new FormControl<string | undefined>('', Validators.minLength(6))
  })
}