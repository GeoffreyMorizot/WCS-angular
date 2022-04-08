import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.scss'],
})
export class SignupReactiveComponent implements OnInit {
  userForm = this.fb.group({
    firstname: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  handleSubmit(userForm: FormGroup) {
    console.log(userForm);
    console.log('user submitted', this.userForm.value);
  }
}
