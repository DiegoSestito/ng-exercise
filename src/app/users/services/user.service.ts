import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from '../models/user.model';
import { Observable } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly LIST_URL = 'https://reqres.in/api/users';
  private readonly DETAILS_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  public getUsersList(page: number): Observable<Array<UserList>> {
    return this.http.get<any>(`${this.LIST_URL}?page=${page}`).pipe(
      tap((v) => console.log(v)),
      map((v) => v.data),
      tap((v) => console.log(v))
    );
  }

  public getUserDetails(id: number): any {
    return this.http
      .get<any>(`${this.DETAILS_URL}/${id}`)
      .pipe(map((v) => v.data));
  }
}
