import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

    getAllUsers(): Observable<any[]> {
      return this.http.get<any[]>('./assets/json/login_users.json').pipe(
        map((data: any) => {
          return data;
        })
      );
    }
}
