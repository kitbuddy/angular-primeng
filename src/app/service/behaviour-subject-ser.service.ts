import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectSerService {


  private _refreshedStatus: BehaviorSubject<boolean> = new BehaviorSubject(null);

  getRefreshedStatus(): Observable<boolean> {
    return this._refreshedStatus.asObservable();
  }

  setRefreshedStatus(value: boolean) {
    this._refreshedStatus.next(value);
  }
  constructor() { }
}
