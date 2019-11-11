<template>
  <Layout>
    <a-auto-complete @search="handleInputChange">
      <template slot="dataSource">
        <a-select-option v-for="option in options" :key="option.node_id">{{option.login}}</a-select-option>
      </template>
    </a-auto-complete>
  </Layout>
</template>

<script lang="ts">
import { Subject } from 'rxjs';

import Layout from '../components/layout.vue';
import { UsersService } from '../services/users';

const usersService = new UsersService();
const input$ = new Subject<string>();

export default {
  components: {
    Layout,
  },
  data() {
    return {
      options: [],
    };
  },
  created() {
    // search users by input keyword
    usersService.searchUsers(input$).subscribe(users => {
      this.options = users;
    });
  },
  methods: {
    handleInputChange(value) {
      input$.next(value);
    },
  },
};
</script>
