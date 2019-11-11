import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  searchUsers(input: Observable<string>) {
    return input.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(value => value !== ''),
      switchMap(value => this.readUsers(value))
    );
  }

  readUsers(q: string) {
    return this.http
      .get('https://api.github.com/search/users', {
        params: new HttpParams().set('q', q),
      })
      .pipe(
        map(response => response.items),
        catchError(error => {
          console.error(error);
          return of(error);
        })
      );
  }
}
