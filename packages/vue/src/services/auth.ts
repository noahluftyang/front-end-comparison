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
import v8n from 'v8n';

export class AuthService {
  private baseUrl = 'https://reqres.in/api';

  private http(url: string, options = {}) {
    return ajax({
      url: `${this.baseUrl}${url}`,
      ...options,
    }).pipe(
      map(response => response.response),
      catchError(error => of(error))
    );
  }

  loginUser(form: Observable<any>) {
    return form.pipe(
      filter(
        ({ email, password }) =>
          v8n()
            .not.empty()
            .pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            .testAll(email) &&
          v8n()
            .not.empty()
            .test(password)
      ),
      switchMap(values =>
        this.http('/login', {
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
      )
    );
  }
}
