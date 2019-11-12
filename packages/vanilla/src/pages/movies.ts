import { Subject, from } from 'rxjs';

import { Layout } from '../components/mod';
import { MoviesService } from '../services/movies';

const moviesService = new MoviesService();

const movies = [
  {
    overview: 'hello',
  },
];

const moviesWrapper = document.getElementById('movies__wrapper');

moviesService.readMovies().subscribe(movies => {
  moviesWrapper && moviesWrapper.firstChild && moviesWrapper.removeChild(moviesWrapper.firstChild);

  for (const movie of movies) {
    const li = document.createElement('li');
    li.innerHTML = `
      <p>${movie.overview}</p>
    `;
    moviesWrapper && moviesWrapper.appendChild(li);
  }
});

export const MoviesPage = Layout(`
  <ul id="movies__wrapper"></ul>
`);
