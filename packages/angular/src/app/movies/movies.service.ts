import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http: HttpClient

  movies = [];

  getMovies() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?${stringify({
      api_key: process.env.ANGULAR_TMDB_API_KEY
    })}`)
  }
}
