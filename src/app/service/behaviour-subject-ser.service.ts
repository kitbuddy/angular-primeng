import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {UserData} from "../components/model/UserData";
import {User} from "../../../angular-8-registration-login-example/src/app/_models";

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectSerService {

  private _refreshedStatus: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private userDataLoggedIn: BehaviorSubject<UserData> = new BehaviorSubject(null);


  getRefreshedStatus(): Observable<boolean> {
    return this._refreshedStatus.asObservable();
  }

  setRefreshedStatus(value: boolean) {
    this._refreshedStatus.next(value);
  }

  getUserData(): Observable<UserData> {
    return this.userDataLoggedIn.asObservable();
  }

  setUserData(value: UserData) {
    this.userDataLoggedIn.next(value);
  }
}
