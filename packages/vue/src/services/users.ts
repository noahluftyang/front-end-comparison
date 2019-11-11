import { stringify } from 'query-string';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';

export class UsersService {
  private baseUrl = 'https://api.github.com/search/users';

  private http(url: string) {
    return ajax(`${this.baseUrl}${url}`).pipe(
      map(response => response.response),
      catchError(error => of(error))
    );
  }

  searchUsers(input: Observable<string>) {
    return input.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(value => value !== ''),
      switchMap(q => this.http(`?${stringify({ q })}`)),
      map(response => response.items)
    );
  }
}
