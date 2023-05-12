<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand d-flex align-items-center p-0" to="/">
          <img src="/img/logo-dark.svg" alt="Logo" width="38" height="38" class="d-inline-block me-2" />
          Lucas Saliés Brum
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <Navbar />
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  </header>
</template>
