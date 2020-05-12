import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoginControlService } from '../../services/login-control.service';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit, OnDestroy {
  private loginLogoutSubscription: Subscription;

  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;
  constructor(private loginControlService: LoginControlService) {}

  ngOnInit() {
    this.loginLogoutUnsubscribe();
    this.loginLogoutSubscription = this.loginControlService.loginLogout$.subscribe(
      (v) => {
        this.isLoggedIn = v;
      }
    );
  }

  ngOnDestroy() {
    this.loginLogoutUnsubscribe();
  }

  public login(): void {
    this.loginControlService.loginLogout$.next(true);
  }

  public logout(): void {
    this.loginControlService.loginLogout$.next(false);
  }

  private loginLogoutUnsubscribe(): void {
    this.loginLogoutSubscription && this.loginLogoutSubscription.unsubscribe();
  }
}
