import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { serviceDetails } from '../../model/serviceDetails';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { bookingData } from '../../../../home/model/bookingData';
import { HomeService } from '../../../../home/service/home.service';
import { AlertService } from '../../../../common/service/alert/alert.service';

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
  private homeService: HomeService = inject(HomeService);

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
  selectedSlotIndex: number = -1;
  isDateInvalid: boolean = false;
  isSlotInvalid: boolean = false;
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  allBookingData: Array<bookingData> = [];

  constructor(private fb: FormBuilder, private alertService: AlertService) {
    this.appointmentForm = this.fb.group({
      selectedDate: ['', Validators.required],
      selectedSlot: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^[0-9]{10}$')],
      message: [''],
    });
    this.minDate.setDate(this.minDate.getDate() - 0);
  }

  ngOnInit(): void {
    if (this.bookService.serviceDetails.length) {
      this.getServiceDetails();
      this.allBookingData = this.homeService.allBookingDataCopy;
    } else {
      this.router.navigate(['services']);
    }
  }

  getServiceDetails(): void {
    this?.activatedRoute?.queryParams?.subscribe((params) => {
      const serviceName = params['name'];
      this.selectesService =
        this.bookService.getServiceDetailsByName(serviceName);
    });
  }


  onDateSelect(date: Date): void {
    this.selectedDate = date;
    this.selectedSlotIndex = -1; // Reset selected slot index when a new date is selected
    this.appointmentForm.patchValue({ selectedDate: date });
    this.appointmentForm.patchValue({ selectedSlot: '' });
    this.isDateInvalid = !this.appointmentForm.value.selectedDate;
    this.isSlotInvalid = !this.appointmentForm.value.selectedSlot;
  }

  selectSlot(slot: any, selectedIndex: number): void {
    this.selectedSlotIndex = selectedIndex;
    this.appointmentForm.patchValue({ selectedSlot: slot });
    this.isSlotInvalid = !this.appointmentForm.value.selectedSlot;
  }

  booAppontment(): void {
    console.log('Booking appointment...');
  }

  nextTab(formTab: any, btn: string): void {
    if (!this.appointmentForm.value.selectedDate || !this.appointmentForm.value.selectedSlot) {
      this.isDateInvalid = !this.appointmentForm.value.selectedDate;
      this.isSlotInvalid = !this.appointmentForm.value.selectedSlot;
      console.log('Please select a date and time slot before proceeding.');
    } else if (formTab && btn == 'next') {
      formTab.selectedIndex = formTab.selectedIndex + 1;
    } else if (formTab && btn == 'prev') {
      formTab.selectedIndex = formTab.selectedIndex - 1;
    }
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointmentData: bookingData = {
        id: this.allBookingData.length,
        firstName: this.appointmentForm.value.firstName,
        lastName: this.appointmentForm.value.lastName,
        email: this.appointmentForm.value.email,
        phone: this.appointmentForm.value.phone,
        message: this.appointmentForm.value.message,
        country: 'USA',
        bookingDetails: {
          serviceName: this.selectesService.name,
          bookingDateTime: this.appointmentForm.value.selectedDate,
          address: this.selectesService.contactDetails,
          time: this.selectesService.time,
          price: this.selectesService.price
        }
      };
      this.allBookingData.unshift(appointmentData);
      this.homeService.allBookingDataCopy = this.allBookingData;
      this.alertService.openSnackBar('Appointment booked successfully!');
      // this.homeService.bookingFormSubmitSubject.next(this.allBookingData);
      console.log('Appointment booked successfully:', this.allBookingData);
      // Perform further actions with the appointment data, such as sending it to a server
      this.router.navigate(['home']);
    } else {
    }
  }

  backBtnClick(): void {
    this.router.navigate(['services/book-service'], { queryParams: { name: this.selectesService.name } });
    this.appointmentForm.reset();
  }
}
