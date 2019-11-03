import { Component, html } from 'htm/preact';
import { Router } from 'preact-router';

import HomePage from './routes';
import MoviesPage from './routes/movies';

export class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return html`
      <div id="app">
        <${Router} onChange=${this.handleRoute}>
          <${HomePage} path="/" />
          <${MoviesPage} path="/movies" />
        <//>
      </div>
    `;
  }
}
