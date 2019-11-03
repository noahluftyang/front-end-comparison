import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'query-string';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/discover/movie?${stringify({
          api_key: environment.ANGULAR_TMDB_API_KEY,
        })}`
      )
      .pipe(
        map(response => response.results),
        catchError(error => {
          console.error(error);
        })
      );
  }
}
