import { stringify } from 'query-string';
import { ajax } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';

export function readMovies$() {
  return ajax({
    url: `https://api.themoviedb.org/3/discover/movie?${stringify({
      api_key: process.env.GATSBY_TMDB_API_KEY,
    })}`,
  }).pipe(
    map(response => response.response.results),
    catchError(error => {
      console.error(error);
    })
  );
}
