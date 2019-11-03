<template>
  <Layout>
    <a-auto-complete :dataSource="dataSource" @search="handleInputSearch" />
  </Layout>
</template>

<script>
import Layout from '../components/layout.vue';
import { TMDbService } from '../services/tmdb';

const tmdbService = new TMDbService();
// const input$

export default {
  components: {
    Layout,
  },
  data() {
    return {
      dataSource: [],
    };
  },
  methods: {
    handleInputSearch(value) {
      tmdbService.searchMovies(value).subscribe(result => {
        console.log(result);
      });
    },
  },
};
</script>
