<template>
  <Layout>
    <main class="movies__wrapper">
      <a-card v-bind:key="'card-'+movie.id" v-for="movie in movies">
        <img
          :alt="movie.title"
          :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path"
          slot="cover"
        />
        <a-card-meta :title="movie.title">
          <template slot="description">{{movie.overview}}</template>
        </a-card-meta>
      </a-card>
    </main>
  </Layout>
</template>

<script>
import Layout from '../components/layout.vue';
import { TMDbService } from '../services/tmdb';

const tmdbService = new TMDbService();

export default {
  components: {
    Layout,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    tmdbService.getMovies().subscribe(result => {
      this.movies = result;
    });
  },
};
</script>

<style scoped>
.movies__wrapper {
  display: grid;
  gap: 16px;
  margin: 16px;
}

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 768px) {
  .movies__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 992px) {
}

@media screen and (min-width: 1200px) {
  .movies__wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
