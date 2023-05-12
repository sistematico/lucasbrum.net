<script setup lang="ts">
import Card from '@/components/card.vue'
</script>
<template>
  <h1 class="mt-3">Projetos</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <Card title="FIPE" subtitle="Consulta da tabela fipe usando o Vue.js" github="https://github.com/sistematico/fipe" demo="https://sistematico.github.io/fipe" />
    <Card title="Moon Phase" subtitle="Consulta a fase da lua atual" github="https://github.com/sistematico/moon-phase" demo="https://sistematico.github.io/moon-phase" />
  </div>
</template>
