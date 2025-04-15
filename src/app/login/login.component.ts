import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../common/service/alert/alert.service';
import { ContactService } from '../contact/contact_service/contact.service';
import { CommonModule } from '@angular/common';
import { CommonService } from '../common/service/common/common.service';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  userData: any = [];
  constructor(private fb: FormBuilder, private alertService: AlertService, private contactService: ContactService,
    private commonService: CommonService
  ) {
    this.loginForm = this.fb.group({
      username: ['jakewilson', Validators.required],
      password: ['jakewilson001', Validators.required],
    });
  }
  
  ngOnInit(): void {
    this.commonService.getAllUsers()
      .subscribe({
          next: (data: any) => {
            this.userData = data;
          },
          error: (error) => {
            console.log(error);
          }
        })
  }
  
  onSubmit(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.alertService.openSnackBar('Data saved successfully!');
      this.contactService.saveContactFormData(this.loginForm.value).subscribe({
        next: (data) => {
          alert(JSON.stringify(data));
        },
        error: (err) => {
          alert('Error please try again!');
        }
      }
      );
      this.loginForm.reset();
    } else {
      console.log('Form is invalid.');
    }
  }
}
