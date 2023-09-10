<script setup lang="ts">
// interface LinkInterface {
//   github?: { type: string, default: 'https://github.com/sistematico' }
//   demo?: { type: string, default: '' }
// }

defineProps<{
  title: string,
  date: string,
  // body?: { type: string, default: '' },
  // links?: LinkInterface,
}>()
</script>
<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ date }}</h6>
      <p class="card-text">body</p>
      <a href="#" class="card-link">links?.github</a>
      <a href="#" class="card-link">links?.demo </a>
    </div>
  </div>
</template>
