<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\\/]+/g, '-')
}
</script>

<template>
<div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>

    </div>
  </div>

  <div class="max-w-300 mx-auto">
    <div v-for="key, cidx in Object.keys(projects)" :key="key" :style="{ '--enter-stage': cidx + 1 }">
      <h4 :id="slug(key)" class="my-2 font-bold">{{ key }}</h4>

      <!-- <div class="project-grid py-2 max-w-500 w-max mx-auto" grid="~ cols-1 md:cols-2 gap-4" :class="projects[key].length === 1 ? 'flex' : projects[key].length > 2 ? 'lg:grid-cols-3' : ''"> -->

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">

        <div class="card" v-for="item, idx in projects[key]" :key="idx">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>

        <!-- <a v-for="item, idx in projects[key]" :key="idx" :href="item.link" target="_blank" :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''" :title="item.name"> -->
          <!-- <div v-if="item.icon" class="pt-2 pr-5">
            <Slidev v-if="item.icon === 'slidev'" class="text-4xl opacity-50" />
            <VueUse v-else-if="item.icon === 'vueuse'" class="text-4xl opacity-50" />
            <VueReactivity v-else-if="item.icon === 'vue-reactivity'" class="text-4xl opacity-50" />
            <VueDemi v-else-if="item.icon === 'vue-demi'" class="text-4xl opacity-50" />
            <Unocss v-else-if="item.icon === 'unocss'" class="text-4xl opacity-50" />
            <Vitest v-else-if="item.icon === 'vitest'" class="text-4xl opacity-50" />
            <Elk v-else-if="item.icon === 'elk'" class="text-4xl opacity-50" />
            <div v-else class="text-3xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
          </div> -->
          <!-- <div class="flex-auto">
            <div class="text-normal">{{ item.name }}</div>
            <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
          </div> -->


          <a :href="item.link" target="_blank" class="card-link">Card link</a>

          </div>
          </div>


        <!-- </a> -->

        </div>
      </div>

      <!-- </div> -->
    </div>
  </div>
  <!-- TOC -->
  <!-- <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(projects)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div> -->
</template>