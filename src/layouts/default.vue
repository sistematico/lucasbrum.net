<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
</script>
<template>
  <Header />

  <main class="flex-shrink-0">
    <div class="container">
      <slot />
    </div>
  </main>

  <Footer />
</template>
