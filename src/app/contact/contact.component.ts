import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: [''],
    });
   }

  onSubmit() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      alert('Form submitted successfully!');
      this.contactForm.reset();
    } else {
      console.log('Form is invalid.');
    }
  }
}
