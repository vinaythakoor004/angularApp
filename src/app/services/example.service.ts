import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<any> {

    return this.httpClient.get("./assets/json/users.json");
  }
  
}
