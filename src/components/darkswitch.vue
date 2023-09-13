<script setup lang="ts">
import { ref } from 'vue'

const darkMode = ref(true)

console.log(JSON.stringify(localStorage.getItem("darkMode")))

if (localStorage.getItem("darkMode")) {
  darkMode.value = false
}

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem("darkMode", JSON.stringify(darkMode))
  
  if (darkMode.value) {
    document.body.classList.add("dark")
  } else {
    document.body.classList.remove("dark")
  }

  document.body.classList.toggle("dark")
}
</script>
<template>
  <div>
    <input type="checkbox" class="checkbox" id="checkbox" :checked="darkMode" @click="toggleDarkMode" />
    <label for="checkbox" class="checkbox-label">
      <font-awesome-icon icon="fa-solid fa-moon" />
      <font-awesome-icon icon="fa-solid fa-sun" />
      <span class="ball"></span>
    </label>
  </div>
</template>
<style scoped>
/* * {
  box-sizing: border-box;
} */

/* body {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  margin: 0;
  transition: background 0.2s linear;
} */

.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: #111;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
</style>
