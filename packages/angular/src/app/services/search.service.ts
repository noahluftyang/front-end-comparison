import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'query-string';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchProjects(input: Observable<string>) {
    return input.pipe(
      debounceTime(200),
      filter(value => value !== ''),
      switchMap(value => this.readProjects(value))
    );
  }

  readProjects(q: string) {
    return this.http.get(`https://api.github.com/search/users?${stringify({ q })}`).pipe(
      map(response => response.items),
      catchError(error => {
        console.error(error);
        return of(error);
      })
    );
  }
}
