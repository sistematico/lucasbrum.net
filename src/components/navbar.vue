<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isBlog = ref(false)
isBlog.value = route.name?.toString().startsWith('posts-') ? true : false
</script>
<template>
  <ul class="navbar-nav ms-auto mb-2 mb-md-0">
    <li class="nav-item">
      <RouterLink class="nav-link" to="/">Início</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" :class="{'active': isBlog }" to="/posts">Blog</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/projetos">Projetos</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/contato">Contato</RouterLink>
    </li>
  </ul>
</template>
