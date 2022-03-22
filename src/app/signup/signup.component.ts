import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(f: NgForm) {
    console.log(f.form.value);
  }
}

export class User {
  firstname!: string;
  name!: string;
  mail!: string;
  password!: string;
}
