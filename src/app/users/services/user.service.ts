import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';
import { UserRequest } from '../models/user-request.model';
import { UserList } from '../models/user-list.model';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly LIST_URL = 'https://reqres.in/api/users';
  private readonly DETAILS_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  public getUsersList(page: number): Observable<Array<UserList>> {
    return this.http
      .get<UserRequest>(`${this.LIST_URL}?page=${page}`)
      .pipe(map((v) => v.data.map((u) => new UserList(u))));
  }

  public getUserDetails(id: number): Observable<UserDetails> {
    return this.http
      .get<UserRequest>(`${this.DETAILS_URL}/${id}`)
      .pipe(map((v) => v.data));
  }
}
