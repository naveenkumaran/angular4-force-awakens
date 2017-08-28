import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IActor } from "../../../shared/interfaces";

function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirm').value
    ? null : {'nomatch': true};
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  form: FormGroup;
  @Input() actor: IActor;
  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      actor:  '',
      name : '',
      last: '',
      account: this.fb.group({
        username: '',
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      }, {validator: passwordMatcher}),
      newsletter: ''
    });

    this.form.patchValue({
      first: 'Nancy',
      last: 'Drew'
    });
  }

}
