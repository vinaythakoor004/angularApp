import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  allUSerDataCopy: Array<any> = [];
  allUserData: Array<any> = []

  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>("./assets/json/users.json").pipe(map((data: any) => {
      this.allUSerDataCopy = data;
      return data;
    }));
  }
}
