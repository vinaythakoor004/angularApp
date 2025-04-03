import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact_service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: [''],
    });
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.contactService.saveContactFormData(this.contactForm.value).subscribe({
        next: (data) => {
          alert(JSON.stringify(data));
        },
        error: (err) => {
          alert('Error please try again!');
        }
      }
      );

      this.contactForm.reset();
    } else {
      console.log('Form is invalid.');
    }
  }
}
