import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { EMPTY, Observable, combineLatest } from 'rxjs';
import { UserList } from '../../models/user.model';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public usersList$: Observable<Array<UserList>> = EMPTY;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const firstPage$ = this.userService.getUsersList(1);
    const secondPage$ = this.userService.getUsersList(2);

    this.usersList$ = combineLatest<any[]>(firstPage$, secondPage$).pipe(
      map((arr) => arr.reduce((acc, cur) => acc.concat(cur)))
    );
  }

  public details(id: number): void {
    const url = `details/${id}`;
    this.router.navigate([url], { relativeTo: this.route });
  }
}
