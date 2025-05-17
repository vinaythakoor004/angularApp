import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { bookingData } from '../model/bookingData';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpService: HttpService) {}
  allBookingDataCopy: Array<bookingData> = [];
  allBookingData: Array<bookingData> = [];
  bookingFormSubmitSubject = new BehaviorSubject<Array<bookingData>>([])
  isEdit: boolean = false;
  editItem: any = {};
  fetchUsers(): Observable<any[]> {
    return this.httpService.get<any[]>('./assets/json/booking_data.json').pipe(
      map((data: any) => {
        if (data) {
          this.allBookingDataCopy = data;
          return data;
        }
      })
    );
  }

  getBlogs(): Observable<any[]> {
    return this.httpService.get<any[]>('/api/blogs').pipe(
      map((data: any) => {
        if (data) {
          this.allBookingDataCopy = data;
          return data;
        }
      })
    );
  }

  // getServiceData(): Observable<any[]> {
  //   if (this.allBookingDataCopy.length) {
  //     return of(this.allBookingDataCopy);
  //   } else {
  //     return this.http.get<any[]>('/api/bookings').pipe(
  //       map((bookings: any) => {
  //         if (bookings?.data?.length) {
  //           bookings.data.sort(
  //             (a: bookingData, b: bookingData) =>
  //               new Date(b.bookingDetails.bookingDateTime).getTime() -
  //             new Date(a.bookingDetails.bookingDateTime).getTime()
  //           );
  //           this.allBookingDataCopy = bookings.data;
  //           this.allBookingData = bookings.data;
  //           return bookings.data;
  //         } else {
  //           return [];
  //         }
  //       })
  //     );
  //   }
  // }


  getServiceData(): Observable<any[]> {
    if (this.allBookingDataCopy.length) {
      return of(this.allBookingDataCopy);
    } else {
      return this.httpService.get<any[]>('./assets/json/booking_data.json').pipe(
        map((data: any) => {
          if (data){
            data.sort(
              (a: bookingData, b: bookingData) =>
                new Date(b.bookingDetails.bookingDateTime).getTime() -
              new Date(a.bookingDetails.bookingDateTime).getTime()
            );
            this.allBookingDataCopy = data;
            this.allBookingData = data;
            return data;
          }
        })
      );
    }
  }
}
