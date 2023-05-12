<script setup lang="ts">
defineProps({
  title: { type: String, required: true, default: 'Card title' },
  subtitle: { type: String, default: 'Card subtitle' },
  description: { type: String, default: 'Card description' },
  github: { type: String, default: 'Card description' },
  demo: { type: String, default: 'Card description' },
})
</script>
<template>
  <div class="col">
    <div class="card text-bg-dark">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ subtitle }}</h6>
        <!-- <p class="card-text"><slot /></p> -->
        <a :href="github" class="card-link">Github</a>
        <a :href="demo" class="card-link">Demo</a>
      </div>
    </div>
  </div>
</template>
