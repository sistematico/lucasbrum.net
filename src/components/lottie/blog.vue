<script setup lang="ts">
import blogJSON from '~/assets/json/blog.json'
</script>
<template>
  <Vue3Lottie :animationData="blogJSON" :scale="1.3" :no-margin="true" />
</template>
