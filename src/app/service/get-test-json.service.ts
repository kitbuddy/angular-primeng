import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetTestJsonService {



  constructor(private http: HttpClient) { }

  getTestJson(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts' );
  }
}
