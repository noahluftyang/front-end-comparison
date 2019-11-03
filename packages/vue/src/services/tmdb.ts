import { stringify } from 'query-string';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map } from 'rxjs/operators';

export class TMDbService {
  private http = (url: string) => ajax(`https://api.themoviedb.org${url}`);

  getMovies() {
    return this.http(
      `/3/discover/movie?${stringify({
        api_key: process.env.VUE_APP_TMDB_API_KEY,
      })}`
    ).pipe(
      map(response => response.response.results),
      catchError(error => {
        console.error(error);
        return of(error);
      })
    );
  }

  searchMovies(query: string) {
    return this.http(
      `/3/search/movie?${stringify({
        api_key: process.env.VUE_APP_TMDB_API_KEY,
        query,
      })}`
    ).pipe(
      map(response => response.response.results),
      catchError(error => {
        console.error(error);
        return of(error);
      })
    );
  }
}
