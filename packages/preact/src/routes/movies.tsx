import styled from '@emotion/styled/macro';
import { Card } from 'antd';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';

import * as tmdbApi from '../api/tmdb';
import { Layout } from '../components/mod';

const MoviesWrapper = styled.main`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  margin: 16px;
`;

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const subscription = tmdbApi.readMovies$().subscribe(setMovies);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return html`
    <${Layout}>
      <${MoviesWrapper}>
        ${movies.map(
          ({ id, overview, poster_path, title }) =>
            html`
              <${Card}
                cover=${html`
                  <img alt=${title} src="https://image.tmdb.org/t/p/w500/${poster_path}" />
                `}
                key="card-${id}"
              >
                <${Card.Meta} description=${overview} title=${title} />
              <//>
            `
        )}
      <//>
    <//>
  `;
};

export default MoviesPage;
