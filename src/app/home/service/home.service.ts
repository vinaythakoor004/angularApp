import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { bookingData } from '../model/bookingData';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  allBookingDataCopy: Array<bookingData> = [];
  allBookingData: Array<bookingData> = [];
  bookingFormSubmitSubject = new BehaviorSubject<Array<bookingData>>([])
  isEdit: boolean = false;
  editItem: any = {};
  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>('./assets/json/booking_data.json').pipe(
      map((data: any) => {
        this.allBookingDataCopy = data;
        return data;
      })
    );
  }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>('/api/blogs').pipe(
      map((data: any) => {
        this.allBookingDataCopy = data;
        return data;
      })
    );
  }

  getServiceData(): Observable<any[]> {
    if (this.allBookingDataCopy.length) {
      return of(this.allBookingDataCopy);
    } else {
      return this.http.get<any[]>('./assets/json/booking_data.json').pipe(
        map((data: any) => {
          data.sort(
            (a: bookingData, b: bookingData) =>
              new Date(b.bookingDetails.bookingDateTime).getTime() -
            new Date(a.bookingDetails.bookingDateTime).getTime()
          );
          this.allBookingDataCopy = data;
          this.allBookingData = data;
          return data;
        })
      );
    }
  }
}
