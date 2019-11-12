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

export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org';

  private http(url: string) {
    return ajax(`${this.baseUrl}${url}`).pipe(
      map(response => response.response.results),
      catchError(error => of(error))
    );
  }

  readMovies() {
    return this.http(
      `/3/discover/movie?${stringify({ api_key: process.env.VANILLA_APP_TMDB_API_KEY })}`
    );
  }

  searchMovies(input: Observable<string>) {
    return input.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(value => value !== ''),
      switchMap(query =>
        this.http(
          `/3/search/movie?${stringify({ api_key: process.env.VANILLA_APP_TMDB_API_KEY, query })}`
        )
      )
    );
  }
}
