import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginControlService {
  public loginLogout$: BehaviorSubject<boolean>;

  constructor() {
    this.loginLogout$ = new BehaviorSubject<boolean>(false);
  }
}
