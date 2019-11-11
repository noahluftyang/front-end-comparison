import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import v8n from 'v8n';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
        this.http.post('https://reqres.in/api/login', values).pipe(
          map(response => {
            return response;
          }),
          catchError(error => {
            return of(error);
          })
        )
      )
    );
  }

  registerUser(form: Observable<any>) {
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
        this.http.post('https://reqres.in/api/register', values).pipe(
          map(response => {
            return response;
          }),
          catchError(error => {
            return of(error);
          })
        )
      )
    );
  }
}
