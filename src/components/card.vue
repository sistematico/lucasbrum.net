<script setup lang="ts">
defineProps<{
  title: string,
  date: string,
  link: string,
  duration?: string | Date
}>()
</script>
<template>
  <!-- <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ date }}</h6>
      <p class="card-text">body</p>
      <a href="#" class="card-link">links?.github</a>
      <a href="#" class="card-link">links?.demo </a>
    </div>
  </div> -->


  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{{ date }} · {{ duration }}</h6>
    <component :is="link.includes('://') ? 'a' : 'RouterLink'" v-bind="link.includes('://') ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : { to: link }" class="btn btn-primary stretched-link">
      Leia mais
    </component>
  </div>
</div>
</template>
