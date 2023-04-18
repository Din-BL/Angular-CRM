import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  customerForm = new FormGroup({
    first_name: new FormControl<string | undefined>('', [Validators.required, Validators.minLength(2)]),
    last_name: new FormControl<string | undefined>('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl<string | undefined>('', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]),
    email: new FormControl<string | undefined>('', [Validators.required, Validators.email, Validators.minLength(6), Validators.pattern(/^\S+@\S+\.\S+$/,)]),
    address: new FormControl<string | undefined>('', Validators.minLength(6))
  })
}
