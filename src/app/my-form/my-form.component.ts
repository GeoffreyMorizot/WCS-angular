import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { minDateValidator } from '../validators/minDateValidator';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', [Validators.required]],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm.valueChanges
      // listen to value change
      .subscribe((value) => {
        console.log('orderForm value changes : ', value);
        console.log('f', this.paymentRow);
      });
  }

  handleSubmit() {
    console.log('oderForm submitted : ', this.orderForm.value);
  }

  addPayments() {
    const paymentForm = this.fb.group({
      date: ['', [Validators.required, minDateValidator(new Date())]],
      amount: ['', Validators.required],
    });
    const payments = this.orderForm.get('payments') as FormArray;
    payments.push(paymentForm);
    console.log(this.payments);
  }

  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }
  // Converti de abstract control[] à FormGroup[]
  // Chaque formGroup fait reference a une ligne amount & date
  get paymentRow(): FormGroup[] {
    return this.payments.controls as FormGroup[];
  }
}
