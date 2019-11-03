<template>
  <a-layout class="layout-section__full-height">
    <a-layout-content>
      <slot></slot>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.layout-section__full-height {
  min-height: 100vh;
}
</style>
