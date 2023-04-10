import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'customers-error',
  template: `<small *ngIf="error() "class="text-danger ms-1">{{error()}}</small>`
})
export class CustomersErrorComponent {

  @Input() errorMsg?: FormControl

  error(): string {
    const formControl = this.errorMsg;
    if (!formControl || !formControl.errors || !formControl.dirty || !formControl.touched) {
      return '';
    }

    if (formControl.getError('required')) {
      return 'This field is required';
    }

    const maxlengthErr = formControl.getError('maxlength');
    if (maxlengthErr) {
      return `Cannot be longer than ${maxlengthErr.requiredLength} chr`;
    }

    const minlengthErr = formControl.getError('minlength');
    if (minlengthErr) {
      return `Cannot be shorter than ${minlengthErr.requiredLength} chr`;
    }

    if (formControl.getError('email')) {
      return 'Invalid email';
    }

    return '';
  }
}
