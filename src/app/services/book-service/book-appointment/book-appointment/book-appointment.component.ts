import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { serviceDetails } from '../../model/serviceDetails';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  imports: [MatDatepickerModule, CommonModule, MatTabsModule, ReactiveFormsModule ],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css',
  providers: [provideNativeDateAdapter()],
})
export class BookAppointmentComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private bookService: BookService = inject(BookService);

  selectedDate: Date | null = null;
  timeSlots: Array<string> = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
  ];

  selectesService: serviceDetails = {
    id: 0,
    name: 'default',
    description: 'default',
    price: '0',
    time: 'default',
    servicedescription: 'default',
    contactDetails: 'default',
    image: 'default',
  };

  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      selectedDate: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^[0-9]{10}$')],
      message: [''],
    });
  }

  ngOnInit(): void {
    this?.activatedRoute?.queryParams?.subscribe((params) => {
      const serviceName = params['name'];
      this.selectesService =
        this.bookService.getServiceDetailsByName(serviceName);
    });
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date;
    this.appointmentForm.patchValue({ selectedDate: date });
    console.log('Selected date:', this.selectedDate);
  }

  selectSlot(slot: any): void {
    console.log('Selected time slot:', this.selectedDate);
  }

  nextTab(formTab: any, btn: string): void {
    if (formTab && btn == 'next') {
      formTab.selectedIndex = formTab.selectedIndex + 1;
    } else if (formTab && btn == 'prev') {
      formTab.selectedIndex = formTab.selectedIndex - 1;
    }
  }

  onSubmit(): void {
    console.log(this.appointmentForm.value);
  }
}
