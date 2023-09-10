<script setup lang="ts">
import { ref } from 'vue'
const title = ref(import.meta.env.VITE_APP_TITLE)
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container">
        <RouterLink class="d-flex align-items-center navbar-brand p-0" to="/">
          <img src="/assets/img/logo-dark.svg" :alt="title" height="38" class="d-inline-block align-text-top me-2" />
          {{ title }}
        </RouterLink>
        <Burger name="navbarCollapse" />
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <Navbar />
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
nav {
  background-color: rgba(43, 48, 53, .9);
}
</style>
