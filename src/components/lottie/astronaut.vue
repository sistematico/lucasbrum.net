<script setup lang="ts">
// import { ref } from 'vue'
// import { Vue3Lottie } from 'vue3-lottie'
import AstronautJSON from '~/assets/json/astronaut.json'
</script>
<template>
  <!-- <Vue3Lottie :animationData="AstronautJSON" :height="500" :width="500" :no-margin="true" /> -->
  <Vue3Lottie :animationData="AstronautJSON" :scale="1.5" :no-margin="true" />
</template>
