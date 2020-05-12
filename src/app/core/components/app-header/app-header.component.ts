import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscription, BehaviorSubject } from 'rxjs';
import { LoginControlService } from '../../services/login-control.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
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

  public signup(): void {
    this.loginControlService.loginLogout$.next(true);
  }

  private loginLogoutUnsubscribe(): void {
    this.loginLogoutSubscription && this.loginLogoutSubscription.unsubscribe();
  }
}
