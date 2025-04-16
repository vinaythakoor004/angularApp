import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoggedIn: boolean = false;
  loggedInUser: any = {};
  constructor(private http: HttpClient) { }

    getAllUsers(): Observable<any[]> {
      return this.http.get<any[]>('./assets/json/login_users.json').pipe(
        map((data: any) => {
          return data;
        })
      );
    }

      checkLoginDetails(data: any, userData: any): Observable<any> {
        let urlPart = '/login';
        return this.http.post(urlPart, data).pipe(() => {
          let isValid: boolean = false;
          for (let index = 0; index < userData.length; index++) {
            const element = userData[index];
            if (
              data.username == element.username &&
              data.password == element.password
            ) {
              this.loggedInUser = element;
              isValid = true;
              break;
            }
          }
          return of({
            isValid,
            userDetails: data,
          });
        });
      }
    
}
