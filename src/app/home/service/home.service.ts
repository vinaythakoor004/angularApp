import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  allUSerDataCopy: Array<any> = [];
  allUserData: Array<any> = [
    { id: 1,  firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 2, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 3, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 4, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 5, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 6, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 7, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 8, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 9, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 10, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 11, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 12, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 13, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 14, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 15, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 16, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 17, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 18, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 19, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 20, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 21, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 22, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 23, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 24, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 25, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 26, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 27, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 28, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 29, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 30, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 31, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 32, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 33, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 34, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 35, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 36, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 37, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 38, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 39, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 40, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 41, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 42, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 43, firstName: "Ajay", lastName: "Patil", handle: "Facebook" }
  ];

  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>("/users").pipe(() => {
      this.allUSerDataCopy = this.allUserData;
      return of(this.allUserData);
    });
}
}
