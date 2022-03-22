import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  model: Order = new Order();
  constructor() {}

  ngOnInit(): void {}

  handleSubmit(myForm: NgForm) {
    console.log(myForm.form.value);
  }
}

export class Order {
  title!: string;
  quantity!: number;
  date!: Date;
  contact!: string;
}
