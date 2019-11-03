import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesService: MoviesService

  movies

  constructor() { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies()
  }
}
