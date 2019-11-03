import styled from '@emotion/styled/macro';
import { Card } from 'antd';
import * as React from 'react';
import { useEffect, useState } from 'react';
import * as InfiniteScroll from 'react-infinite-scroller';

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

    return subscription.unsubscribe;
  }, []);

  return (
    <Layout>
      <InfiniteScroll
        hasMore
        loadMore={(e, f, g) => {
          console.log(e, f, g);
        }}
        pageStart={0}
      >
        <MoviesWrapper>
          {movies.map(({ id, overview, poster_path, title }) => (
            <Card
              cover={<img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />}
              key={`card-${id}`}
            >
              <Card.Meta description={overview} title={title} />
            </Card>
          ))}
        </MoviesWrapper>
      </InfiniteScroll>
    </Layout>
  );
};

export default MoviesPage;
