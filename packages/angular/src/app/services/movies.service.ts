import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org';

  constructor(private http: HttpClient) {}

  readMovies() {
    return this.http
      .get(`${this.baseUrl}/3/discover/movie`, {
        params: { api_key: environment.ANGULAR_TMDB_API_KEY },
      })
      .pipe(
        map(response => response.results),
        catchError(error => of(error))
      );
  }
}
