<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
defineProps<{ name: string }>()
</script>
<template>
  <button @click="open = !open" class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" :data-bs-target="`#${name}`" :aria-controls="name" aria-expanded="false" aria-label="Toggle navigation">
    <div class="animated-burger" :class="{ 'open': open }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
</template>
<style scoped>
.animated-burger {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.animated-burger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.animated-burger span {
  background: #fff;
}

.animated-burger span:nth-child(1) {
  top: 0px;
}

.animated-burger span:nth-child(2) {
  top: 10px;
}

.animated-burger span:nth-child(3) {
  top: 20px;
}

.animated-burger.open span:nth-child(1) {
  top: 11px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.animated-burger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.animated-burger.open span:nth-child(3) {
  top: 11px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
