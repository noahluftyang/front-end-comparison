<template>
  <Layout>
    <main class="login__wrapper">
      <form class="form__wrapper" @submit="handleSubmit">
        <label>
          Email:
          <a-input id="email" type="email" v-model="formValues.email" />
        </label>
        <label>
          Password:
          <a-input id="password" type="password" v-model="formValues.password" />
        </label>
        <a-button htmlType="submit" type="primary">Login</a-button>
      </form>
    </main>
  </Layout>
</template>

<script lang="ts">
import { Subject } from 'rxjs';

import Layout from '../components/layout.vue';
import { AuthService } from '../services/auth';

const authService = new AuthService();
const form$ = new Subject<any>();

export default {
  components: {
    Layout,
  },
  data() {
    return {
      formValues: {
        email: '',
        password: '',
      },
    };
  },
  created() {
    authService.loginUser(form$).subscribe(response => {
      console.log(response);
    });
  },
  methods: {
    handleSubmit(e) {
      form$.next(this.formValues);
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.login__wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.form__wrapper {
  background-color: #fff;
  display: grid;
  padding: 32px;
  row-gap: 16px;
}
</style>
